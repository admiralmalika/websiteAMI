# PT. ADMIRAL MALIKA INTERNASIONAL
## System Architecture, Technical Specifications & Ecosystem Documentation

> **Document Version**: 2.0.0  
> **Last Updated**: September 14, 2026  
> **Repository**: [github.com/admiralmalika/websiteAMI](https://github.com/admiralmalika/websiteAMI)  
> **Status**: Production-Ready / Active  

---

## 1. Corporate Entity & Ecosystem Overview

PT. Admiral Malika Internasional operates as a parent holding corporation and global trade aggregator governing two independent operational business divisions:

```
                      PT. ADMIRAL MALIKA INTERNASIONAL
                     (admiralmalika.com - Parent Holding)
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
 🌾 AGRICULTURAL EXPORT & TRADE                      🎓 GERMANY EDUCATION & CAREERS
    (export.admiralmalika.com)                         (edu.admiralmalika.com)
  Language: FULL ENGLISH (Global B2B)                  Language: TRILINGUAL (ID | EN | DE)
```

The platform ecosystem integrates:
1. **Public-facing corporate holding and divisional subdomains** with dedicated responsive experiences and interactive tools (B2B RFQ, pathway eligibility calculator, commodity catalog).
2. **Built-in Administrative CMS Portal (`/admin`)** providing real-time state management for homepage banners, agricultural commodity catalogs, Germany study/career tracks, and an RFQ lead management desk with direct WhatsApp dispatch.
3. **Dual Routing Architecture** supporting both standalone multi-page URLs and a simulated Single Page App (SPA) view-switcher engine.

---

## 2. Directory Structure & File Map

```
admiral-malika/
├── ARCHITECTURAL_DOCUMENTATION.md   # Comprehensive technical & architectural specifications
├── README.md                        # Quickstart, ecosystem summary, and deployment guide
├── index.html                       # Holding Corporate Profile (Panoramic Banner & Trade Aggregator)
├── export.html                      # Agricultural Export Division Portal (B2B Full English)
├── edu.html                         # Germany Education & Career Division Portal (Trilingual)
├── about.html                       # Corporate Profile & Values (Indonesian)
├── contact.html                     # Corporate Contact, Direct Channels & RFQ Lead Form
├── server.js                        # Native Node.js zero-dependency HTTP server (Port 8080)
├── vercel.json                      # Edge deployment configuration with host & path rewrites
│
├── admin/                           # Client-Side Administrative CMS Suite
│   ├── index.html                   # Admin Dashboard Overview & Real-time Metrics
│   ├── content-editor.html          # Hero Banner & Headline CMS Editor
│   ├── agraria-admin.html           # Agricultural Commodity CRUD Management
│   ├── education-admin.html         # German Academic & Ausbildung Program Manager
│   └── inquiries.html               # B2B RFQ & Contact Leads Inbox with WhatsApp Direct
│
├── css/                             # Stylesheet Architecture
│   ├── style.css                    # Design tokens, typography, luxury dark theme & layout
│   ├── main.css                     # Component library, modals, forms & responsive rules
│   └── admin.css                    # Admin sidebar, tables, status badges & metric widgets
│
├── js/                              # Frontend Logic, State & Translation Engines
│   ├── cms.js                       # CMS State Engine & LocalStorage Persistence (v5)
│   ├── main.js                      # Main site DOM bindings, dynamic CMS rendering & RFQ handler
│   ├── app.js                       # Modal controllers, screener wizard & event listeners
│   ├── router.js                    # Subdomain switcher & live i18n data-binding engine
│   ├── export-catalog.js            # Commodity dataset & modal RFQ generation
│   └── translations.js              # Comprehensive Trilingual Dictionary (EN, ID, DE)
│
└── images/                          # Brand and Visual Assets
    ├── hero_full_banner.jpg         # Full-width panoramic showcase banner
    ├── hero_banner.jpg              # Secondary hero visual asset
    └── admiral_executive_mou.png    # Executive partnership & MoU imagery
```

---

## 3. Business Divisions & Subdomain Specifications

### 🏢 1. Holding Headquarters (`admiralmalika.com`)
- **Primary Role**: Corporate group identity, premier Indonesian commodity exporter & aggregator umbrella, strategic vision, dual export portfolios, and global fulfillment infrastructure.
- **Sharpened B2B Export Positioning**:
  - Direct commodity originator and aggregator (NOT a standalone freight forwarding/logistics provider).
  - **Two Distinct Product Portfolios**:
    1. *Portfolio 1: Specialty Agriculture & Food Ingredients* (Planifolia Vanilla Beans, Sumatra Gayo Arabica Coffee, Organic Coconut Sugar, Frozen Banana Leaves, Mocaf Flour).
    2. *Portfolio 2: Sustainable Biomass & Green Energy* (Coconut Shell Charcoal Briquettes, Palm & Nipah Ekel Broom Sticks, Natural Essential Oils).
  - **Embedded Export Assurance Badges** (`ExportAssuranceBadge`): Reusable trust component on each portfolio card highlighting `[✓ FOB / CIF Available]`, `[✓ Phytosanitary & COO Certified]`, `[✓ Export Food-Grade Packaging]`.
  - **Global Supply Chain, Compliance & Export Fulfillment Section**: Direct fulfillment trust module featuring 4 operational cards:
    - *Incoterms & Loading Ports* (FOB, CIF, CFR via Tanjung Priok & Belawan).
    - *Statutory Export Documentation* (Phytosanitary, Certificate of Origin Form A/AK/E, CoA, Halal/Organic).
    - *Export-Grade Packaging* (Vacuum sealing, Nitrogen-flushed food bags, UN steel drums, master cartons).
    - *Carrier & Forwarding Relations* (Contract rates with Maersk, MSC, CMA CGM, ONE).
  - Global Trade Network Pills (`DE`, `JP`, `US`, `ID`, `SG`).
  - Executive contact channels and integrated RFQ lead capture.
- **Languages**: Default English (`EN`), with full trilingual toggle support for Indonesian (`ID`) and German (`DE`).

### 🌾 2. Agricultural Export Division (`export.admiralmalika.com`)
- **Primary Role**: Global B2B international trade portal for international buyers, industrial importers, and food processors.
- **Language**: **Full English Only** (Tailored for international trade compliance).
- **Core Commodity Portfolio**:
  1. **Fresh & Frozen Banana Leaves (Food-Grade Packaging)**: Fresh cut / vacuum frozen (-18°C), pesticide-free, steam washed; 500g/1kg vacuum bags & master cartons; Phytosanitary & CoA.
  2. **Organic Coconut Palm Sugar**: Unrefined 14-18 mesh granules, low GI (35), moisture max 2.0%; USDA Organic, EU Organic, Halal; 25kg Kraft paper bags & OEM pouches.
  3. **Gourmet Planifolia Vanilla Pods**: Prime Black Grade A cured pods (16-20cm), vanillin 2.0% - 2.4%, moisture 30-35%; vacuum-sealed packaging.
  4. **Specialty Sumatra Gayo & Toraja Arabica Coffee**: Wet-hulled (Giling Basah), defect count max 5/300g (Grade 1), cupping score 84+; 60kg GrainPro jute bags.
  5. **Fermented Organic Cocoa Beans & Natural Butter**: 95%+ fully fermented, moisture max 7.5%, fat 52-56%; 65kg jute bags / 25kg blocks.
  6. **Lal Pari & Whole Cloves**: Sun-dried Maluku cloves, essential oil 17-20%, headless max 2%; 50kg PP bags.
  7. **Pure Patchouli & Citronella Essential Oils**: Steam-distilled, patchoulol min 30-32%, ISO 22000 & Halal; 200kg UN steel drums.
  8. **MOCAF & Cassava Derivatives**: Bright white index >90%, gluten-free food grade.
  9. **Palm Brooms & Coconut Shell Charcoal**: High fixed carbon (75-80%), ash max 2.5%.
- **Trade Features**:
  - Technical specification tables for every commodity.
  - Dedicated B2B RFQ Form with target port, estimated tonnage, and Incoterms (FOB/CIF).

### 🎓 3. Germany Education & Career Division (`edu.admiralmalika.com`)
- **Primary Role**: Pathway consulting, vocational training placements, university admissions, and language training in Germany.
- **Languages**: **Trilingual** (Indonesian `ID`, English `EN`, German `DE`).
- **Core Educational Tracks**:
  1. **Ausbildung (Paid Dual Vocational Training)**:
     - Monthly stipend: €1,000 - €1,400 / month.
     - 100% tuition-free (employer-sponsored).
     - Sectors: Nursing & Healthcare, IT & Software, Mechatronics/Engineering, Hospitality/Hotel Management.
  2. **Studienkolleg & Public Universities (Bachelor / Master)**:
     - Preparatory courses: T-Kurs (Tech/Math), M-Kurs (Medicine/Bio), W-Kurs (Business/Economics), G-Kurs (Humanities).
     - Full support: APS certification, blocked account setup, visa processing, accommodation finding.
  3. **Admiral German Language Academy**:
     - Intensive courses: A1, A2, B1, B2, C1.
     - Native and Goethe-certified instructors; Telc/Goethe exam preparation.
  4. **Interactive Pathway Eligibility Calculator**:
     - Client-side decision engine matching applicant education level (SMA/SMK, D3/D4, S1/S2) and German proficiency (A0, A1, B1/B2) with tailored recommendations.

---

## 4. Administrative CMS Portal Architecture

The application includes an in-browser Administrative Portal under the `/admin/` directory, requiring no complex database backend to operate:

```
                  ┌─────────────────────────────────────┐
                  │       ADMINISTRATIVE CMS PORTAL      │
                  │             (/admin)                │
                  └──────────────────┬──────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ Dashboard & Stats│       │  Content Editor  │       │ Catalog & Program│
│  (`index.html`)  │       │ (`content-editor`)│       │  Administrators  │
│  - Total Items   │       │  - Hero Tagline  │       │  - Agraria CRUD  │
│  - Active Leads  │       │  - Hero Titles   │       │  - Edu Programs  │
│  - Quick Action  │       │  - Subtitles     │       │  (`inquiries`)   │
└──────────────────┘       └──────────────────┘       └──────────────────┘
                                     │
                                     ▼
                  ┌─────────────────────────────────────┐
                  │          js/cms.js Engine           │
                  │   Storage Key: admiral_malika_cms_v5 │
                  │   - LocalStorage Sync & Auto-Migrate│
                  └─────────────────────────────────────┘
```

### Admin Suite Endpoints:
1. **`/admin/index.html` (Dashboard Overview)**:
   - Summary statistics cards: Total Agraria B2B products, active Germany education programs, total incoming RFQ/inquiries.
   - Quick navigation shortcuts to each editor section.
2. **`/admin/content-editor.html` (Hero & Banner CMS)**:
   - Dynamic real-time modification of `hero.tag`, `hero.title` (HTML markup allowed), and `hero.subtitle`.
   - Direct persistence into `localStorage`.
3. **`/admin/agraria-admin.html` (B2B Export Catalog Manager)**:
   - Tabular view of all agricultural commodities with categories, specs, and status badges.
   - Add new products via interactive modal prompt with auto-generated ID and export metadata.
   - One-click deletion with confirmation dialog.
4. **`/admin/education-admin.html` (Germany Education Track Manager)**:
   - Overview of active educational tracks, partner affiliations, and curricula.
5. **`/admin/inquiries.html` (Leads & RFQ Inbox)**:
   - Central table displaying all submitted inquiries (Date, Name, Email, WhatsApp Phone, Pillar, Message).
   - **Direct WhatsApp Reply**: One-click action generating pre-filled WhatsApp response deep-link to the prospective client.

---

## 5. Frontend & JavaScript Engine Architecture

### Module Division:
| Module | File | Purpose |
|---|---|---|
| **CMS State Engine** | `js/cms.js` | Manages global storage key `admiral_malika_cms_v5`, data hydration, initial state fallbacks, inquiry submission, and automatic legacy cache cleanup (`v2`-`v4`). |
| **Main Integration** | `js/main.js` | Hydrates DOM from CMS state (Hero banner, Agraria cards, Education cards), manages mobile navigation toggle, and attaches contact form listeners. |
| **App & Modal Controller** | `js/app.js` | Modal handlers (`openModal`, `closeModal`, `openTradeInquiryModal`), form interception, and pathway screener wizard logic. |
| **Routing & Subdomain Engine** | `js/router.js` | Subdomain simulation switcher (`switchSubdomain`) supporting Tab switching, simulated URL host bar update, page visibility toggling, and data-attribute i18n binding. |
| **Commodity Catalog Engine** | `js/export-catalog.js` | In-memory specification database for B2B export goods; dynamically renders responsive spec cards and launches quotation modals. |
| **Trilingual Dictionary** | `js/translations.js` | Comprehensive nested translation dictionary covering English (`en`), Indonesian (`id`), and German (`de`). |

### CMS Data Model (`js/cms.js`):
```typescript
interface CMSData {
  hero: {
    tag: string;
    title: string;
    subtitle: string;
  };
  agraria: Array<{
    id: string;
    name: string;
    category: string;
    description: string;
    specs: string;
    badge: string;
  }>;
  education: Array<{
    id: string;
    title: string;
    partner: string;
    description: string;
    details: string[];
  }>;
  inquiries: Array<{
    id: string;
    date: string;
    name: string;
    email: string;
    phone: string;
    pillar: string;
    message: string;
    status: 'Baru' | 'Diproses' | 'Selesai';
  }>;
}
```

---

## 6. Design System & CSS Specifications

The visual identity follows a modern corporate luxury theme built with high contrast, deep navy backgrounds, gold accents, and subtle glassmorphic surfaces.

### Core CSS Variables (`css/style.css`):
```css
:root {
  --primary-navy: #070f1e;       /* Deep corporate navy */
  --secondary-navy: #0b172a;     /* Section container navy */
  --card-bg: rgba(15, 27, 48, 0.9); /* Translucent glass card background */
  --accent-gold: #d4af37;        /* Sovereign metallic gold */
  --accent-gold-hover: #f3c623;  /* High-energy gold hover */
  --accent-gold-dark: #aa7c11;   /* Border and shadow shade */
  --accent-emerald: #059669;     /* Agricultural division emerald */
  --accent-blue: #0077c5;        /* Germany education division blue */
  --text-main: #ffffff;          /* High-contrast headings */
  --text-muted: #94a3b8;         /* Subtitles & description text */
  --border-gold: rgba(212, 175, 55, 0.3);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --font-heading: 'Cinzel', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --shadow-glow: 0 8px 25px -8px rgba(212, 175, 55, 0.25);
}
```

### Visual Standards:
- **Typography**: `Cinzel` for corporate headers and formal titles; `Plus Jakarta Sans` for body copy and technical specifications.
- **Glassmorphism**: Backdrop blur filter (`blur(16px)`) applied to sticky headers and cards.
- **Buttons**:
  - Gold Action: `linear-gradient(135deg, #b88a2e, #8f6716)` with gold glow.
  - Blue Action: `linear-gradient(135deg, #0077c5, #005696)`.
  - Emerald Action: `#059669` for agricultural and B2B trade actions.

---

## 7. Lead Generation & Communication Flow

Every public contact and RFQ form operates on a dual-dispatch architecture:

```
[ Visitor Submits RFQ / Lead Form ]
               │
               ├──► 1. Local Persistence:
               │       - Appended to cms.inquiries[] in localStorage
               │       - Accessible immediately in /admin/inquiries.html
               │
               ├──► 2. Direct WhatsApp Dispatch:
               │       - URL encoded message constructed with Name, Email, Phone, Commodity/Pillar & Details
               │       - Opens WhatsApp API directly to Executive Hotline (+6281118893389)
               │
               └──► 3. Direct Email Contact Points:
                       - Official Desks: hary.kristianto.info@gmail.com
                       - Secondary Desk: malikamannacenter@gmail.com
```

---

## 8. Deployment & Routing Architecture

### Production Edge Routing (`vercel.json`)
The application is deployed on Vercel with automated host-based and path-based rewrites:

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
    { "source": "/edu", "destination": "/edu.html" },
    { "source": "/agraria", "destination": "/export.html" },
    { "source": "/agraria.html", "destination": "/export.html" },
    { "source": "/jerman-education", "destination": "/edu.html" },
    { "source": "/jerman-education.html", "destination": "/edu.html" }
  ]
}
```

### Local Development Server (`server.js`)
Zero external dependencies required. Built on Node.js native `http`, `fs`, and `path` modules:
- Default Port: `8080`
- Access URL: `http://localhost:8080/`
- Serves static assets with standard MIME mapping (`.html`, `.js`, `.css`, `.json`, `.png`, `.jpg`, `.svg`).

---

## 9. Official Corporate Contact Directory

| Channel | Details |
|---|---|
| **Parent Corporate Holding** | PT. Admiral Malika Internasional |
| **Primary Executive Email** | `hary.kristianto.info@gmail.com` |
| **Secondary Corporate Email** | `malikamannacenter@gmail.com` |
| **WhatsApp Executive Hotline** | `+6281118893389` |
| **Global Operational Hubs** | Indonesia (HQ) & Germany Network |
| **Production Domains** | `admiralmalika.com` · `export.admiralmalika.com` · `edu.admiralmalika.com` |
