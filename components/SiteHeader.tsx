"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/site";
import { CloseIcon, MenuBarIcon, SocialIcon } from "./icons";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Elementor header template (id 54).
 * - Bar 11ea74dc is "sticky: top": Elementor fixes it and leaves a hidden spacer.
 * - Social bar 7b1ac14 is also sticky top (fixed at the left edge).
 * - Custom script: hide header while scrolling down, show it with a glass
 *   background while scrolling up (past 100px).
 */
export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [spacerH, setSpacerH] = useState(70);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const pathname = usePathname();

  // Close the mobile menu after navigating.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Header hide / glass behaviour (original jQuery snippet in widget d48bdb2).
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastScrollTop = 0;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        header.classList.add("header-hidden");
        header.classList.remove("header-sticky");
      } else {
        if (scrollTop > 100) header.classList.add("header-sticky");
        else header.classList.remove("header-sticky");
        header.classList.remove("header-hidden");
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sticky spacer keeps the header's height (Elementor's .elementor-sticky__spacer).
  useIsoLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => setSpacerH(bar.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(bar);
    return () => ro.disconnect();
  }, []);

  // Elementor nav-menu "stretch" dropdown: full viewport width, aligned to the
  // left edge, placed under the toggle, with --menu-height = remaining viewport.
  useEffect(() => {
    const update = () => {
      const nav = navRef.current;
      if (!nav) return;
      const toggle = nav.querySelector<HTMLElement>(".elementor-menu-toggle");
      const dropdown = nav.querySelector<HTMLElement>(".elementor-nav-menu--dropdown");
      const rect = nav.getBoundingClientRect();
      const style: Record<string, string | number> = { width: document.documentElement.clientWidth, left: -rect.left };
      if (toggle && dropdown) {
        const top = toggle.offsetHeight;
        const marginTop = parseFloat(getComputedStyle(dropdown).marginTop) || 0;
        style.top = top;
        style["--menu-height"] = `${window.innerHeight - (toggle.getBoundingClientRect().top + top + marginTop)}px`;
      }
      setDropdownStyle(style as React.CSSProperties);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [menuOpen]);

  const menuItems = (inDropdown: boolean) =>
    NAV_ITEMS.map((item) => {
      const current = item.href === pathname;
      const isHome = item.href === "/";
      return (
        <li
          key={item.id}
          className={`menu-item menu-item-type-post_type menu-item-object-page${isHome ? " menu-item-home" : ""}${
            current ? ` current-menu-item page_item page-item-${item.pageId} current_page_item` : ""
          } menu-item-${item.id}`}
        >
          <Link
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={`elementor-item${current ? " elementor-item-active" : ""}`}
            tabIndex={inDropdown && !menuOpen ? -1 : undefined}
          >
            {item.label}
          </Link>
        </li>
      );
    });

  return (
    <header
      ref={headerRef}
      data-elementor-type="header"
      data-elementor-id="54"
      className="elementor elementor-54 elementor-location-header"
    >
      <div
        ref={barRef}
        className="elementor-element elementor-element-11ea74dc e-flex e-con-boxed e-con e-parent elementor-sticky elementor-sticky--active elementor-section--handles-inside e-lazyloaded"
        style={{ position: "fixed", width: "100%", marginTop: 0, marginBottom: 0, top: 0 }}
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-f7e1440 e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-3aef2d6e e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-44fcfb07 elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img fetchPriority="high" width={295} height={206} src="/uploads/2024/12/Jowel-Visual.png" className="attachment-full size-full wp-image-1068" alt="" />
                  </Link>
                </div>
              </div>
              <div className="elementor-element elementor-element-d48bdb2 elementor-widget elementor-widget-html" />
              <div className="elementor-element elementor-element-4ec174a9 e-con-full e-flex e-con e-child">
                <div
                  ref={navRef}
                  className={`elementor-element elementor-element-11e94836 elementor-nav-menu--stretch elementor-nav-menu__align-end elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu`}
                >
                  <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
                    <ul id="menu-1-11e94836" className="elementor-nav-menu">
                      {menuItems(false)}
                    </ul>
                  </nav>
                  <div
                    className={`elementor-menu-toggle${menuOpen ? " elementor-active" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label="Menu Toggle"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((o) => !o)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setMenuOpen((o) => !o);
                      }
                    }}
                  >
                    <MenuBarIcon />
                    <CloseIcon />
                  </div>
                  <nav
                    className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                    aria-hidden={!menuOpen}
                    style={dropdownStyle}
                  >
                    <ul id="menu-2-11e94836" className="elementor-nav-menu">
                      {menuItems(true)}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-11ea74dc e-flex e-con-boxed e-con e-parent elementor-sticky elementor-sticky__spacer"
        style={{ visibility: "hidden", transition: "none", animation: "none", height: spacerH, minHeight: 0, padding: 0 }}
        aria-hidden="true"
      />
      <div
        className="elementor-element elementor-element-7b1ac14 e-con-full e-flex e-con e-parent elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects e-lazyloaded"
        style={{ position: "fixed", marginTop: 0, marginBottom: 0, top: 0 }}
      >
        <div className="elementor-element elementor-element-c677ded e-grid-align-left elementor-absolute elementor-shape-square elementor-grid-0 elementor-widget elementor-widget-social-icons">
          <div className="elementor-social-icons-wrapper elementor-grid" role="list">
            {SOCIAL_LINKS.map((s) => (
              <span key={s.icon} className="elementor-grid-item" role="listitem">
                <a
                  className={`elementor-icon elementor-social-icon elementor-social-icon-${s.icon} elementor-repeater-item-${s.repeater}`}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="elementor-screen-only">{s.name}</span>
                  <SocialIcon name={s.icon} />
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
