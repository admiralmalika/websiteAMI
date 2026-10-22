/* Admiral Malika - CMS State Engine */

const CMS_STORAGE_KEY = 'admiral_malika_cms_v5';

const DEFAULT_CMS_DATA = {
  hero: {
    tag: '',
    title: "Indonesia's Premier <span>Global Trade Aggregator & Exporter</span>",
    subtitle: "PT. Admiral Malika Internasional is a corporate enterprise engaged in domestic and international trade, aggregating, processing, and exporting Indonesia's finest commodities to global markets."
  },
  agraria: [
    {
      id: 'ag-1',
      name: 'Daun Pisang (Fresh & Frozen Vacuum Packaging)',
      category: 'Food-Grade Packaging',
      description: 'Daun pisang segar dan frozen vacuum-sealed higienis standar ekspor untuk kemasan kuliner ramah lingkungan.',
      specs: 'Kemasan: 500g, 1kg Vacuum Bag / Master Carton 10kg. Cert: Phytosanitary & Food Grade.',
      badge: 'Produk Unggulan Packaging'
    },
    {
      id: 'ag-2',
      name: 'Gula Semut Organik (Organic Coconut Sugar)',
      category: 'Turunan Kelapa',
      description: 'Gula kelapa kristal organik premium dengan kadar air rendah (< 2%) dan Indeks Glikemik rendah.',
      specs: 'Mesh: 14-16, Moisture: Max 2%, Cert: Organic, Halal, HACCP. Packaging: Bag 25kg / Retail.',
      badge: 'Export Quality B2B'
    },
    {
      id: 'ag-3',
      name: 'Singkong Olahan & Turunannya (Cassava Flour & Chips)',
      category: 'Turunan Singkong',
      description: 'Tepung Mocaf premium, Tapioca Starch, serta keripik singkong mentah berkualitas tinggi.',
      specs: 'White Index: > 90%, Moisture: Max 12%. Packaging: Bag 25kg / 50kg / Jumbo Bag 1 Ton.',
      badge: 'Volume Besar B2B'
    },
    {
      id: 'ag-4',
      name: 'Sapu Lidi & Arang Bathok (Palm Broom & Charcoal)',
      category: 'Turunan Kelapa',
      description: 'Sapu lidi pelepah kelapa & arang tempurung kelapa briket untuk kebutuhan industri & rumah tangga.',
      specs: 'Length: 80-120cm, Moisture: Max 8%. Packaging: Bundle 50kg / Container Load.',
      badge: 'Komoditas Industri'
    }
  ],
  education: [
    {
      id: 'ed-1',
      title: 'Program Sekolah Kejuruan / Ausbildung (Setara D3)',
      partner: '',
      description: 'Program persiapan dan penyaluran lulusan SMA/SMK/Diploma untuk magang kejuruan berbayar di Jerman.',
      details: [
        'Uang saku bulanan €1.000 - €1.400 / bulan di Jerman',
        'Persiapan intensif Bahasa Jerman (A1 - B2)',
        'Bidang: Teknik, Hospitality, Nursing, Logistics'
      ]
    },
    {
      id: 'ed-2',
      title: 'Program Duales Studium (Setara D4 / Applied Bachelor)',
      partner: '',
      description: 'Program pendidikan tinggi terintegrasi (Kuliah D4 Terapan + Kerja Bergaji) di Universitas & Perusahaan Jerman.',
      details: [
        'Gaji kerja tahunan & bebas biaya kuliah di Jerman',
        'Gelar Bachelor of Engineering / Science resmi Jerman',
        'Persiapan Bahasa Jerman & Mentoring Akademik'
      ]
    }
  ],
  inquiries: []
};

// Initialize CMS Data & Clear All Legacy Caches
function getCMSData() {
  localStorage.removeItem('admiral_malika_cms_data');
  localStorage.removeItem('admiral_malika_cms_v2');
  localStorage.removeItem('admiral_malika_cms_v3');
  localStorage.removeItem('admiral_malika_cms_v4');

  const data = localStorage.getItem(CMS_STORAGE_KEY);
  if (!data) {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(DEFAULT_CMS_DATA));
    return DEFAULT_CMS_DATA;
  }
  
  try {
    let parsed = JSON.parse(data);
    if (parsed.education) {
      parsed.education.forEach(item => {
        item.partner = '';
      });
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(DEFAULT_CMS_DATA));
    return DEFAULT_CMS_DATA;
  }
}

function saveCMSData(data) {
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
}

// Add Inquiry Lead
function submitInquiry(leadData) {
  const cms = getCMSData();
  const newLead = {
    id: 'inq-' + Date.now(),
    date: new Date().toLocaleString('id-ID'),
    name: leadData.name,
    email: leadData.email,
    phone: leadData.phone,
    pillar: leadData.pillar,
    message: leadData.message,
    status: 'Baru'
  };
  cms.inquiries.unshift(newLead);
  saveCMSData(cms);
}

// Frontend CMS Admin Gate (Prompt for password MZ212)
function handleCmsNavClick(event) {
  if (sessionStorage.getItem('ami_admin_session') === 'MZ212_AUTHENTICATED') {
    return true;
  }
  if (event) event.preventDefault();
  showFrontendAdminGate();
  return false;
}

function showFrontendAdminGate() {
  if (document.getElementById('frontend-admin-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'frontend-admin-modal';
  modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(7,15,30,0.88); backdrop-filter:blur(14px); z-index:999999; display:flex; align-items:center; justify-content:center; padding:1.5rem; box-sizing:border-box;';
  modal.innerHTML = `
    <div style="background:#fff; width:100%; max-width:420px; border-radius:20px; padding:2.5rem 2.2rem; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.35); text-align:center; box-sizing:border-box; animation:adminModalPop 0.28s cubic-bezier(0.16, 1, 0.3, 1);">
      <div style="width:48px; height:48px; font-size:1.25rem; margin:0 auto 14px auto; background:linear-gradient(135deg, #d4af37, #aa7c11); color:#070f1e; font-weight:800; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 15px rgba(212,175,55,0.4);">AMI</div>
      <h2 style="font-family:'Cinzel', serif, sans-serif; font-size:1.35rem; font-weight:700; color:#070f1e; margin-bottom:4px;">Akses CMS Admin</h2>
      <p style="font-size:0.82rem; color:#64748b; margin:0 0 18px 0; text-transform:uppercase; letter-spacing:0.8px;">PT. Admiral Malika Internasional</p>
      
      <div id="front-admin-err" style="display:none; background:#fef2f2; border:1px solid #fecaca; color:#dc2626; padding:10px 14px; border-radius:10px; font-size:0.84rem; margin-bottom:16px; text-align:left;">
        <i class="fas fa-exclamation-triangle" style="margin-right:6px;"></i> Password salah! Silakan coba lagi.
      </div>

      <form onsubmit="submitFrontendAdminAuth(event)">
        <div style="margin-bottom:1.25rem; text-align:left;">
          <label style="display:block; font-size:0.82rem; font-weight:700; color:#1e293b; margin-bottom:6px;">Password Administrator</label>
          <div style="position:relative;">
            <input type="password" id="front-admin-pass" required placeholder="Masukkan password..." autofocus
                   style="width:100%; box-sizing:border-box; padding:0.75rem 2.8rem 0.75rem 1rem; border:1.5px solid #cbd5e1; border-radius:10px; font-size:0.95rem; outline:none;"
                   onfocus="this.style.borderColor='#d4af37'" onblur="this.style.borderColor='#cbd5e1'">
            <button type="button" onclick="toggleFrontAdminPassVisibility()" 
                    style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; color:#64748b; cursor:pointer; padding:6px; font-size:0.95rem;">
              <i class="fas fa-eye" id="front-eye-icon"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-gold" style="width:100%; justify-content:center; padding:0.8rem; font-weight:800; font-size:0.95rem; border-radius:10px; cursor:pointer;">
          <i class="fas fa-shield-alt"></i> Masuk ke CMS Admin
        </button>
        <div style="margin-top:1.25rem; text-align:center;">
          <button type="button" onclick="document.getElementById('frontend-admin-modal').remove()" style="background:none; border:none; font-size:0.84rem; color:#64748b; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            <i class="fas fa-times"></i> Batalkan
          </button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => {
    const input = document.getElementById('front-admin-pass');
    if (input) input.focus();
  }, 80);
}

function submitFrontendAdminAuth(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('front-admin-pass');
  const errBox = document.getElementById('front-admin-err');
  if (!input) return;

  if (input.value.trim() === 'MZ212') {
    sessionStorage.setItem('ami_admin_session', 'MZ212_AUTHENTICATED');
    const modal = document.getElementById('frontend-admin-modal');
    if (modal) modal.remove();
    // Redirect to admin index
    const adminPath = window.location.pathname.includes('/admin') ? 'index.html' : 'admin/index.html';
    window.location.href = adminPath;
  } else {
    if (errBox) errBox.style.display = 'block';
    input.classList.add('shake-error');
    input.value = '';
    input.focus();
    setTimeout(() => input.classList.remove('shake-error'), 450);
  }
}

function toggleFrontAdminPassVisibility() {
  const input = document.getElementById('front-admin-pass');
  const icon = document.getElementById('front-eye-icon');
  if (!input || !icon) return;
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

