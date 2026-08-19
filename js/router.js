/* Subdomain Simulation & Page Routing Engine */

let currentSubdomain = 'holding'; // 'holding', 'export', 'edu'
let currentLanguage = 'en'; // 'en', 'id', 'de'

function switchSubdomain(subdomain) {
  currentSubdomain = subdomain;
  
  // Update Tab Buttons UI
  document.querySelectorAll('.domain-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subdomain === subdomain);
  });
  
  // Update Simulated URL bar text
  const hostDisplay = document.getElementById('url-host-display');
  if (hostDisplay) {
    if (subdomain === 'holding') {
      hostDisplay.innerText = 'admiralmalika.com';
    } else if (subdomain === 'export') {
      hostDisplay.innerText = 'export.admiralmalika.com';
    } else if (subdomain === 'edu') {
      hostDisplay.innerText = 'edu.admiralmalika.com';
    }
  }
  
  // Toggle Page Visibility
  document.querySelectorAll('.site-page').forEach(page => {
    page.classList.remove('active');
  });
  
  const activePage = document.getElementById(`page-${subdomain}`);
  if (activePage) {
    activePage.classList.add('active');
  }
  
  // Language constraint check: export.admiralmalika.com is strictly in English!
  const langBar = document.getElementById('main-lang-bar');
  if (subdomain === 'export') {
    if (langBar) langBar.style.display = 'none'; // Export is strictly English
    setLanguage('en');
  } else {
    if (langBar) langBar.style.display = 'flex';
    setLanguage(currentLanguage);
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLanguage(lang) {
  currentLanguage = lang;
  
  // Update Language Buttons UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  
  // Translate input placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}
