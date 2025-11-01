# Icchapurti Coaching Classes (ICC) Website

A modern, professional, responsive website for Icchapurti Coaching Classes, a coaching institute based in Udgir, Maharashtra.

## Features

- **Modern Design**: Clean, premium aesthetic with red & dark-blue theme
- **Fully Responsive**: Optimized for mobile (768px) and desktop (1366px) viewports
- **Smooth Animations**: AOS (Animate On Scroll) for fade-in transitions
- **Interactive Components**: Carousels, forms, and dynamic content
- **Professional Layout**: Similar quality to konaleclasses.com

## Pages

1. **Home**: Hero section, toppers carousel, highlights, and CTAs
2. **About**: Vision, mission, teaching philosophy, and why choose ICC
3. **Courses**: Foundation, NEET, JEE, CET, and Crash Courses
4. **Results**: Toppers grid with filters for year and exam
5. **Contact**: Expert consultation form, address, Google Map, and social media links

## Tech Stack

- **React.js** - Frontend framework
- **React Router** - Navigation
- **TailwindCSS** - Styling
- **AOS** - Scroll animations
- **EmailJS** - Form handling (ready for integration)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky navigation with mobile menu
│   └── Footer.jsx       # Footer with links and social media
├── pages/
│   ├── Home.jsx         # Home page with hero and carousel
│   ├── About.jsx        # About page
│   ├── Courses.jsx      # Courses page
│   ├── Results.jsx      # Results page
│   └── Contact.jsx      # Contact page with form
├── config/
│   └── emailjs.js       # EmailJS configuration
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles and Tailwind imports
```

## Customization

### EmailJS Integration (Form Submissions)

The contact form is ready to use with EmailJS. **EmailJS is the most popular solution** for handling contact forms without a backend.

**Quick Setup:**
1. Read the detailed guide: `EMAILJS_SETUP.md`
2. Create a `.env` file in the project root with your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Get your credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/admin)

**Alternative:** Edit `src/config/emailjs.js` directly with your credentials.

**Why EmailJS?**
- ✅ Free tier: 200 emails/month
- ✅ No backend required
- ✅ Most coaching institutes use this
- ✅ Direct email delivery

### Contact Information

**Address:** 94RF+67J, Ram Nagar, Khadkali, Udgir, Maharashtra 413517

The address is displayed in:
- Contact page
- Footer

**Google Maps:** Update the Google Maps embed URL in `src/pages/Contact.jsx` (line ~311) with the actual location coordinates for your address.

### Colors

Primary colors are defined in `tailwind.config.js`:
- Primary Red: `#E53935`
- Primary Dark Blue: `#1a237e`
- Primary Light Blue: `#283593`

## Deployment

The project is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Just run `npm run build` and upload the `dist` folder.

## License

Copyright © 2025 Icchapurti Coaching Classes. All rights reserved.
