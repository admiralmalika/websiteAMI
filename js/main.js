/* Admiral Malika Main Frontend Script */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Dynamic Rendering from CMS State (for dynamic catalogs)
  if (typeof getCMSData === 'function') {
    const cms = getCMSData();

    // Render Agraria Catalog
    const agrariaContainer = document.getElementById('agraria-catalog-grid');
    if (agrariaContainer && cms.agraria) {
      agrariaContainer.innerHTML = cms.agraria.map(item => `
        <div class="pillar-card">
          <div class="pillar-top-stripe stripe-agraria"></div>
          <span class="badge-status badge-active" style="align-self: flex-start; margin-bottom: 1rem;">${item.category}</span>
          <h3 class="pillar-title">${item.name}</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1rem;">${item.description}</p>
          <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; font-size: 0.85rem; color: #334155; margin-top: auto;">
            <strong>Spesifikasi Ekspor:</strong><br>${item.specs}
          </div>
          <a href="contact.html?subject=${encodeURIComponent('RFQ: ' + item.name)}" class="btn btn-primary btn-sm" style="margin-top: 1.25rem;">
            <i class="fas fa-paper-plane"></i> Minta Penawaran (RFQ)
          </a>
        </div>
      `).join('');
    }

    // Render Education Programs
    const eduContainer = document.getElementById('edu-program-grid');
    if (eduContainer && cms.education) {
      eduContainer.innerHTML = cms.education.map(item => `
        <div class="pillar-card">
          <div class="pillar-top-stripe stripe-edu"></div>
          <div class="pillar-icon-box icon-edu">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <h3 class="pillar-title">${item.title}</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1rem;">${item.description}</p>
          <ul class="pillar-list">
            ${item.details.map(d => `<li><i class="fas fa-check-circle"></i> ${d}</li>`).join('')}
          </ul>
          <a href="contact.html?subject=${encodeURIComponent('Konsultasi: ' + item.title)}" class="btn btn-gold btn-sm" style="margin-top: auto;">
            <i class="fab fa-whatsapp"></i> Konsultasi Program
          </a>
        </div>
      `).join('');
    }
  }

  // Handle Form Submissions
  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('inq-submit-btn') || inquiryForm.querySelector('button[type="submit"]');
      const statusBox = document.getElementById('inquiry-form-status');

      const name = (document.getElementById('inq-name')?.value || '').trim();
      const email = (document.getElementById('inq-email')?.value || '').trim();
      const phone = (document.getElementById('inq-phone')?.value || '').trim();
      
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="need_option"]:checked')).map(cb => cb.value);
      const pillarEl = document.getElementById('inq-pillar');
      const pillar = checkedBoxes.length > 0 ? checkedBoxes.join(', ') : (pillarEl ? pillarEl.value : 'Kebutuhan Umum');
      
      const message = (document.getElementById('inq-message')?.value || '').trim();

      const originalBtnHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirimkan pesan...';
      if (statusBox) statusBox.style.display = 'none';

      // Save to local CMS inquiries
      if (typeof submitInquiry === 'function') {
        try {
          submitInquiry({ name, email, phone, pillar, message });
        } catch (err) {}
      }

      const payload = {
        name: name,
        email: email,
        _replyto: email,
        _subject: `[Website Contact] ${pillar} - ${name}`,
        _cc: "malikamannacenter@gmail.com",
        _template: "table",
        _captcha: "false",
        "Nama Pengirim": name,
        "Email Pengirim": email,
        "No. WhatsApp / HP": phone,
        "Kebutuhan / Layanan": pillar,
        "Isi Pesan": message,
        "Waktu Pengiriman": new Date().toLocaleString('id-ID')
      };

      const waText = `Halo Admin Admiral Malika,\n\nSaya ingin mengajukan pertanyaan/inquiry:\n• *Nama:* ${name}\n• *Email:* ${email}\n• *HP/WA:* ${phone}\n• *Kebutuhan:* ${pillar}\n\n*Pesan Anda:* ${message}`;
      const waUrl = `https://wa.me/6281118893389?text=${encodeURIComponent(waText)}`;

      try {
        const response = await fetch("https://formsubmit.co/ajax/hary.kristianto.info@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && (result.success === "true" || result.success === true || response.status === 200)) {
          inquiryForm.reset();
          if (statusBox) {
            statusBox.style.display = 'block';
            statusBox.style.background = '#f0fdf4';
            statusBox.style.border = '1px solid #86efac';
            statusBox.style.color = '#166534';
            statusBox.innerHTML = `
              <div style="display:flex; align-items:flex-start; gap:12px;">
                <i class="fas fa-check-circle" style="color:#16a34a; font-size:1.5rem; margin-top:2px;"></i>
                <div style="flex:1;">
                  <strong style="color:#15803d; font-size:1rem; display:block; margin-bottom:4px;">Pesan Anda Berhasil Terkirim!</strong>
                  <p style="margin:0 0 10px 0; font-size:0.9rem; line-height:1.5; color:#1e293b;">Pesan Anda telah dikirimkan ke email manajemen PT. Admiral Malika Internasional (<strong>hary.kristianto.info@gmail.com</strong> & <strong>malikamannacenter@gmail.com</strong>). Tim kami akan segera merespons.</p>
                  <a href="${waUrl}" target="_blank" class="btn btn-sm" style="background:#25D366; color:#fff; display:inline-flex; align-items:center; gap:6px; padding:0.5rem 0.9rem; border-radius:6px; text-decoration:none; font-weight:600;"><i class="fab fa-whatsapp"></i> Teruskan ke WhatsApp Langsung (Opsional)</a>
                </div>
              </div>
            `;
            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          throw new Error(result.message || 'Form submission failed');
        }
      } catch (err) {
        console.error("Inquiry form submission error:", err);

        const mailtoUrl = `mailto:hary.kristianto.info@gmail.com?cc=malikamannacenter@gmail.com&subject=${encodeURIComponent('[Website Contact] ' + pillar + ' - ' + name)}&body=${encodeURIComponent(
          'Halo Tim Admiral Malika,\n\n' +
          'Nama: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'HP/WA: ' + phone + '\n' +
          'Kebutuhan: ' + pillar + '\n\n' +
          'Pesan:\n' + message
        )}`;

        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.style.background = '#fef2f2';
          statusBox.style.border = '1px solid #fca5a5';
          statusBox.style.color = '#991b1b';
          statusBox.innerHTML = `
            <div style="display:flex; align-items:flex-start; gap:12px;">
              <i class="fas fa-exclamation-circle" style="color:#dc2626; font-size:1.5rem; margin-top:2px;"></i>
              <div style="flex:1;">
                <strong style="color:#b91c1c; font-size:1rem; display:block; margin-bottom:4px;">Pengiriman Otomatis Terkendala Jaringan</strong>
                <p style="margin:0 0 10px 0; font-size:0.9rem; line-height:1.5; color:#1e293b;">Silakan teruskan pesan Anda langsung melalui tombol di bawah:</p>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                  <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="text-decoration:none;"><i class="fas fa-envelope"></i> Kirim via Email</a>
                  <a href="${waUrl}" target="_blank" class="btn btn-sm" style="background:#25D366; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:6px; padding:0.5rem 0.9rem; border-radius:6px; font-weight:600;"><i class="fab fa-whatsapp"></i> Kirim via WhatsApp</a>
                </div>
              </div>
            </div>
          `;
          statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalBtnHtml;
      }
    });
  }
});
