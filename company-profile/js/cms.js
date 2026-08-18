/* Admiral Malika - CMS State Engine */

const CMS_STORAGE_KEY = 'admiral_malika_cms_v2';

const DEFAULT_CMS_DATA = {
  hero: {
    tag: '⚡ PT. ADMIRAL MALIKA INTERNASIONAL',
    title: 'Solusi Terpercaya <span>Agraria & Pendidikan Jerman</span>',
    subtitle: 'PT. Admiral Malika Internasional menghadirkan komoditas pertanian unggulan Indonesia ke pasar dunia serta membuka jalan karir & studi internasional di Jerman.'
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
      partner: 'Divisi Pendidikan Jerman PT. Admiral Malika',
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
      partner: 'Divisi Pendidikan Jerman PT. Admiral Malika',
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

// Initialize CMS Data & Auto-Purge Legacy Cache
function getCMSData() {
  // Clear any old v1 cache containing legacy references
  localStorage.removeItem('admiral_malika_cms_data');

  const data = localStorage.getItem(CMS_STORAGE_KEY);
  if (!data) {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(DEFAULT_CMS_DATA));
    return DEFAULT_CMS_DATA;
  }
  
  try {
    let parsed = JSON.parse(data);
    let updated = false;
    if (parsed.education) {
      parsed.education.forEach(item => {
        if (!item.partner || item.partner.includes('Elrafa') || item.partner.includes('Kolaborasi')) {
          item.partner = 'Divisi Pendidikan Jerman PT. Admiral Malika';
          updated = true;
        }
      });
    }
    if (updated) {
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
