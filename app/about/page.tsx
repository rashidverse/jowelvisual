/* eslint-disable @next/next/no-img-element -- plain <img> keeps Elementor's exact markup and sizing */
import type { Metadata } from "next";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import LightboxLink from "@/components/Lightbox";
import Testimonials from "@/components/Testimonials";

// Extra stylesheets WordPress loads on the About page (Elementor page 39).
import "../styles/wp/about-custom-widget-icon-box.min.css";
import "../styles/wp/about-widget-divider.min.css";
import "../styles/wp/portfolio-custom-pro-widget-call-to-action.min.css";
import "../styles/wp/portfolio-transitions.min.css";
import "../styles/wp/about-post-39.css";
// Elementor lightbox (loaded on demand by Elementor when an image is opened)
import "../styles/wp/lightbox-dialog.min.css";
import "../styles/wp/lightbox-custom-lightbox.min.css";

export const metadata: Metadata = {
  title: "About",
};

const ABOUT_IMAGE = "/uploads/2025/03/469398548_724529493767147_4786376129735375290_n.jpeg";
const ABOUT_IMAGE_TITLE = "469398548_724529493767147_4786376129735375290_n";
const ABOUT_IMAGE_HASH =
  "#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTYwMiwidXJsIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9qb3dlbHZpc3VhbFwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNVwvMDNcLzQ2OTM5ODU0OF83MjQ1Mjk0OTM3NjcxNDdfNDc4NjM3NjEyOTczNTM3NTI5MF9uLmpwZWcifQ%3D%3D";

const FEATURES = [
  {
    box: "2679771",
    imgEl: "76b7383",
    img: { src: "/uploads/2025/03/icon-31-1.png", w: 64, h: 64, id: 1949 },
    iconBox: "e409775",
    title: "Realistic & Affordable Visualizations",
    text: "We bring architectural ideas to life with high-quality, cost-effective visualizations, ensuring stunning and detailed representations within your budget.",
  },
  {
    box: "b1ef543",
    imgEl: "f3b86bf",
    img: { src: "/uploads/2025/03/icon-33.png", w: 58, h: 64, id: 1946 },
    iconBox: "ace3715",
    title: "Creative & Immersive Designs",
    text: "We work is a fusion of imagination, experience, and technical expertise. We craft breathtaking architectural visuals that showcase every design element with precision.",
  },
  {
    box: "539bf44",
    imgEl: "d51e260",
    img: { src: "/uploads/2025/03/icon-32.png", w: 62, h: 62, id: 1947 },
    iconBox: "e78542a",
    title: "Expert & Passionate Team",
    text: "We team of skilled professionals is dedicated to continuous innovation, delivering high-quality architectural renderings, animations, and VR experiences with excellence.",
  },
];

const MILESTONES = [
  { box: "711df3f", numEl: "0fc2086", textEl: "d0b3a64", num: "25+", label: "Interior Design" },
  { box: "5e7440c", numEl: "ff6c791", textEl: "83a0ce9", num: "93+", label: "Architecture" },
  { box: "f37e92c", numEl: "d8df3ed", textEl: "e70ae40", num: "48+", label: "Exterior Design" },
  { box: "48b9dfe", numEl: "99bcf2e", textEl: "ecde5e7", num: "66+", label: "Project done" },
];

// "Meet my Team" — placeholder section the original hides on every breakpoint.
const TEAM = [
  { box: "a3fc299", cta: "4e9e72d", img: "avatar_01", name: "john portman", role: "Designer" },
  { box: "3e98276", cta: "4088be6", img: "avatar_02", name: "alison clutcher", role: "Photographer" },
  { box: "4363e2b", cta: "b09c34a", img: "avatar_03", name: "Russell Otten", role: "Operations Manager" },
  { box: "bd2c61e", cta: "2b2a05b", img: "avatar_04", name: "julie crawford", role: "Architect" },
];

export default function AboutPage() {
  return (
    <>
      <BodyClass className="page-id-39 elementor-page-39" />
      <div data-elementor-type="wp-page" data-elementor-id="39" className="elementor elementor-39" data-elementor-post-type="page">
        {/* Title banner */}
        <div className="elementor-element elementor-element-2b58c51 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-d705dd1 elementor-widget elementor-widget-heading">
              <h2 className="elementor-heading-title elementor-size-default">About US</h2>
            </div>
          </div>
        </div>

        {/* Intro + image */}
        <div className="elementor-element elementor-element-79911ed e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4d4f28b e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-416a266 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-6bc929c elementor-widget elementor-widget-text-editor">
                  <p className="elementor-heading-title elementor-size-default">About US</p>
                </div>
                <div className="elementor-element elementor-element-e89ca05 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Transforming Concepts into Reality</h2>
                </div>
                <div className="elementor-element elementor-element-dda63c6 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor">
                  <p>
                    With over a decade of specialized experience in high-end 3D Architectural Visualization, we bridge the gap
                    between technical precision and artistic storytelling. My work doesn&#8217;t just show a building; it evokes the
                    feeling of being there.
                  </p>
                  <p>
                    Over the past 10 years, we have collaborated with leading architects, developers, and interior designers to
                    bring complex projects to life—from luxury residential interiors to large-scale commercial master-plans. we
                    understand that a great render is a tool for communication, marketing, and securing approvals.
                  </p>
                  <p>
                    We process is rooted in a deep understanding of light, materiality, and spatial flow, ensuring that every frame
                    serves your design intent and resonates with your target audience.
                  </p>
                </div>
              </div>
              <div className="elementor-element elementor-element-2e5ac86 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-13b485f elementor-widget elementor-widget-image">
                  <LightboxLink src={ABOUT_IMAGE} title={ABOUT_IMAGE_TITLE} actionHash={ABOUT_IMAGE_HASH}>
                    <img decoding="async" width={1080} height={1080} src={ABOUT_IMAGE} className="attachment-full size-full wp-image-1602" alt="" />
                  </LightboxLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three feature boxes */}
        <div className="elementor-element elementor-element-36a0d73 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            {FEATURES.map((f, i) => (
              <div key={f.box} className={`elementor-element elementor-element-${f.box} e-con-full e-flex e-con e-child`}>
                <div className={`elementor-element elementor-element-${f.imgEl} elementor-widget__width-initial elementor-widget-tablet_extra__width-initial elementor-widget elementor-widget-image`}>
                  <img
                    loading={i === 0 ? undefined : "lazy"}
                    decoding="async"
                    width={f.img.w}
                    height={f.img.h}
                    src={f.img.src}
                    className={`attachment-full size-full wp-image-${f.img.id}`}
                    alt=""
                  />
                </div>
                <div className={`elementor-element elementor-element-${f.iconBox} elementor-widget elementor-widget-icon-box`}>
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-content">
                      <div className="elementor-icon-box-title">
                        <span>{f.title}</span>
                      </div>
                      <p className="elementor-icon-box-description">{f.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="elementor-element elementor-element-1dc2f2c e-con-full e-flex e-con e-parent e-lazyloaded">
          <div className="elementor-element elementor-element-08f8052 e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ce71a6e e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-57457af elementor-widget elementor-widget-text-editor">
                  <p className="elementor-heading-title elementor-size-default">Quality of work</p>
                </div>
                <div className="elementor-element elementor-element-3c5c165 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Milestones that We proudly accomplished and lead me forward.</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-94ed758 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-3230373 e-con-full e-flex e-con e-child">
                  {MILESTONES.map((m) => (
                    <div key={m.box} className={`elementor-element elementor-element-${m.box} e-con-full e-flex e-con e-child`}>
                      <div className={`elementor-element elementor-element-${m.numEl} elementor-widget elementor-widget-heading`}>
                        <span className="elementor-heading-title elementor-size-default">{m.num}</span>
                      </div>
                      <div className={`elementor-element elementor-element-${m.textEl} elementor-widget elementor-widget-text-editor`}>
                        <p>{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last work */}
        <div className="elementor-element elementor-element-e3b062c e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-abbc51c e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-d5f2ca1 elementor-widget elementor-widget-image">
                <img loading="lazy" decoding="async" width={2560} height={1441} src="/uploads/2025/03/05-scaled.webp" className="attachment-full size-full wp-image-1632" alt="" />
              </div>
              <div className="elementor-element elementor-element-c20cd45 elementor-widget elementor-widget-text-editor">
                <p className="elementor-heading-title elementor-size-default">Last work I Finished</p>
              </div>
              <div className="elementor-element elementor-element-35c3385 elementor-widget elementor-widget-heading">
                <span className="elementor-heading-title elementor-size-default">
                  We use assets and references only from personally verified sources to ensure accuracy and quality in every visualization.
                </span>
              </div>
              <div className="elementor-element elementor-element-01734e6 elementor-widget__width-initial elementor-widget elementor-widget-image">
                <img loading="lazy" decoding="async" width={80} height={80} src="/uploads/2026/01/icone-allergeni.svg" className="attachment-full size-full wp-image-2880" alt="" />
              </div>
            </div>
            <div className="elementor-element elementor-element-ae46549 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-e955884 elementor-widget elementor-widget-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1440}
                  height={1694}
                  src="/uploads/2025/03/468244511_1775958239882118_5290448343453725456_n.jpeg"
                  className="attachment-full size-full wp-image-1600"
                  alt=""
                />
              </div>
              <div className="elementor-element elementor-element-1bd2dfc elementor-widget elementor-widget-text-editor">
                <p>
                  Glossy and matte finishes, realistic wood textures, and a vast palette of 200+ colors. High-quality, environmentally
                  friendly visuals with industry-standard accuracy.
                </p>
              </div>
              <div className="elementor-element elementor-element-2b3056a elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="elementor-element elementor-element-feab3c6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-dc09806 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action">
              <div className="elementor-cta">
                <div className="elementor-cta__content">
                  <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">Ready to begin?</h2>
                  <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                    With nearly two decades of specialised expertise in the field of architectural visualisation, we are a
                    distinguished and reputable boutique creative studio dedicated to crafting exceptional visualisations that reveal
                    the future of imagined designs and technical concepts. Whether you’re an architect, developer, or designer, let us
                    turn your unbuilt ideas into compelling visual narratives that resonate with your audience and drive engagement.
                  </div>
                  <div className="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item ">
                    <Link className="elementor-cta__button elementor-button elementor-size-" href="/contact/">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="elementor-element elementor-element-7f6ab80 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <Testimonials elementId="fa4225c" wrapId="ats21-cb46664a" />
          </div>
        </div>

        {/* Meet my Team — hidden on all breakpoints, same as the original */}
        <div className="elementor-element elementor-element-f736709 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-hidden-widescreen e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ed70798 elementor-widget__width-auto elementor-widget elementor-widget-text-editor">
              <p className="elementor-heading-title elementor-size-default">Meet my Team</p>
            </div>
            <div className="elementor-element elementor-element-c909f76 elementor-widget__width-initial elementor-widget elementor-widget-heading">
              <span className="elementor-heading-title elementor-size-default">Creative Minds Always Think Something.</span>
            </div>
            <div className="elementor-element elementor-element-422697b e-con-full e-flex e-con e-child">
              {TEAM.map((t) => (
                <div key={t.box} className={`elementor-element elementor-element-${t.box} e-con-full e-flex e-con e-child`}>
                  <div className={`elementor-element elementor-element-${t.cta} elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action`}>
                    <div className="elementor-cta">
                      <div className="elementor-cta__bg-wrapper">
                        <div className="elementor-cta__bg elementor-bg" style={{ backgroundImage: `url(/uploads/2025/03/${t.img}.jpg)` }} role="img" aria-label={t.img} />
                        <div className="elementor-cta__bg-overlay" />
                      </div>
                      <div className="elementor-cta__content">
                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">{t.name}</h2>
                        <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
