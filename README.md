# WebEleven Portfolio (Astro)

Portfolio site με **Astro + Svelte + Tailwind CSS**, σύμφωνα με τις απαιτήσεις της εργασίας.

---

## Χαρακτηριστικά

- **Responsive** (mobile-first)
- **Δίγλωσσο** (Ελληνικά / Αγγλικά): `/el/` και `/en/`
- **Home page sections** (όπως ζητάει η εργασία):
  1. Hero: τίτλος, tagline, call to action
  2. About: λίγα λόγια για εμένα, στόχος 5ετίας, τι μου άρεσε περισσότερο στη συνέντευξη
  3. Projects: διαδραστική παρουσίαση (filters + modal, με mock projects)
  4. Contact: φόρμα επικοινωνίας (μόνο UI, δεν απαιτείται λειτουργικό backend)
- **SEO friendly** (meta tags, canonical, hreflang)
- **Sitemap** δημιουργείται στο build

---

## Προαπαιτούμενα

- **Node.js** (προτείνεται Node 18+, ιδανικά Node 20)
- **npm**

---

## 🧾 Οδηγίες εκτέλεσης (ενοποιημένα βήματα)

### 1 Εγκατάσταση dependencies

Στο terrminal στο root του project:
npm install

### 2 Εκτέλεση σε development mode

npm run dev

### 3 Άνοιγμα στο browser

Άνοιξε το URL που εμφανίζει το terminal (π.χ.):
http://localhost:4321/
Home σελίδες:
Ελληνικά: http://localhost:4321/el/
Αγγλικά: http://localhost:4321/en/
Αν το port 4321 είναι πιασμένο, το Astro θα χρησιμοποιήσει άλλο (π.χ. 4322).

### 4 Build (στατική παραγωγή)

npm run build
Το αποτέλεσμα δημιουργείται στον φάκελο:
dist/

🗺️ Sitemap
Το sitemap δημιουργείται αυτόματα στο build και βρίσκεται στο:
dist/sitemap-index.xml

📄 CV Download
Το βιογραφικό βρίσκεται στο:
public/Loukas_Theos_CV_2025.pdf
Το κουμπί Download CV στο Hero κατεβάζει αυτό το αρχείο.

📁 Δομή Project (σημαντικοί φάκελοι)
src/pages/ : routes (/, /el/, /en/ κλπ)
src/components/ : components (Svelte/Astro)
src/layouts/ : layout (Header/Footer)
src/data/ : περιεχόμενο ( About cards)
public/ : static αρχεία (favicon, pdf CV)
