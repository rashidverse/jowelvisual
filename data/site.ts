// Content for the landing page, taken from the WordPress site (page id 14).

export const NAV_ITEMS = [
  { label: "Home", href: "/", id: 32, pageId: 14 },
  { label: "Portfolio", href: "/portfolio/", id: 35, pageId: 33 },
  { label: "About", href: "/about/", id: 40, pageId: 39 },
  { label: "Contact", href: "/contact/", id: 43, pageId: 42 },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: "instagram", repeater: "f2b43eb", href: "https://www.instagram.com/jowel.visual/" },
  { name: "Facebook-square", icon: "facebook-square", repeater: "eee0270", href: "https://www.facebook.com/alaminjowel420" },
  { name: "Linkedin", icon: "linkedin", repeater: "2712e74", href: "https://www.linkedin.com/in/aaj420/" },
  { name: "Behance", icon: "behance", repeater: "9e6a753", href: "https://www.behance.net/aaj420" },
] as const;

export const HERO_HEADING =
  "We help interior designer, Architect and Properly developers convert leads into sales with our High-End realistic visual";

// Slide background images are set in styles/wp/22_post-14.css via the repeater class.
export const HERO_SLIDES = [
  { repeater: "8913db1", label: "jowelvisual-hero-1" },
  { repeater: "d531ca4", label: "jowelvisual-hero-2" },
  { repeater: "69aa364", label: "jowelvisual-hero-3" },
  { repeater: "33f55be", label: "jowelvisual-hero-4" },
  { repeater: "ad8362a", label: "jowelvisual-hero-5" },
  { repeater: "c12a452", label: "jowelvisual-hero-6" },
  { repeater: "b145f7b", label: "jowelvisual-hero-7" },
];

export type Project = {
  id: number;
  title: string;
  slug: string;
  image: string;
  width: number;
  height: number;
  /** WordPress attachment id (wp-image-N class) */
  imageId: number;
  /** attachment title, used as aria-label on the Portfolio loop cards */
  imageLabel: string;
};

export const PROJECTS: Project[] = [
  { id: 3109, title: "Artisti 10th floor", slug: "artisti-10th-floor", image: "/uploads/2026/01/Artisti-10th-floor-2.webp", width: 1800, height: 1500, imageId: 3126, imageLabel: "Artisti 10th floor-2" },
  { id: 3196, title: "ASSET Head Office", slug: "asset-head-office", image: "/uploads/2026/01/ASSET-Head-Office-01.webp", width: 1500, height: 1000, imageId: 3193, imageLabel: "ASSET Head Office-01" },
  { id: 3440, title: "BAY CLEARWATER", slug: "bay-clearwater", image: "/uploads/2026/01/BAY-CLEARWATER-06.webp", width: 1920, height: 1080, imageId: 3451, imageLabel: "BAY-CLEARWATER-06" },
  { id: 3431, title: "Boho Restaurant", slug: "boho-restaurant", image: "/uploads/2026/01/Boho-Restaurant-04.webp", width: 1920, height: 1080, imageId: 3433, imageLabel: "Boho-Restaurant-04" },
  { id: 3429, title: "BTI THREE", slug: "bti-three", image: "/uploads/2026/01/BTI-three-bg.webp", width: 2000, height: 1125, imageId: 3888, imageLabel: "BTI-three-bg" },
  { id: 3427, title: "BUKHARA", slug: "bukhara", image: "/uploads/2026/01/BUKHARA-10.webp", width: 1919, height: 1080, imageId: 3391, imageLabel: "BUKHARA (10)" },
  { id: 3425, title: "Dapper", slug: "dapper", image: "/uploads/2026/01/Dapper-bg.webp", width: 914, height: 1080, imageId: 3889, imageLabel: "Dapper-bg" },
  { id: 3423, title: "HAPPY DAYS", slug: "happy-days", image: "/uploads/2026/01/Happy-Days-bg.webp", width: 1080, height: 1080, imageId: 3890, imageLabel: "Happy-Days-bg" },
  { id: 3421, title: "INSIYA RESIDENCE", slug: "insiya-residence", image: "/uploads/2026/01/INSIYA-RESIDENCE-7.webp", width: 1832, height: 1080, imageId: 3354, imageLabel: "INSIYA RESIDENCE (7)" },
  { id: 3419, title: "KBE", slug: "kbe", image: "/uploads/2026/01/KBE-bg.webp", width: 1920, height: 1218, imageId: 3891, imageLabel: "KBE-bg" },
  { id: 3417, title: "MEHRAN AURA", slug: "mehran-aura", image: "/uploads/2026/01/Mehran-Aura-bg.webp", width: 932, height: 1080, imageId: 3892, imageLabel: "Mehran-Aura-bg" },
  { id: 3413, title: "NUR LASER CLINIC", slug: "nur-laser-clinic", image: "/uploads/2026/01/NUR-LASER-CLINIC-7.webp", width: 1920, height: 1080, imageId: 3300, imageLabel: "NUR LASER CLINIC- (7)" },
  { id: 3252, title: "PASHA OFFICE", slug: "pasha-office", image: "/uploads/2026/01/Pasa-office-bg.webp", width: 1920, height: 1280, imageId: 3894, imageLabel: "Pasa-office-bg" },
  { id: 3458, title: "Q Hotel", slug: "q-hotel", image: "/uploads/2026/01/Q-Hotel-bg.webp", width: 918, height: 1080, imageId: 3895, imageLabel: "Q-Hotel-bg" },
  { id: 3250, title: "QFL Restaurant", slug: "qfl-restaurant", image: "/uploads/2026/01/Q-restaurant-bg.webp", width: 1559, height: 1080, imageId: 3896, imageLabel: "Q-restaurant-bg" },
  { id: 3248, title: "SHEHROZE RESIDENCE", slug: "shehroze-residence", image: "/uploads/2026/01/SHEHROZE-RESIDENCE-bg.webp", width: 918, height: 1080, imageId: 3897, imageLabel: "SHEHROZE-RESIDENCE-bg" },
  { id: 3206, title: "Simple Tree", slug: "simple-tree", image: "/uploads/2026/01/simple-tree-bg.webp", width: 1920, height: 1280, imageId: 3898, imageLabel: "simple-tree-bg" },
  { id: 3163, title: "TAFURI", slug: "tafuri", image: "/uploads/2026/01/TAFURI-17-scaled.webp", width: 2560, height: 1440, imageId: 3181, imageLabel: "TAFURI- (17)" },
  { id: 3491, title: "UTTARA SIMPLEX", slug: "uttara-simplex", image: "/uploads/2026/01/UTTARA-SIMPLEX-8.webp", width: 1620, height: 1080, imageId: 3518, imageLabel: "UTTARA SIMPLEX (8)" },
  { id: 3514, title: "Vacation House", slug: "vacation-house", image: "/uploads/2026/01/Vacation-House-7.webp", width: 1920, height: 1080, imageId: 3498, imageLabel: "Vacation House (7)" },
  { id: 3528, title: "ZEPHYR", slug: "zephyr", image: "/uploads/2026/01/ZEPHYR-thumb.webp", width: 1920, height: 1600, imageId: 3530, imageLabel: "ZEPHYR-thumb" },
];

export type Testimonial = {
  name: string;
  quote: string;
  image: string;
  thumb: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Kachramanoglou",
    quote:
      "\"I have been working with Jowel for over four years and continue to collaborate with him because of the consistently high quality of his work and his excellent work ethic. His 3D visualisations are extremely photorealistic and capture design intent with great accuracy. Jowel is reliable, detail-oriented, and a pleasure to work with — a valuable collaborator on every project.\"",
    image: "/uploads/2026/01/Maria-Kachramanoglo.webp",
    thumb: "/uploads/2026/01/Maria-Kachramanoglo-150x150.webp",
  },
  {
    name: "Aicha Sardily",
    quote:
      "\"Alamin is a reliable and deadline-driven collaborator who consistently goes above and beyond expectations. He combines strong visual design skills with solid technical awareness, proactively identifying issues and offering smart solutions. His communication is clear, responsive, and professional, making collaboration smooth and efficient. With his creativity, technical intelligence, and integrity, he is a valuable asset to any design team.\"",
    image: "/uploads/2026/01/Aicha-Sardily-1024x1024.webp",
    thumb: "/uploads/2026/01/Aicha-Sardily-150x150.webp",
  },
  {
    name: "Sepideh T",
    quote:
      "\"Jowel delivered me the best job with high quality, works within the timeline and does his best to satisfy the client.Highly recommended, will hire again\"",
    image: "/uploads/2026/01/Sepideh-T.jpeg",
    thumb: "/uploads/2026/01/Sepideh-T-150x150.jpeg",
  },
  {
    name: "Mahesh I",
    quote:
      "\"He is really patient. He understood every little detail I needed. I recommend he delivers the best out of the best. I'll never have any second thoughts of hiring him again and again.\"",
    image: "/uploads/2026/01/Mahesh-I.jpeg",
    thumb: "/uploads/2026/01/Mahesh-I-150x150.jpeg",
  },
  {
    name: "Zafer C",
    quote:
      "\"Hello Guys this guy is amazing. At first to be honest I was not sure but after seeing his references I was satisfied.But after my project he is really professional in his area. I decided to make more projects with him. This was the first one , 100% recommend him to everyone. I am more than happy to meet with this guy he works 7/24. No time difference with him.\"",
    image: "/uploads/2026/01/Zafer-C.jpeg",
    thumb: "/uploads/2026/01/Zafer-C-150x150.jpeg",
  },
  {
    name: "Omar K",
    quote:
      "\"He is a great person to work with, he was always available to answer my questions, he worked with a budget and he always made sure I was happy with his results. highly recommended.\"",
    image: "/uploads/2026/01/Omar-K-1024x1024.webp",
    thumb: "/uploads/2026/01/Omar-K-150x150.webp",
  },
  {
    name: "Eris Koutsoudakis",
    quote:
      "\"I’ve had a great experience working with Jewel 3D Guy. The quality of his 3D visuals is exceptional, among the best I’ve worked with. The level of detail, accuracy, and realism in his work is outstanding, and he has a strong understanding of design intent. Communication is clear and professional, and he is always receptive to feedback, ensuring the final visuals truly elevate the project. A highly skilled and reliable collaborator I would confidently recommend.\"",
    image: "/uploads/2026/01/Eris-Koutsoudakis-1024x1024.webp",
    thumb: "/uploads/2026/01/Eris-Koutsoudakis-150x150.webp",
  },
];

export const WHATSAPP = {
  number: "8801878809685",
  text: "Hello JowelVisual!\r\nLike to know more information about your work.",
};

/** Portfolio page order: newest post first (WordPress default query order). */
export const PROJECTS_BY_DATE: Project[] = [...PROJECTS].sort((a, b) => b.id - a.id);
