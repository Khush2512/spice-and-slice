# Spice & Slice 🌶️🍕
### True Flavours of India — Loughborough

Official website & digital menu brochure for **Spice & Slice**, authentic Indian street food and stone-baked artisan takeaway located at **60 Wordsworth Rd, Loughborough, LE11 4LQ**.

---

## 🌟 Overview & Highlights

- **Aesthetics & Branding:** Clean, matte charcoal theme (`#121212`) with tandoori orange-red (`#EA580C`) and golden turmeric (`#D97706`) accents. Features official stacked transparent branding and a subtle, fixed shopfront atmosphere background.
- **Digital Menu Brochure:** All 62 authentic dishes strictly organized across 9 authentic culinary categories:
  1. *The Desi Wok* (Indo-Chinese)
  2. *Chaat & Street Bites*
  3. *Tandoori & Starters*
  4. *House Curries*
  5. *Artisan Slices* (Stone-baked pizzas)
  6. *Sides & Sundries*
  7. *Bread & Roti*
  8. *Desserts & Sweet Treats*
  9. *Chilled Drinks*
- **Dietary & Allergen Clarity:** Clear indicators for Vegetarian (🌱), Vegan (🌿), and detailed allergen labelling on every dish card.
- **Fast Takeaway Ordering:** Prominent 1-tap click-to-call (`07553 343676`) and interactive Google Maps directions.
- **Official Opening Hours:**
  - **Monday:** 12:00 PM – 9:00 PM
  - **Tuesday:** Closed
  - **Wednesday – Sunday:** 12:00 PM – 9:00 PM
- **Mobile First:** Optimized for iPhone, Android, and tablets with sticky quick-action bar and smooth slide-out navigation.

---

## 🏗️ Architecture & Tech Stack

```
spice-and-slice/
├── client/                 # React 18 frontend built with Vite & TailwindCSS
│   ├── src/
│   │   ├── assets/         # High-res logos, shopfront photography
│   │   ├── components/     # Navbar, Footer, Mobile Drawer, CallToAction
│   │   ├── data/           # Structured 62-item menu dataset & categories
│   │   └── pages/          # Home, Menu, Contact
│   └── vercel.json         # SPA rewrite routing for Vercel / Netlify
├── server/                 # Express backend for API & production serving
│   ├── models/             # Mongoose MenuItem schema
│   ├── seed.js             # Automated database menu seeder
│   └── server.js           # Production Express server + static dist serving
└── vercel.json             # Root monorepo deployment config
```

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide React icons.
- **Backend:** Node.js, Express, MongoDB/Mongoose.
- **Deployment Ready:** Vercel, Netlify, Render, or Railway with single-command setup.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### 1. Installation
Install dependencies for both client and server:
```bash
# Install root/monorepo dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 2. Running Locally (Development Mode)
From the root directory:
```bash
# Start both client and server concurrently:
npm run dev
```
Or start individually:
- Client: `cd client && npm run dev` (Runs on `http://localhost:5173`)
- Server: `cd server && npm run dev` (Runs on `http://localhost:5000`)

### 3. Production Build
```bash
cd client
npm run build
```
Production assets are output into `client/dist/`.

---

## 📞 Contact & Location
- **Address:** 60 Wordsworth Rd, Loughborough, LE11 4LQ
- **Telephone:** [07553 343676](tel:+447553343676)
- **Collection & Takeaway Available**
