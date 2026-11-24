import type { Metadata } from "next";
import Image from "next/image";
import BodyClass from "@/components/BodyClass";
import PortfolioTabs from "@/components/PortfolioTabs";
import { PROJECTS_BY_DATE } from "@/data/site";

// Extra stylesheets WordPress loads on the Portfolio page (Elementor page 33).
import "../styles/wp/portfolio-widget-loop-common.min.css";
import "../styles/wp/portfolio-custom-pro-widget-loop-grid.min.css";
import "../styles/wp/portfolio-custom-widget-nested-tabs.min.css";
import "../styles/wp/portfolio-post-33.css";
import "../styles/wp/portfolio-custom-pro-widget-call-to-action.min.css";
import "../styles/wp/portfolio-transitions.min.css";
import "../styles/wp/portfolio-loop-450.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <BodyClass className="page-id-33 elementor-page-33" />
      <div data-elementor-type="wp-page" data-elementor-id="33" className="elementor elementor-33" data-elementor-post-type="page">
        {/* Title banner */}
        <div className="elementor-element elementor-element-92201cd e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-6acabb8 elementor-widget elementor-widget-heading">
              <h2 className="elementor-heading-title elementor-size-default">Portfolio</h2>
            </div>
          </div>
        </div>

        {/* Project grid (Posts widget, classic skin) */}
        <div className="elementor-element elementor-element-3a1272a e-con-full e-flex e-con e-parent e-lazyloaded">
          <div className="elementor-element elementor-element-b608924 e-con-full e-flex e-con e-child">
            <div
              className="elementor-element elementor-element-1714da6 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
              id="project_post-jowel"
            >
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid" role="list">
                  {PROJECTS_BY_DATE.map((p, i) => (
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

        {/* Category tabs — hidden on every breakpoint except widescreen (≥ 2400px), same as the original */}
        <div className="elementor-element elementor-element-b5bbd8e e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con e-parent e-lazyloaded">
          <div className="elementor-element elementor-element-6035523 e-con-full e-flex e-con e-child">
            <PortfolioTabs
              tabs={[
                { title: "ALL", ids: ["d71385f", "5af57fb", "1498ed5"], gridId: "portfolio-loop-grid", items: PROJECTS_BY_DATE },
                { title: "Interior Design", ids: ["95ddf81", "5a375d1", "c2a4363"], items: PROJECTS_BY_DATE.slice(0, 20) },
                { title: "Exterior Design", ids: ["c04cc64", "245e870", "1d49f8e"], items: [] },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
