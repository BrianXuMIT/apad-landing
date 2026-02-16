# APADCode Landing Page

A modern, minimalist landing page for APADCode—an AI-driven coding interview platform that conducts live, adaptive interviews.

## Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Minimalist Design**: Inspired by Vercel, Linear, Stripe, and Notion
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Production Ready**: Clean, maintainable code structure

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Analytics (GTM + GA4)

Set `GTM_ID` in your environment (for example, `GTM-XXXXXXX`) to load the GTM container on all pages.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Top navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── VisualExplanation.tsx  # Visual demo section
│   ├── ProblemSection.tsx     # Problem statement
│   ├── ValuePillars.tsx       # Core value props
│   ├── WhyItMatters.tsx       # Benefits for different audiences
│   ├── VisionSection.tsx      # Future vision
│   ├── ClosingSection.tsx     # Final CTA
│   └── Footer.tsx             # Footer
└── package.json
```

## Design Principles

- **Visionary**: Forward-looking, confident tone
- **Clean**: Minimal UI with strong visual hierarchy
- **Credible**: Serious, professional presentation
- **Modern**: Developer-tool aesthetic
- **Easy to Understand**: Clear messaging without jargon

## Customization

The landing page is designed to be easily customizable:

- Colors: Edit `app/globals.css` for theme colors
- Content: Update component files in `components/`
- Styling: Modify Tailwind classes or extend `tailwind.config.ts`

## License

Private - APADCode
