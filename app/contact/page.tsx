import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import ContactForm from "@/components/ContactForm";

// Extra stylesheets WordPress loads on the Contact page (Elementor page 42).
import "../styles/wp/about-custom-widget-icon-box.min.css";
import "../styles/wp/contact-widget-form.min.css";
import "../styles/wp/contact-widget-google_maps.min.css";
import "../styles/wp/contact-post-42.css";

export const metadata: Metadata = {
  title: "Contact",
};

const PhoneIcon = () => (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
  </svg>
);
const EnvelopeIcon = () => (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </svg>
);
const MarkerIcon = () => (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
);

type InfoBox = {
  el: string;
  icon: React.ReactNode;
  href: string;
  label: string;
  /** span for single-line boxes, div when there is a description (as Elementor prints it) */
  description?: string;
};

const INFO: InfoBox[] = [
  { el: "bd7fa75", icon: <PhoneIcon />, href: "tel:%2001878809685", label: "+880 1878 809 685" },
  { el: "a0d5c1d", icon: <EnvelopeIcon />, href: "mailto:Jowelvisual@gmail.com", label: "jowelvisual@gmail.com" },
  { el: "3cc179f", icon: <MarkerIcon />, href: "", label: "UK", description: "443a Brockley Road, London, England, SE4 2PJ" },
  { el: "348e6ea", icon: <MarkerIcon />, href: "", label: "Dhaka", description: "H-24/A R-10 Gulshan-1" },
];

const MAP_ADDRESS = "443a Brockley Road, London, England, SE4 2PJ";

export default function ContactPage() {
  return (
    <>
      <BodyClass className="page-id-42 elementor-page-42" />
      <div data-elementor-type="wp-page" data-elementor-id="42" className="elementor elementor-42" data-elementor-post-type="page">
        {/* Title banner */}
        <div className="elementor-element elementor-element-2736a4f e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-62dfdb5 elementor-widget elementor-widget-heading">
              <h2 className="elementor-heading-title elementor-size-default">Contact</h2>
            </div>
          </div>
        </div>

        {/* Info + form */}
        <div className="elementor-element elementor-element-d14462b e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4aada3a e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-7c66369 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-84a699f elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Start Your Journey With Me 🚀</h2>
                </div>
                <div className="elementor-element elementor-element-ae313cb elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                  <p>
                    I’m always open to exciting ideas and collaborations. Share your thoughts or inquiries here, and I’ll make sure to
                    respond promptly.
                  </p>
                </div>
                {INFO.map((b) => {
                  const TitleTag = b.description ? "div" : "span";
                  return (
                    <div
                      key={b.el}
                      className={`elementor-element elementor-element-${b.el} elementor-position-inline-start elementor-mobile-position-inline-start elementor-view-default elementor-widget elementor-widget-icon-box`}
                    >
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <a href={b.href} className="elementor-icon" tabIndex={-1} aria-label={b.label}>
                            {b.icon}
                          </a>
                        </div>
                        <div className="elementor-icon-box-content">
                          <TitleTag className="elementor-icon-box-title">
                            <a href={b.href}>{b.label}</a>
                          </TitleTag>
                          {b.description && <p className="elementor-icon-box-description">{b.description}</p>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="elementor-element elementor-element-86c994e e-con-full e-flex e-con e-child" id="contact_form-holder">
                <div className="elementor-element elementor-element-4aa7bc4 e-con-full e-flex e-con e-child" id="contact_form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google map */}
        <div className="elementor-element elementor-element-c5bc429 e-con-full e-flex e-con e-parent">
          <div className="elementor-element elementor-element-28f8d2f elementor-widget elementor-widget-google_maps">
            <div className="elementor-custom-embed">
              <iframe
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&t=m&z=17&output=embed&iwloc=near`}
                title={MAP_ADDRESS}
                aria-label={MAP_ADDRESS}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
