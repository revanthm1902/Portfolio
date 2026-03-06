# Revanth Modalavalasa — Portfolio

> Personal portfolio website showcasing my projects, skills, experience, and achievements.

**Live:** [revanthm.vercel.app](https://revanthm.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| Email | EmailJS |
| Backend | Supabase (contact form, edge functions) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Features

- **Hero Section** — Animated intro with typing animation, skills carousel, and key stats
- **About Section** — Personal story, values, and interactive journey timeline
- **Projects Section** — 9 featured projects spanning IoT, AI/ML, Full Stack, and Data Analytics
- **Skills Section** — Interactive pie charts and animated progress bars across 8 skill categories
- **Experience Section** — Work experience, hackathon wins, and certifications with detail pages
- **Blog / LinkedIn Posts** — Embedded LinkedIn articles and posts feed
- **Contact Section** — EmailJS-powered contact form with Supabase edge function fallback
- **Dark / Light Mode** — Theme toggle with smooth transitions
- **Resume Page** — Dedicated resume viewer
- **Cursor Trail** — Custom cursor effect for desktop
- **Responsive** — Fully mobile-optimized design

---

## Featured Projects

| # | Project | Category | Tech Stack |
|---|---------|----------|-----------|
| 1 | [SafeFit – Smart Safety Bracelet](https://github.com/revanthm1902/safe-fit) | IoT & Hardware | IoT, React Native, NodeMCU, Custom PCB |
| 2 | [ERP Management System](https://github.com/revanthm1902/StgdSchool) | Full Stack | React, Node.js, Supabase, RBAC |
| 3 | [Gmail Replica](https://github.com/revanthm1902/gmail-replica) | Hackathon Winner | React.js, Node.js, Express.js |
| 4 | [Portfolio Website](https://github.com/revanthm1902/Portfolio) | Website | React, TypeScript, Tailwind, Framer Motion |
| 5 | [Ydhya AI](https://github.com/revanthm1902/Ydhya) | AI/ML | React, Supabase, OpenAI API |
| 6 | [Real Estate Management](https://github.com/revanthm1902/Real-Estate-Management-System) | Full Stack | TypeScript, PostgreSQL, Expo |
| 7 | [Second Brain](https://github.com/revanthm1902/second-brain) | AI/ML | Next.js 16, Supabase, Gemini AI |
| 8 | [LeapPulse](https://github.com/revanthm1902/leap-pulse) | Data Analytics | React 19, FastAPI, Python, Supabase |
| 9 | [One Piece Explorer](https://github.com/revanthm1902/one-piece) | Website | HTML5, CSS3, Vanilla JS |

---

## Getting Started

```sh
# Clone the repository
git clone https://github.com/revanthm1902/Portfolio.git
cd Portfolio

# Install dependencies (choose one)
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) and [SETUP_EMAILJS.md](SETUP_EMAILJS.md) for detailed EmailJS configuration.

### Production Build

```sh
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/         # All UI components
│   ├── common/         # Reusable primitives (ExperienceCard, TechBadge, etc.)
│   └── ui/             # shadcn/ui component library
├── config/             # Site-wide config (navigation, animations, social links)
├── data/               # Static content (projects, skills, experiences, etc.)
├── hooks/              # Custom React hooks (useTheme, use-mobile, use-toast)
├── integrations/       # Supabase client setup
├── lib/                # Utilities (EmailJS helper, cn)
├── pages/              # Route-level pages (Index, Resume, NotFound)
├── types/              # Shared TypeScript types
public/
├── certificates/       # PDF certificates
└── robots.txt
supabase/
└── functions/          # Supabase Edge Functions (send-contact-email)
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Development mode build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Contact

- **Email:** revanthmodalavalasa@gmail.com
- **LinkedIn:** [linkedin.com/in/revanthm1902](https://linkedin.com/in/revanthm1902)
- **GitHub:** [github.com/revanthm1902](https://github.com/revanthm1902)
- **GitHub:** [github.com/revanthm1902](https://github.com/revanthm1902)

---

Made with ❤️ by Revanth Modalavalasa