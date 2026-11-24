"use client";

import { useEffect, useRef } from "react";
import Swiper, { Autoplay, EffectFade, Navigation, type SwiperClass } from "@/lib/swiper";
import { HERO_HEADING, HERO_SLIDES } from "@/data/site";
import { ChevronLeft, ChevronRight } from "./icons";

/**
 * Elementor Pro "Slides" widget 763b7ea:
 * fade transition, autoplay 5s, 500ms speed, infinite loop, arrows,
 * pause on hover, Ken Burns "out" on the active slide.
 */
export default function HeroSlides() {
  const swiperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = swiperEl.current;
    if (!el) return;

    const setKenBurns = (sw: SwiperClass) => {
      el.querySelectorAll(".elementor-ken-burns--active").forEach((n) => n.classList.remove("elementor-ken-burns--active"));
      const active = sw.slides[sw.activeIndex] as HTMLElement | undefined;
      active?.querySelector(".elementor-ken-burns")?.classList.add("elementor-ken-burns--active");
    };

    const swiper = new Swiper(el, {
      modules: [Navigation, Autoplay, EffectFade],
      slidesPerView: 1,
      loop: true,
      loopedSlides: HERO_SLIDES.length,
      speed: 500,
      effect: "fade",
      fadeEffect: { crossFade: true },
      grabCursor: true,
      watchSlidesProgress: true,
      autoplay: { delay: 5000, disableOnInteraction: true, stopOnLastSlide: true, waitForTransition: true },
      navigation: {
        prevEl: el.querySelector<HTMLElement>(".elementor-swiper-button-prev"),
        nextEl: el.querySelector<HTMLElement>(".elementor-swiper-button-next"),
      },
      on: {
        init: (sw) => setKenBurns(sw),
        slideChange: (sw) => setKenBurns(sw),
      },
    });

    // pause_on_hover
    const stop = () => swiper.autoplay?.stop();
    const start = () => swiper.autoplay?.start();
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);

    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="elementor-element elementor-element-763b7ea elementor--v-position-bottom elementor--h-position-center elementor-arrows-position-inside elementor-widget elementor-widget-slides">
      <div
        ref={swiperEl}
        className="elementor-slides-wrapper elementor-main-swiper swiper"
        role="region"
        aria-roledescription="carousel"
        aria-label="Slides"
        dir="ltr"
        data-animation=""
      >
        <div className="swiper-wrapper elementor-slides">
          {HERO_SLIDES.map((s) => (
            <div key={s.repeater} className={`elementor-repeater-item-${s.repeater} swiper-slide`} role="group" aria-roledescription="slide">
              <div className="swiper-slide-bg elementor-ken-burns elementor-ken-burns--out" role="img" aria-label={s.label} />
              <div className="elementor-background-overlay" />
              <div className="swiper-slide-inner">
                <div className="swiper-slide-contents">
                  <div className="elementor-slide-heading">{HERO_HEADING}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide">
          <ChevronLeft />
        </div>
        <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
