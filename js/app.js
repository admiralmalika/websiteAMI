/* Main Application Event Handlers & Interactive UI Modules */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Subdomain & Language
  switchSubdomain('holding');
  renderCommoditiesCatalog();
  
  // Tab buttons click listener
  document.querySelectorAll('.domain-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetSub = e.currentTarget.dataset.subdomain;
      switchSubdomain(targetSub);
    });
  });
  
  // Language buttons click listener
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.dataset.lang;
      setLanguage(targetLang);
    });
  });
});

// Modal Controls
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

function openTradeInquiryModal(productName = "") {
  const modal = document.getElementById('modal-trade');
  if (modal) {
    if (productName) {
      const prodInput = document.getElementById('trade-product');
      if (prodInput) prodInput.value = productName;
    }
    modal.classList.add('active');
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  alert("Thank you for contacting PT. Admiral Malika Internasional. Your inquiry has been logged and our corporate office will reach out shortly.");
  closeModal('modal-corporate-contact');
  closeModal('modal-trade');
}
