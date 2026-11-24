"use client";

import { useEffect, useRef, useState } from "react";

/** Elementor counter widget: counts from `from` to `to` once it scrolls into view (jQuery numerator, "swing" easing). */
export default function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 0.5 - Math.cos(p * Math.PI) / 2; // jQuery "swing"
          setValue(Math.round(from + (to - from) * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className="elementor-counter-number" data-duration={duration} data-to-value={to} data-from-value={from}>
      {value}
    </span>
  );
}
