"use client";

import { useEffect } from "react";

/** Adds the page-specific WordPress body classes (e.g. "home page-id-14 elementor-page-14") while the page is mounted. */
export default function BodyClass({ className }: { className: string }) {
  useEffect(() => {
    const tokens = className.split(/\s+/).filter(Boolean);
    document.body.classList.add(...tokens);
    return () => document.body.classList.remove(...tokens);
  }, [className]);
  return null;
}
