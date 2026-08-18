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

  // Dynamic Rendering from CMS State
  if (typeof getCMSData === 'function') {
    const cms = getCMSData();

    // Render Hero if elements exist
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroTag = document.getElementById('hero-tag');

    if (heroTitle && cms.hero.title) heroTitle.innerHTML = cms.hero.title;
    if (heroSubtitle && cms.hero.subtitle) heroSubtitle.textContent = cms.hero.subtitle;
    if (heroTag && cms.hero.tag) heroTag.textContent = cms.hero.tag;

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
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inq-name').value;
      const email = document.getElementById('inq-email').value;
      const phone = document.getElementById('inq-phone').value;
      
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="need_option"]:checked')).map(cb => cb.value);
      const pillarEl = document.getElementById('inq-pillar');
      const pillar = checkedBoxes.length > 0 ? checkedBoxes.join(', ') : (pillarEl ? pillarEl.value : 'Kebutuhan Umum');
      
      const message = document.getElementById('inq-message').value;

      if (typeof submitInquiry === 'function') {
        submitInquiry({ name, email, phone, pillar, message });
        
        // Open Direct WhatsApp Chat to Admin
        const waText = `Halo Admin Admiral Malika,\n\nSaya ingin mengajukan pertanyaan/inquiry:\n• *Nama:* ${name}\n• *Email:* ${email}\n• *HP/WA:* ${phone}\n• *Kebutuhan:* ${pillar}\n\n*Pesan Anda:* ${message}`;
        window.open(`https://wa.me/6281118893389?text=${encodeURIComponent(waText)}`, '_blank');
        
        alert('Terima kasih! Pesan Anda telah terdaftar dan akan segera kami proses.');
        inquiryForm.reset();
      }
    });
  }
});
