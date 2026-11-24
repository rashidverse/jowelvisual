import type { Metadata, Viewport } from "next";
import SiteEffects from "@/components/SiteEffects";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

// Stylesheets in the same order WordPress printed them on the home page.
// Page-specific extras (e.g. Portfolio's loop grid) are imported by that page.
import "./styles/wp/inline-wp-img-auto-sizes-contain-inline-css.css";
import "./styles/wp/inline-ht_ctc_main_css-inline-css.css";
import "./styles/wp/inline-global-styles-inline-css.css";
import "./styles/wp/01_main.css";
import "./styles/wp/02_style.min.css";
import "./styles/wp/03_swiper.min.css";
import "./styles/wp/04_style.css";
import "./styles/wp/05_style.min.css";
import "./styles/wp/06_theme.min.css";
import "./styles/wp/07_header-footer.min.css";
import "./styles/wp/08_custom-frontend.min.css";
import "./styles/wp/09_post-9.css";
import "./styles/wp/10_widget-image.min.css";
import "./styles/wp/11_custom-pro-widget-nav-menu.min.css";
import "./styles/wp/12_sticky.min.css";
import "./styles/wp/13_widget-social-icons.min.css";
import "./styles/wp/14_custom-apple-webkit.min.css";
import "./styles/wp/15_e-swiper.min.css";
import "./styles/wp/16_custom-pro-widget-slides.min.css";
import "./styles/wp/17_widget-counter.min.css";
import "./styles/wp/18_widget-heading.min.css";
import "./styles/wp/19_motion-fx.min.css";
import "./styles/wp/20_widget-posts.min.css";
import "./styles/wp/21_widget-video.min.css";
import "./styles/wp/22_post-14.css";
import "./styles/wp/23_post-54.css";
import "./styles/wp/24_post-264.css";
import "./styles/wp/26_montserrat.css";
import "./styles/wp/27_bebasneue.css";
import "./styles/wp/32_poppins.css";
import "./styles/wp/inline-wp-custom-css.css";

export const metadata: Metadata = {
  title: { default: "jowelvisual", template: "%s – jowelvisual" },
  icons: {
    icon: [
      { url: "/uploads/2024/12/Jowel-Visual-150x150.png", sizes: "32x32" },
      { url: "/uploads/2024/12/Jowel-Visual.png", sizes: "192x192" },
    ],
    apple: "/uploads/2024/12/Jowel-Visual.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const GOOGLE_FONTS = ["Barlow", "Forum", "Lato", "Oswald", "Orienta"].map(
  (family) =>
    `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap`
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        {GOOGLE_FONTS.map((href) => (
          <link key={href} rel="stylesheet" href={href} media="all" />
        ))}
      </head>
      <body
        className="wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor theme-default elementor-default elementor-template-full-width elementor-kit-9 elementor-page"
        suppressHydrationWarning
      >
        <SiteEffects />
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
