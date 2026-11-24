import Link from "next/link";
/**
 * Elementor footer template (id 264).
 * - 24001474: floating "Portfolio / Contact US" bar, fixed to the bottom,
 *   fades in once the page is scrolled (body.show, see SiteEffects).
 * - 0d4658f: logo + copyright.
 */
export default function SiteFooter() {
  return (
    <footer data-elementor-type="footer" data-elementor-id="264" className="elementor elementor-264 elementor-location-footer" data-elementor-post-type="elementor_library">
      <div className="elementor-element elementor-element-24001474 sticky-menu-hidden e-con-full e-flex e-con e-parent elementor-sticky e-lazyloaded">
        <div className="elementor-element elementor-element-f71c3 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-53ba0786 elementor-widget elementor-widget-button">
            <Link className="elementor-button elementor-button-link elementor-size-sm" href="/portfolio/">
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Portfolio</span>
              </span>
            </Link>
          </div>
          <div className="elementor-element elementor-element-41479d4a elementor-widget elementor-widget-button">
            <Link className="elementor-button elementor-button-link elementor-size-sm" href="/contact/">
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Contact US</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-0d4658f e-con-full e-flex e-con e-parent e-lazyloaded">
        <div className="elementor-element elementor-element-5b63e79 e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-01f79cb elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width={295} height={206} src="/uploads/2024/12/Jowel-Visual.png" className="attachment-full size-full wp-image-1068" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-d87beea elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-html" />
        <div className="elementor-element elementor-element-518ff0f e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-9165e06 elementor-widget elementor-widget-text-editor">
              <p>
                All Rights Reserved by{" "}
                <Link style={{ color: "#fff", fontWeight: "bold" }} href="/">
                  Jowelvisual.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
