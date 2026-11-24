import Image from "next/image";
import HeroSlides from "@/components/HeroSlides";
import Counter from "@/components/Counter";
import MotionFxBackground from "@/components/MotionFxBackground";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, PlayCircle } from "@/components/icons";
import BodyClass from "@/components/BodyClass";
import { PROJECTS } from "@/data/site";

export default function Home() {
  return (
    <>
      <BodyClass className="home page-id-14 elementor-page-14" />
      <div data-elementor-type="wp-page" data-elementor-id="14" className="elementor elementor-14" data-elementor-post-type="page">
        {/* Hero */}
        <div className="elementor-element elementor-element-7b8134e e-con-full e-flex e-con e-parent e-lazyloaded" id="hero_section">
          <HeroSlides />
        </div>

        {/* About */}
        <div
          className="elementor-element elementor-element-2b7bfe4 e-flex e-con-boxed e-con e-parent elementor-motion-effects-element elementor-motion-effects-element-type-background e-lazyloaded"
          id="about_section"
        >
          <MotionFxBackground speed={6.2} range={{ start: 38, end: 100 }} />
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-2187ee8 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-fbf555d elementor-widget__width-inherit elementor-widget elementor-widget-counter">
                <div className="elementor-counter">
                  <p className="elementor-counter-title">Years Experience Interior &amp; Architectural Visualization</p>
                  <div className="elementor-counter-number-wrapper">
                    <span className="elementor-counter-number-prefix" />
                    <Counter from={1} to={10} duration={2000} />
                    <span className="elementor-counter-number-suffix">+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2e791a2 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-d4fde24 elementor-widget elementor-widget-text-editor">
                <p className="elementor-heading-title elementor-size-default">About Us</p>
              </div>
              <div className="elementor-element elementor-element-55292e2 elementor-widget elementor-widget-heading">
                <h2 className="elementor-heading-title elementor-size-default">
                  Professional 3D Visualization for Interior Designers &amp; Architects
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-e1d8944 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-0b1c44c elementor-widget elementor-widget-text-editor">
                <p>
                  With over a decade of specialized experience in high-end 3D Architectural Visualization, we bridge the gap
                  between technical precision and artistic storytelling. My work doesn&#8217;t just show a building; it evokes
                  the feeling of being there. Over the past 10 years, we have collaborated with leading architects, developers,
                  and interior designers to bring complex projects to life—from luxury residential interiors to large-scale
                  commercial masterplans&#8230;
                </p>
              </div>
              <div className="elementor-element elementor-element-f282359 elementor-mobile-align-center elementor-widget elementor-widget-button">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="/about/">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-icon">
                      <ArrowRight />
                    </span>
                    <span className="elementor-button-text">Continue Reading</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="elementor-element elementor-element-57dc8da e-con-full e-flex e-con e-parent e-lazyloaded" id="project_post_section">
          <div className="elementor-element elementor-element-a18d2de e-con-full e-flex e-con e-child">
            <div
              className="elementor-element elementor-element-7e49cb8 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
              id="project_post_jowel"
            >
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid" role="list">
                  {PROJECTS.map((p, i) => (
                    <article
                      key={p.slug}
                      className={`elementor-post elementor-grid-item post-${p.id} post type-post status-publish format-standard has-post-thumbnail hentry category-interior-design`}
                      role="listitem"
                    >
                      <a className="elementor-post__thumbnail__link" href={`/${p.slug}/`} tabIndex={-1}>
                        <div className="elementor-post__thumbnail">
                          <Image
                            src={p.image}
                            width={p.width}
                            height={p.height}
                            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className={`attachment-full size-full wp-image-${p.imageId}`}
                            alt=""
                            priority={i < 3}
                          />
                        </div>
                      </a>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <a href={`/${p.slug}/`}>{p.title}</a>
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo video */}
        <div className="elementor-element elementor-element-ad3d9a8 e-flex e-con-boxed e-con e-parent e-lazyloaded" id="promo-videos">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-09595dc e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-a8694ee elementor-widget elementor-widget-text-editor">
                <p className="elementor-heading-title elementor-size-default">Promo Video</p>
              </div>
              <div className="elementor-element elementor-element-c14f7d0 elementor-widget elementor-widget-heading">
                <div className="elementor-heading-title elementor-size-default">
                  Ensuring a Seamless Experience from Concept to Visualization
                </div>
              </div>
              <div className="elementor-element elementor-element-a5269aa elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                <p>
                  We are follow all industry standards to ensure the highest quality and accuracy in visualizations, while
                  continuously enhancing our processes for a seamless client experience
                </p>
              </div>
              <div className="elementor-element elementor-element-66bb2aa elementor-widget elementor-widget-button">
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="https://www.instagram.com/jowel.visual/reels/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-icon">
                      <PlayCircle />
                    </span>
                    <span className="elementor-button-text">More Videos</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="elementor-element elementor-element-3c1dab2 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-a3c31de elementor-widget__width-auto elementor-widget elementor-widget-video">
                <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                  <video
                    className="elementor-video"
                    src="/uploads/2025/03/Jowel-Insta-Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    poster="/uploads/2025/03/02-scaled.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="elementor-element elementor-element-51d51ba e-flex e-con-boxed e-con e-parent e-lazyloaded" id="review_section">
          <div className="e-con-inner">
            <Testimonials />
          </div>
        </div>
      </div>
    </>
  );
}
