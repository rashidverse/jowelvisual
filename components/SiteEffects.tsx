"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Page-wide behaviour that WordPress plugins/snippets added:
 * - Mousewheel Smooth Scroll plugin (Lenis, same options as wpmss/lenis-init.min.js)
 * - footer snippet: `body.show` after 50px scroll (fades in the floating Portfolio / Contact bar)
 * - Elementor's `e--ua-apple` body class on Apple devices
 */
export default function SiteEffects() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      duration: 2,
      wheelMultiplier: 1,
      easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
    });
    (window as unknown as { lenisInstance: Lenis }).lenisInstance = lenis;

    const offset = 50;
    const onScroll = () => {
      document.body.classList.toggle("show", window.scrollY > offset);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("load", onScroll);

    const ua = navigator.userAgent;
    if (/Mac|iPhone|iPad|iPod/.test(navigator.platform) || /Macintosh|iPhone|iPad/.test(ua)) {
      document.body.classList.add("e--ua-apple");
    }

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  return null;
}
