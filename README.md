# Portfolio Next.js — Premium Edition

A stunning, highly animated personal portfolio built with **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **Framer Motion**.

## ✨ What's New (Premium Edition)

- **Interactive Particle System** — Canvas particles with mouse interaction, connection lines, and glow effects
- **Mouse Spotlight** — Radial gradient follows your cursor across the page
- **Scroll Progress Bar** — Animated top bar showing scroll position
- **3D Tilt Cards** — Project cards tilt in 3D based on mouse position
- **Parallax Hero** — Hero section with scroll-based parallax, scale, and fade
- **Animated Timeline** — Vertical timeline with scroll-driven progress line
- **Service Cards** — 6 service cards with hover glow and icon animations
- **Categorized Skills** — Skills organized by category with animated progress bars
- **Rich Contact Form** — Full contact section with info cards and animated form
- **Smooth Page Transitions** — Every section animates in with staggered reveals
- **Glassmorphism UI** — Frosted glass cards with subtle borders and hover effects
- **Gradient Text Animation** — Animated gradient text that shifts colors
- **Mobile-First Responsive** — Fully responsive with hamburger menu

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **clsx + tailwind-merge**

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Particles.tsx      # Interactive canvas particles
│   ├── Spotlight.tsx      # Mouse-following spotlight
│   ├── ScrollProgress.tsx # Top scroll progress bar
│   ├── Navbar.tsx         # Sticky nav with active indicator
│   ├── Hero.tsx           # Parallax hero with 3D text
│   ├── About.tsx          # Bio + timeline
│   ├── Services.tsx       # 6 service cards
│   ├── Projects.tsx       # 3D tilt project cards
│   ├── Skills.tsx         # Categorized skill bars
│   ├── Contact.tsx        # Contact form + info
│   └── Footer.tsx         # Footer with scroll-to-top
├── hooks/
│   ├── useMousePosition.ts
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   └── useCountUp.ts
├── lib/
│   └── utils.ts           # cn() helper
├── package.json
├── tailwind.config.ts
└── ...
```

## 🛠️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000

# 4. Build for production
npm run build
# Static files in out/ directory
```

> **Note:** Requires Node.js 18.17.0+

## 🎨 Customization

Edit content in each component:
- `Hero.tsx` — Name, title, stats
- `About.tsx` — Bio, timeline events
- `Services.tsx` — Service offerings
- `Projects.tsx` — Project showcase
- `Skills.tsx` — Skill categories & levels
- `Contact.tsx` — Contact info, social links
- `layout.tsx` — Page metadata

## 📄 License

MIT — Free to use for personal or commercial projects.
