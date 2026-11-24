"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Project } from "@/data/site";

type Tab = {
  title: string;
  /** Elementor element ids: tab panel container, inner container, loop-grid widget */
  ids: [string, string, string];
  gridId?: string;
  items: Project[];
};

/** One card of Elementor loop template 450 (Call To Action, cover skin, zoom-in background). */
function LoopItem({ p }: { p: Project }) {
  return (
    <div
      data-elementor-type="loop-item"
      data-elementor-id="450"
      className={`elementor elementor-450 e-loop-item e-loop-item-${p.id} post-${p.id} post type-post status-publish format-standard has-post-thumbnail hentry category-interior-design`}
      data-elementor-post-type="elementor_library"
      data-custom-edit-handle="1"
    >
      <div className="elementor-element elementor-element-acb1c22 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-ee14c66 elementor-cta--skin-cover elementor-cta--valign-bottom elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action">
            <a className="elementor-cta" href={`/${p.slug}/`}>
              <div className="elementor-cta__bg-wrapper">
                <div className="elementor-cta__bg elementor-bg" style={{ backgroundImage: `url(${p.image})` }} role="img" aria-label={p.imageLabel} />
                <div className="elementor-cta__bg-overlay" />
              </div>
              <div className="elementor-cta__content">
                <h3 className="elementor-cta__title elementor-cta__content-item elementor-content-item">{p.title}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Elementor "Nested Tabs" widget c2fb025 with a Loop Grid in each tab.
 * On the original site this whole section is hidden on every breakpoint except widescreen (≥ 2400px).
 */
export default function PortfolioTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const titleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = 204451877;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    titleRefs.current[next]?.focus();
  };

  return (
    <div className="elementor-element elementor-element-c2fb025 e-n-tabs-mobile elementor-widget elementor-widget-n-tabs">
      <div
        className="e-n-tabs"
        data-widget-number={base}
        aria-label="Tabs. Open items with Enter or Space, close with Escape and navigate using the Arrow keys."
      >
        <div className="e-n-tabs-heading" role="tablist">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              ref={(el) => {
                titleRefs.current[i] = el;
              }}
              id={`e-n-tab-title-${base}${i + 1}`}
              data-tab-title-id={`e-n-tab-title-${base}${i + 1}`}
              className="e-n-tab-title"
              aria-selected={active === i}
              data-tab-index={i + 1}
              role="tab"
              tabIndex={active === i ? 0 : -1}
              aria-controls={`e-n-tab-content-${base}${i + 1}`}
              style={{ ["--n-tabs-title-order" as string]: i + 1 }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="e-n-tab-title-text">{t.title}</span>
            </button>
          ))}
        </div>
        <div className="e-n-tabs-content">
          {tabs.map((t, i) => (
            <div
              key={t.title}
              id={`e-n-tab-content-${base}${i + 1}`}
              role="tabpanel"
              aria-labelledby={`e-n-tab-title-${base}${i + 1}`}
              data-tab-index={i + 1}
              style={{ ["--n-tabs-title-order" as string]: i + 1 }}
              className={`${active === i ? "e-active" : ""} elementor-element elementor-element-${t.ids[0]} e-con-full e-flex e-con e-child`}
            >
              <div className={`elementor-element elementor-element-${t.ids[1]} e-con-full e-flex e-con e-child`}>
                <div
                  className={`elementor-element elementor-element-${t.ids[2]} elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid`}
                  id={t.gridId}
                >
                  <div className="elementor-widget-container">
                    {t.items.length ? (
                      <div className="elementor-loop-container elementor-grid" role="list">
                        {t.items.map((p) => (
                          <LoopItem key={p.id} p={p} />
                        ))}
                      </div>
                    ) : (
                      <div className="e-loop-nothing-found-message" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
