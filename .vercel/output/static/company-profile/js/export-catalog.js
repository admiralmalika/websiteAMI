/* Agricultural Export Division Commodity Catalog & Trade Engine */

const exportCommodities = [
  {
    id: "vanilla",
    category: "Spices & Vanilla",
    title: "Gourmet Planifolia & Tahitensis Vanilla Beans",
    description: "Hand-picked organic vanilla beans cured using traditional methods. High vanillin content (2.0%+), rich aroma, supple moisture (30-35%).",
    specs: {
      "Grade": "Grade A Gourmet / Prime Black",
      "Vanillin Content": "2.0% - 2.4%",
      "Moisture": "30% - 35%",
      "Length": "16cm - 20cm",
      "Packaging": "Vacuum Sealed Bags / 5kg Cartons"
    },
    badge: "Organic Certified"
  },
  {
    id: "coffee-arabica",
    category: "Coffee Beans",
    title: "Specialty Sumatra Gayo & Toraja Arabica Green Coffee",
    description: "Single-origin shade-grown high-altitude Arabica beans. Triple picked (TP), wet-hulled (Giling Basah), cupping score 84+.",
    specs: {
      "Origin": "Aceh Gayo / Toraja Highlands",
      "Altitude": "1,300m - 1,600m ASL",
      "Defect Count": "Max 5 per 300g (Grade 1)",
      "Moisture": "11% - 12.5%",
      "Packaging": "60kg GrainPro Jute Bags"
    },
    badge: "Fair Trade / Specialty"
  },
  {
    id: "cocoa",
    category: "Cocoa & Derivatives",
    title: "Fermented Organic Cocoa Beans & Natural Butter",
    description: "Premium sun-dried fermented beans sourced from Sulawesi cocoa estates. High fat content, deep chocolate profile, low astringency.",
    specs: {
      "Bean Count": "90 - 100 beans per 100g",
      "Fermentation": "95%+ Fully Fermented",
      "Moisture": "Max 7.5%",
      "Fat Content": "52% - 56%",
      "Packaging": "65kg Jute Bags / 25kg Butter Blocks"
    },
    badge: "HACCP / Rainforest Alliance"
  },
  {
    id: "cloves",
    category: "Spices & Herbs",
    title: "Lal Pari & Handpicked Whole Cloves",
    description: "Sun-dried whole cloves from Maluku Islands. Deep reddish-brown color, intense essential oil content (18%+), stems & baby cloves removed.",
    specs: {
      "Grade": "Lal Pari Grade 1",
      "Essential Oil": "17% - 20%",
      "Headless Cloves": "Max 2%",
      "Moisture": "Max 12%",
      "Packaging": "50kg PP Bags / Custom Cartons"
    },
    badge: "High Essential Oil"
  },
  {
    id: "coconut-sugar",
    category: "Coconut Derivatives",
    title: "Organic Granulated Coconut Palm Sugar",
    description: "Unrefined low-GI natural sweetener crafted from fresh coconut blossom nectar. 16-18 mesh, warm caramel flavor, non-GMO.",
    specs: {
      "Mesh Size": "14 - 18 Mesh Granules",
      "Purity": "100% Pure Coconut Blossom Nectar",
      "Moisture": "Max 2.0%",
      "Glycemic Index": "Low GI (35)",
      "Packaging": "25kg Paper Craft Bags / OEM Retail Pouches"
    },
    badge: "USDA Organic & EU Certified"
  },
  {
    id: "essential-oils",
    category: "Essential Oils",
    title: "Pure Patchouli & Citronella Essential Oils",
    description: "Steam-distilled pure essential oils extracted from sustainably grown patchouli and java citronella leaves in West Java & Sumatra.",
    specs: {
      "Patchoulol Content": "Min 30% - 32%",
      "Specific Gravity": "0.950 - 0.975 @ 20°C",
      "Optical Rotation": "-40° to -68°",
      "Purity": "100% Pure & Undiluted Natural Oil",
      "Packaging": "200kg UN Steel Drums / 25kg Aluminum Cans"
    },
    badge: "ISO 22000 & Halal"
  }
];

function renderCommoditiesCatalog() {
  const container = document.getElementById("commodities-grid");
  if (!container) return;
  
  container.innerHTML = exportCommodities.map(item => `
    <div class="commodity-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <span class="commodity-badge">${item.badge}</span>
        <span style="font-size: 0.8rem; color: #10b981; font-family: monospace;">${item.category}</span>
      </div>
      <h3 style="font-family: var(--font-heading); color: #fff; font-size: 1.25rem; margin-bottom: 10px;">${item.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px;">${item.description}</p>
      
      <table class="spec-table">
        <tbody>
          ${Object.entries(item.specs).map(([key, val]) => `
            <tr>
              <td class="spec-key">${key}</td>
              <td class="spec-val">${val}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <button onclick="openTradeInquiryModal('${item.title}')" class="btn-emerald" style="width: 100%; margin-top: 20px; justify-content: center; font-size: 0.88rem; padding: 10px 16px;">
        Request Quotation / Spec Sheet
      </button>
    </div>
  `).join('');
}
