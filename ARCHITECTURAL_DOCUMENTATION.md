# PT. ADMIRAL MALIKA INTERNASIONAL
## Architecture, Copywriting & Technical Specification Documentation

> **Document Version**: 1.0.0  
> **Last Updated**: August 19, 2026  
> **Repository**: https://github.com/admiralmalika/websiteAMI  

---

## 1. Corporate Entity & Architecture Overview

PT. Admiral Malika Internasional operates as a parent holding corporation governing two independent core business divisions:

```
                      PT. ADMIRAL MALIKA INTERNASIONAL
                       (admiralmalika.com - Holding)
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
 🌾 AGRICULTURAL EXPORT                             🎓 GERMANY EDUCATION
(export.admiralmalika.com)                         (edu.admiralmalika.com)
  Language: FULL ENGLISH                             Language: TRILINGUAL (ID | EN | DE)
```

---

## 2. Business Units & Subdomain Specifications

### 🏢 Holding Corporate Headquarters (`admiralmalika.com`)
- **Purpose**: Official corporate company profile, group vision, mission, executive leadership, global network presence, and high-level portal directing visitors to division subdomains.
- **Languages**: Multilingual support (Indonesian `ID`, English `EN`, German `DE`).
- **Primary Color Palette**:
  - Dark Navy Background: `#091424` / `#070f1e`
  - Accent Gold: `#b88a2e` / `#d4af37`
  - Button Blue Gradient: `linear-gradient(135deg, #0077c5, #005696)`
  - Button Gold Gradient: `linear-gradient(135deg, #b88a2e, #8f6716)`

---

### 🌾 Agricultural Export Division (`export.admiralmalika.com`)
- **Purpose**: B2B international trade portal for Indonesian agricultural commodity exports.
- **Language**: **FULL ENGLISH ONLY** (Targeted at global industrial importers and buyers).
- **Core Commodity Portfolio**:
  1. **Fresh & Frozen Banana Leaves (Food-Grade Packaging)**
     - *Specs*: Fresh cut / Vacuum frozen (-18°C), pesticide-free, steam washed.
     - *Packaging*: 500g, 1kg vacuum bags & master export cartons.
     - *Certification*: Phytosanitary & Certificate of Analysis (CoA).
  2. **Organic Coconut Palm Sugar**
     - *Specs*: Unrefined 14-18 mesh granulated, low Glycemic Index (GI 35), max 2.0% moisture.
     - *Certifications*: USDA Organic, EU Organic, Halal.
     - *Packaging*: 25kg Kraft paper bags & OEM retail pouches.
  3. **Gourmet Planifolia Vanilla Pods**
     - *Specs*: Prime Black Grade A cured pods (16cm-20cm), vanillin 2.0%+ - 2.4%, moisture 30-35%.
     - *Packaging*: Vacuum-sealed foil bags.
  4. **Specialty Sumatra Gayo & Toraja Arabica Green Coffee Beans**
     - *Specs*: Altitude 1,300m-1,600m ASL, wet-hulled (Giling Basah), defect count max 5/300g (Grade 1), score 84+.
     - *Packaging*: 60kg GrainPro jute bags.
  5. **Cassava & MOCAF Flour Derivatives**
     - *Specs*: Modified Cassava Flour (MOCAF), bright white (whiteness min 90%), gluten-free food grade.
  6. **Palm Broom & Coconut Shell Charcoal**
     - *Specs*: Oil palm brooms (90cm-120cm) & high fixed carbon coconut shell charcoal briquettes (carbon min 75-80%, ash max 2.5%).
- **Compliance & Shipping**:
  - Certificates: Phytosanitary, Certificate of Origin (Form E / COO), Fumigation, CoA, Halal.
  - Incoterms: FOB Tanjong Priok (Jakarta), FOB Tanjung Perak (Surabaya), CIF, CFR.
  - B2B RFQ Form: Full Name, Corporate Email, Commodity Selection, Destination Port, Quantity Tonnage.

---

### 🎓 Germany Education & Career Division (`edu.admiralmalika.com`)
- **Purpose**: Academic pathways, vocational training, higher education admissions, and German language training.
- **Languages**: **TRILINGUAL** (Indonesian `ID`, English `EN`, German `DE`).
- **Core Program Tracks**:
  1. **Ausbildung (Dual Paid Vocational Training)**
     - Monthly Stipend: €1,000 - €1,400 / month.
     - Tuition Fee: 100% Free / Employer sponsored.
     - Sectors: Nursing & Healthcare, IT & Software, Mechatronics/Engineering, Hospitality/Hotel Management.
  2. **Studienkolleg & Public Universities (S1 / S2)**
     - Preparatory Tracks: T-Kurs (Engineering/Tech), M-Kurs (Medicine/Bio), W-Kurs (Economics/Business), G-Kurs (Humanities).
     - Benefits: Zero tuition fees at top German public universities.
     - Support: Blocked account setup, APS certification, visa processing, accommodation finding.
  3. **Admiral German Language Academy**
     - Levels: Intensive A1, A2, B1, B2 courses.
     - Instructors: Certified Native & Goethe trainers.
  4. **Interactive Pathway Eligibility Screener**
     - Calculates eligibility based on education level (SMA/SMK, D3/D4, S1/S2) and German language level (A0, A1, B1/B2).

---

## 3. Multilingual Translation Dictionaries

```javascript
const translationDictionary = {
  id: {
    nav_home: "Beranda",
    nav_export: "Ekspor Agraria",
    nav_edu: "Pendidikan Jerman",
    nav_about: "Tentang Kami",
    nav_contact: "Kontak Executive",
    hero_title_1: "Solusi Terpercaya",
    hero_title_2: "Agraria & Pendidikan Jerman",
    hero_desc: "PT. Admiral Malika Internasional menghadirkan komoditas pertanian unggulan Indonesia ke pasar dunia serta membuka jalan karir & studi internasional di Jerman.",
    p1_title: "Pilar 1: Ekspor Produk Agraria",
    p2_title: "Pilar 2: Pelatihan & Studium Jerman"
  },
  en: {
    nav_home: "Home",
    nav_export: "Agricultural Export",
    nav_edu: "Germany Education",
    nav_about: "About Us",
    nav_contact: "Executive Contact",
    hero_title_1: "Trusted Global Solutions in",
    hero_title_2: "Agriculture & German Pathways",
    hero_desc: "PT. Admiral Malika Internasional delivers Indonesia's premium agricultural commodities to global markets and opens pathways for international study & career in Germany.",
    p1_title: "Pillar 1: Agricultural Export Trade",
    p2_title: "Pillar 2: Germany Education & Career"
  },
  de: {
    nav_home: "Startseite",
    nav_export: "Agrar-Export",
    nav_edu: "Bildung Deutschland",
    nav_about: "Über Uns",
    nav_contact: "Konzernkontakt",
    hero_title_1: "Vertrauenswürdige Lösungen in",
    hero_title_2: "Agrar & Bildung in Deutschland",
    hero_desc: "PT. Admiral Malika Internasional liefert erstklassige indonesische Agrarprodukte auf globale Märkte und eröffnet Wege für Studium und Karriere in Deutschland.",
    p1_title: "Säule 1: Agrarprodukte-Export",
    p2_title: "Säule 2: Ausbildung & Studium in Deutschland"
  }
};
```

---

## 4. Official Corporate Contact Details

- **Official Corporate Emails**:
  - `hary.kristianto.info@gmail.com`
  - `malikamannacenter@gmail.com`
- **WhatsApp Executive Hotline**: `+6281118893389`
- **Headquarters**: Indonesia (HQ) & Germany Network

---

## 5. Vercel & Technical Routing Configuration

`vercel.json`:
```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "export.admiralmalika.com" }],
      "destination": "/export.html"
    },
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "edu.admiralmalika.com" }],
      "destination": "/edu.html"
    },
    { "source": "/export", "destination": "/export.html" },
    { "source": "/edu", "destination": "/edu.html" }
  ]
}
```
