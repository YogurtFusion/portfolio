BUILD ORDER — WITH MEANING

1. DECISIONS
Meaning:
Decisions are choices we lock once so we don’t think again.

In this project:
- Audience: non-tech founders & startups
- Goal: get freelance clients
- Positioning: “Clean, fast websites for founders who hate agencies”
- Pages: Home (single page) + Projects page
- Contact: email only
- Backend: none

Output:
Clarity. No code yet.


2. SYSTEM
Meaning:
System is the skeleton of the site. Everything plugs into this.

In this project:
- layout.js → header, footer, <main>
- globals.css → typography, spacing, colors
- folder structure

Example:
layout.js wraps every page.
globals.css controls how everything looks.

Output:
Site structure exists, even if empty.


3. DATA
Meaning:
Data is the content your UI will show.

In this project:
- projects.js
- Lighthouse Cafe
- Food Factory
- One hosted web app

Example:
An array of projects with title, image, tag.

Output:
Content exists without UI.


4. COMPONENTS
Meaning:
Components are small reusable UI pieces.

In this project:
- Button
- ProjectCard
- Header
- Footer

Example:
ProjectCard shows one project.
Used in Home and Projects page.

Rule:
If you copy-paste UI, you are doing it wrong.

Output:
Reusable building blocks.


5. SECTIONS
Meaning:
Sections are big chunks made from components.

In this project:
- Hero
- Selected Work
- Services
- Process (Week 1–2–3)
- CTA

Example:
Selected Work = multiple ProjectCards + heading.

Output:
Big parts of the page are ready.


6. PAGES
Meaning:
Pages assemble sections into routes.

In this project:
- Home page → all sections
- Projects page → grid of ProjectCards

Rule:
No styling here. Only assembly.

Output:
Navigation works.


7. DEPLOY
Meaning:
Make the site public and stop thinking.

In this project:
- Push to GitHub
- Deploy on Vercel
- Share link

Output:
Live URL.
