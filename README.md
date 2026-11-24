# jowelvisual (Next.js)

Next.js rebuild of the jowelvisual WordPress/Elementor site. Done so far: Home (landing), Portfolio, About and Contact.

## Run

```
npm install
npm run dev -- -p 3100
```

Open http://localhost:3100

## Structure

- `app/layout.tsx`: shared header, footer, WhatsApp button, smooth scroll, and the common WordPress CSS
- `app/page.tsx`: landing page (Elementor page 14), with the same markup and class names as the original
- `app/portfolio/page.tsx`: Portfolio page (Elementor page 33): title banner, 21-project grid, and category tabs (the original shows the tabs only at 2400px and wider)
- `app/styles/wp/`: the original WordPress/Elementor stylesheets, in the original load order (image and font URLs point at `/uploads` and `/fonts`)
- `app/about/page.tsx`: About page (Elementor page 39): banner, intro with lightbox image, feature boxes, milestones, last work, call to action, testimonials, and the hidden "Meet my Team" section
- `app/contact/page.tsx`: Contact page (Elementor page 42): banner, contact info, form and Google map
- `app/api/contact/route.ts` + `components/ContactForm.tsx`: replacement for the Elementor Pro form. It sends the enquiry by email over SMTP, and its settings go in `.env.local` (see `.env.example`)
- `components/Lightbox.tsx`: port of Elementor's image lightbox (share, zoom, fullscreen, Esc / click outside to close)
- `components/`: header (sticky, hides on scroll down), hero slider (Swiper fade, Ken Burns), counter, parallax background (Elementor motion effects), testimonial slider, footer, WhatsApp button, smooth scroll (Lenis)
- `data/site.ts`: menu, slides, 21 portfolio projects and testimonials
- `public/uploads`, `public/fonts`: images, video and fonts copied from the local WordPress install
