// Swiper 8.4.5 — the same version Elementor ships, so its CSS (styles/wp/03_swiper.min.css) matches.
// Swiper 8's typings can't be reached through its package "exports" with
// moduleResolution "bundler", so the module is re-typed here from its own .d.ts files.

// @ts-expect-error -- runtime import; types are attached below
import * as S from "swiper";
import type SwiperClass from "../node_modules/swiper/types/swiper-class";
import type { SwiperModule } from "../node_modules/swiper/types/shared";

export type { SwiperClass };

const Swiper = S.default as typeof SwiperClass;
export default Swiper;

export const Autoplay = S.Autoplay as SwiperModule;
export const EffectFade = S.EffectFade as SwiperModule;
export const Navigation = S.Navigation as SwiperModule;
export const Zoom = S.Zoom as SwiperModule;
export const Keyboard = S.Keyboard as SwiperModule;
export const Pagination = S.Pagination as SwiperModule;
