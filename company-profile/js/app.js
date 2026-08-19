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
  closeModal('modal-edu-apply');
}

// Education Screener Wizard
function runEduScreener() {
  const eduLevel = document.getElementById('screener-edu').value;
  const langLevel = document.getElementById('screener-lang').value;
  const resultBox = document.getElementById('screener-result');
  
  if (!resultBox) return;
  
  let rec = "";
  if (langLevel === 'b2' || langLevel === 'c1') {
    rec = "🌟 **Recommended Track: Direct Ausbildung Placement or Direct University Master Degree Admission**. Your high German proficiency unlocks immediate contract sign-off with partner German institutions!";
  } else if (eduLevel === 'sma') {
    rec = "🎓 **Recommended Track: Studienkolleg Preparation + Intensive A1-B2 Language Course**. Ideal for high school graduates to qualify for tuition-free German Public Universities.";
  } else {
    rec = "💼 **Recommended Track: Paid Ausbildung Vocational Apprenticeship or Professional Placement**. Receive monthly stipend (€1,000+) while learning and working in Germany.";
  }
  
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div style="background: rgba(212, 175, 55, 0.15); border: 1px solid var(--accent-gold); border-radius: 10px; padding: 20px; color: #fff; line-height: 1.6;">
      <h4 style="color: var(--accent-gold); font-family: var(--font-heading); margin-bottom: 8px;">Recommended Pathway Found!</h4>
      <p style="font-size: 0.95rem;">${rec}</p>
      <button onclick="openModal('modal-edu-apply')" class="btn-primary" style="margin-top: 14px; font-size: 0.85rem; padding: 8px 18px;">
        Book Free Personal Counseling
      </button>
    </div>
  `;
}
