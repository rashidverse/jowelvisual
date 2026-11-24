"use client";

import { useEffect, useRef } from "react";
import Swiper, { Autoplay } from "@/lib/swiper";
import { TESTIMONIALS } from "@/data/site";
import { LongArrowLeft, LongArrowRight, StarIcon } from "./icons";

/**
 * "Advanced Testimonial Slider" (ats) widget, layout image-right.
 * Ported from the plugin's assets/js/slider.js: text slider drives the image
 * slider and the thumbnail strip; autoplay 4s, loop (not on mobile).
 */
export default function Testimonials({
  elementId = "ebeb7af",
  wrapId = "ats21-6c5f92fe",
}: {
  /** Elementor widget element id (differs per page) */
  elementId?: string;
  /** plugin's random wrapper id */
  wrapId?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const autoplay = true;
    const delay = 4000;
    const loop = true;
    const tpvD = 3;
    const tpvT = 2.2;
    const tpvM = 1;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const effectiveLoop = isMobile ? false : loop;

    const textEl = root.querySelector<HTMLElement>(".ats-text")!;
    const imgEl = root.querySelector<HTMLElement>(".ats-image")!;
    const thumbsEl = root.querySelector<HTMLElement>(".ats-thumbs")!;

    const text = new Swiper(textEl, {
      modules: [Autoplay],
      loop: effectiveLoop,
      speed: isMobile ? 350 : 500,
      autoHeight: true,
      autoplay: autoplay ? { delay, disableOnInteraction: false } : false,
    });

    const img = new Swiper(imgEl, {
      loop: effectiveLoop,
      speed: isMobile ? 350 : 500,
      allowTouchMove: false,
    });

    const setActive = (i: number) => {
      thumbsEl.querySelectorAll(".ats-thumb-slide").forEach((el, idx) => el.classList.toggle("is-active", idx === i));
    };

    const thumbs = new Swiper(thumbsEl, {
      slidesPerView: tpvD,
      spaceBetween: 20,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: { slidesPerView: tpvM, spaceBetween: 14 },
        600: { slidesPerView: tpvT, spaceBetween: 18 },
        992: { slidesPerView: tpvD, spaceBetween: 20 },
      },
    });

    thumbs.on("click", (sw) => {
      const idx = sw.clickedIndex;
      if (typeof idx === "number") {
        if (!isMobile && loop) text.slideToLoop(idx);
        else text.slideTo(idx);
      }
    });

    const sync = () => {
      const real = text.realIndex || 0;
      if (!isMobile && loop) img.slideToLoop(real);
      else img.slideTo(real);
      setActive(real);
      thumbs.slideTo(real);
    };

    requestAnimationFrame(sync);
    const t1 = window.setTimeout(sync, 60);

    imgEl.querySelectorAll("img").forEach((im) => {
      if (!im.complete) {
        im.addEventListener("load", () => requestAnimationFrame(() => { img.update(); sync(); }), { once: true });
      }
    });

    let raf = 0;
    text.on("slideChange", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    });

    const prev = root.querySelector(".ats-prev");
    const next = root.querySelector(".ats-next");
    const onPrev = () => text.slidePrev();
    const onNext = () => text.slideNext();
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);

    const t2 = window.setTimeout(() => {
      try { text.autoplay?.start(); } catch { /* noop */ }
    }, 400);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      cancelAnimationFrame(raf);
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      thumbs.destroy(true, true);
      img.destroy(true, true);
      text.destroy(true, true);
    };
  }, []);

  return (
    <div className={`elementor-element elementor-element-${elementId} elementor-widget elementor-widget-ats_testimonial_slider`}>
      <div className="elementor-widget-container">
        <div
          ref={rootRef}
          id={wrapId}
          className="ats-wrap ats21-wrap image-right "
          dir="ltr"
          data-autoplay="1"
          data-delay="4000"
          data-loop="1"
          data-show-thumbs="yes"
          data-tpv-d="3"
          data-tpv-t="2.2"
          data-tpv-m="1"
        >
          <div className="ats-grid">
            <div className="ats-left">
              <div className="ats-heading">
                <div className="ats-subtitle">Clients Insights</div>
                <div className="ats-title">Words From Our Clients</div>
              </div>
              <div className="swiper ats-text ats21-text">
                <div className="swiper-wrapper">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.name} className="swiper-slide ats-text-slide">
                      <div className="ats-stars">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <span key={i} className="ats-star"><StarIcon /></span>
                        ))}
                      </div>
                      <div id="ats_quote_wrapper">
                        <div className="ats-quote">
                          <p />
                          <p className="wp-block-paragraph">{t.quote}</p>
                          <p />
                        </div>
                        <div className="ats-name">{t.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ats-arrows">
                <button type="button" className="ats-arrow ats-prev ats21-prev" aria-label="Previous">
                  <LongArrowLeft />
                </button>
                <button type="button" className="ats-arrow ats-next ats21-next" aria-label="Next">
                  <LongArrowRight />
                </button>
              </div>
            </div>
            <div className="ats-right">
              <div className="swiper ats-image ats21-image">
                <div className="swiper-wrapper">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.name} className="swiper-slide">
                      <div className="ats-main-image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.image} alt={t.name} loading="lazy" decoding="async" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="swiper ats-thumbs ats21-thumbs">
            <div className="swiper-wrapper">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className="swiper-slide ats-thumb-slide ats21-thumb-slide" data-idx={i}>
                  <div className="ats-thumb-row ats21-thumb-row">
                    <div className="ats-thumb-image ats21-thumb-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.thumb} alt={t.name} loading="lazy" decoding="async" />
                    </div>
                    <div className="ats-thumb-text ats21-thumb-text">
                      <div className="ats-thumb-name ats21-thumb-name">{t.name}</div>
                    </div>
                  </div>
                  <div className="ats-thumb-underline ats21-thumb-underline" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
