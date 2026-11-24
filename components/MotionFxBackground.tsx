"use client";

import { useEffect, useRef } from "react";

/**
 * Elementor Pro Motion Effects, background scrolling "translateY".
 * Same math as elementor-pro/modules/motion-fx:
 *   layer height = 100% + speed*10%
 *   passed%      = (innerHeight - rect.top) / (innerHeight + height), clamped 0..100
 *   passed%      clamped to the affected range (start..end)
 *   translateY   = -(layerHeight - elementHeight) * passed% / 100
 */
export default function MotionFxBackground({
  speed,
  range = { start: 0, end: 100 },
}: {
  speed: number;
  /** "Affected range" (viewport %) — passed% is clamped into it, like Elementor's runAction(). */
  range?: { start: number; end: number };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const parent = containerRef.current?.parentElement;
    if (!layer || !parent) return;
    let raf = 0;
    let running = false;

    const run = () => {
      const rect = parent.getBoundingClientRect();
      const h = parent.offsetHeight;
      const vh = window.innerHeight;
      const percent = Math.max(0, Math.min((vh - rect.top) / (h + vh), 1));
      let passed = parseFloat((percent * 100).toFixed(2));
      passed = Math.min(range.end, Math.max(range.start, passed));
      const movable = layer.offsetHeight - h;
      layer.style.setProperty("--translateY", `${-(movable * passed) / 100}px`);
      if (running) raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!running) {
          running = true;
          raf = requestAnimationFrame(run);
        }
      } else {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(parent);
    run();
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [range.start, range.end]);

  return (
    <div ref={containerRef} className="elementor-motion-effects-container">
      <div
        ref={layerRef}
        className="elementor-motion-effects-layer"
        style={{ width: "100%", height: `${100 + speed * 10}%`, transform: "translateY(var(--translateY))" }}
      />
    </div>
  );
}
