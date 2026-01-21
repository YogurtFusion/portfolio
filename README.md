# Yellow Glow Studios 🟡

A minimalist, high-performance portfolio website for a digital design agency specializing in websites for restaurants and cafes.

# [Live Link](https://portfolio-blond-tau-65.vercel.app/)
## 🚀 About The Project

Yellow Glow Studios is a niche web design agency portfolio. The goal of this project was to create a clean, high-speed landing page that converts visitors into clients using a minimalist aesthetic and clear calls to action.

**Key Features:**
* **Minimalist Design:** Clean UI with a focus on typography and negative space.
* **Responsive Layout:** Fully optimized for mobile, tablet, and desktop using Tailwind Grid/Flexbox.
* **Fast Performance:** Built on Next.js 16 with static site generation (SSG) for instant loading.
* **Smooth Animations:** subtle hover effects and transitions using Tailwind utilities.
* **Contact Integration:** Direct `mailto` integration with pre-filled subject lines.

## 🛠️ Tech Stack

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** JavaScript
* **Deployment:** [Vercel](https://vercel.com/)
* **Font:** Poppins/ Inter 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📂 Project Structure

```text
├── app/                  # App Router pages and layouts
│   ├── layout.tsx        # Main layout (metadata, fonts)
│   ├── page.tsx          # Homepage content
│   └── icon.png          # App Favicon
├── components/           # Reusable UI components
│   ├── ui/               # Buttons, Cards, etc.
│   └── sections/         # Hero, About, Projects sections
├── public/               # Static assets (images, icons)
└── tailwind.config.ts    # Tailwind configuration
