"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Swiper, { Keyboard, Zoom, type SwiperClass } from "@/lib/swiper";
import { ChevronLeft, ChevronRight } from "./icons";

/*
 * Port of Elementor's image lightbox (elementor/assets/js/chunks/lightbox-lightbox.js)
 * for single images and galleries: same markup and classes (styled by lightbox-*.css), share menu,
 * zoom (Swiper zoom), fullscreen, UI auto-hide after 3.5s, Esc / click outside to close.
 */

const PATHS = {
  close:
    "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
  share: "M946 383L667 133C642 112 604 129 604 162V292C238 296 71 637 42 812 238 587 363 521 604 517V658C604 692 642 708 667 687L946 442C963 425 963 400 946 383Z",
  zoomIn:
    "M388 383V312C388 283 413 258 442 258 471 258 496 283 496 312V383H567C596 383 621 408 621 437S596 492 567 492H496V562C496 592 471 617 442 617 413 617 388 592 388 562V492H317C288 492 263 467 263 437S288 383 317 383H388ZM654 733C592 779 517 804 438 804 233 804 71 642 71 437S233 71 438 71 804 233 804 437C804 521 779 596 733 654L896 817C917 837 917 871 896 892 875 913 842 913 821 892L654 733ZM438 696C579 696 696 579 696 437S579 179 438 179 179 296 179 437 296 696 438 696Z",
  zoomOut:
    "M750 683L946 879C963 896 963 929 946 946 929 963 896 967 879 946L683 750C617 804 533 833 438 833 221 833 42 654 42 437S221 42 438 42 833 221 833 437C833 529 800 612 750 683ZM296 392H575C600 392 621 412 621 442 621 467 600 487 575 487H296C271 487 250 467 250 442 250 412 271 392 296 392ZM438 737C604 737 738 604 738 437S604 137 438 137 138 271 138 437 271 737 438 737Z",
  expand:
    "M863 583C890 583 914 605 916 632L917 637V863L916 868C914 893 893 914 868 916L863 917H638L632 916C607 914 586 893 584 868L583 863 584 857C586 832 607 811 632 809L638 808H808V637L809 632C811 605 835 583 863 583ZM138 583C165 583 189 605 191 632L192 637V808H363C390 808 414 830 416 857L417 863C417 890 395 914 368 916L363 917H138C110 917 86 895 84 868L83 863V637C83 607 108 583 138 583ZM863 83C890 83 914 105 916 132L917 137V362C917 392 893 417 863 417 835 417 811 395 809 368L808 362V192H638C610 192 586 170 584 143L583 137C583 110 605 86 632 84L638 83H863ZM363 83L368 84C393 86 414 107 416 132L417 137 416 143C414 168 393 189 368 191L363 192H192V362L191 368C189 395 165 417 138 417S86 395 84 368L83 362V137L84 132C86 107 107 86 132 84L138 83H363Z",
  minimize:
    "M363 583C392 583 413 604 417 633L417 637V863C417 892 392 917 363 917 333 917 313 896 308 867L308 863V692H138C108 692 88 671 83 642L83 637C83 608 104 587 133 583L138 583H363ZM638 583C608 583 588 604 583 633L583 637V863C583 892 608 917 638 917 667 917 688 896 692 867L692 863V692H863C892 692 913 671 917 642L917 637C917 608 896 587 867 583L863 583H638ZM363 417C392 417 413 396 417 367L417 362V137C417 108 392 83 363 83 333 83 313 104 308 133L308 137V308H138C108 308 88 329 83 358L83 362C83 392 104 412 133 417L138 417H363ZM638 417C608 417 588 396 583 367L583 362V137C583 108 608 83 638 83 667 83 688 104 692 133L692 137V308H863C892 308 913 329 917 358L917 362C917 392 896 412 867 417L863 417H638Z",
  facebook:
    "M858 42H142C88 42 42 87 42 142V863C42 913 88 958 142 958H421V646H292V500H421V387C421 258 496 192 613 192 667 192 725 200 725 200V325H663C600 325 579 362 579 404V500H721L700 646H583V958H863C917 958 963 913 963 858V142C958 87 913 42 858 42L858 42Z",
  x: "M760.16 93.75h137.89L596.88 437.89 951.17 906.25H673.83L456.45 622.27 208.01 906.25H69.92L391.99 538.09 52.34 93.75H336.72L533.01 353.32 760.16 93.75zM711.72 823.83h76.37L295.12 171.88h-82.03L711.72 823.83z",
  pinterest:
    "M950 496C950 746 746 950 496 950 450 950 404 942 363 929 379 900 408 850 421 808 425 787 450 700 450 700 467 729 508 754 554 754 692 754 792 629 792 471 792 321 671 208 513 208 317 208 213 342 213 483 213 550 250 633 304 658 313 662 317 662 321 654 321 650 329 617 333 604 333 600 333 596 329 592 313 567 296 525 296 487 288 387 367 292 496 292 608 292 688 367 688 475 688 600 625 683 546 683 500 683 467 646 479 600 492 546 517 487 517 450 517 417 500 387 458 387 413 387 375 433 375 496 375 537 388 562 388 562S342 754 333 787C325 825 329 883 333 917 163 854 42 687 42 496 42 246 246 42 496 42S950 246 950 496Z",
  download:
    "M572 42H428C405 42 385 61 385 85V385H228C197 385 180 424 203 447L475 719C489 732 511 732 524 719L797 447C819 424 803 385 771 385H614V85C615 61 595 42 572 42ZM958 915V715C958 691 939 672 915 672H653L565 760C529 796 471 796 435 760L347 672H85C61 672 42 691 42 715V915C42 939 61 958 85 958H915C939 958 958 939 958 915ZM736 873C736 853 720 837 700 837 681 837 665 853 665 873 665 892 681 908 700 908 720 908 736 892 736 873ZM815 837C835 837 851 853 851 873 851 892 835 908 815 908 795 908 779 892 779 873 779 853 795 837 815 837Z",
};

const Icon = ({ d, className, ...rest }: { d: string; className: string } & React.SVGProps<SVGSVGElement>) => (
  <svg className={`e-font-icon-svg ${className}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d={d} />
  </svg>
);

const BODY_CLASSES = ["dialog-body", "dialog-lightbox-body", "dialog-container", "dialog-lightbox-container"];

export type LightboxImage = {
  src: string;
  title: string;
  /** Elementor's data-e-action-hash (used for the share links) */
  actionHash: string;
};

type Props = LightboxImage & {
  children: ReactNode;
};

/** The <a> Elementor prints around a lightbox image, plus the lightbox it opens. */
export default function LightboxLink({ src, title, actionHash, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={src}
        data-elementor-open-lightbox="yes"
        data-elementor-lightbox-title={title}
        data-e-action-hash={actionHash}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {open && <LightboxDialog images={[{ src, title, actionHash }]} onClose={() => setOpen(false)} />}
    </>
  );
}

export function LightboxDialog({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: readonly LightboxImage[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  const [shareMode, setShareMode] = useState(false);
  const [zoomMode, setZoomMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const { src, title, actionHash } = images[activeIndex];
  const isGallery = images.length > 1;
  const shareModeRef = useRef(false);
  shareModeRef.current = shareMode;

  const showUi = useCallback(() => {
    setUiHidden(false);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (!shareModeRef.current) setUiHidden(true);
    }, 3500);
  }, []);

  const close = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    onClose();
  }, [onClose]);

  useEffect(() => {
    const opener = document.activeElement;
    document.body.classList.add(...BODY_CLASSES);
    const swiper = new Swiper(containerRef.current!, {
      modules: [Zoom, Keyboard],
      zoom: true,
      spaceBetween: 100,
      grabCursor: true,
      runCallbacksOnInit: false,
      keyboard: true,
      initialSlide: initialIndex,
      loop: isGallery,
      on: {
        slideChange: (instance) => {
          setActiveIndex(instance.realIndex);
          showUi();
        },
      },
    });
    swiperRef.current = swiper;
    widgetRef.current?.focus();
    showUi();

    const onKey = (e: KeyboardEvent) => {
      showUi();
      if (e.key === "Escape") close();
    };
    const onFs = () => setFullscreen(!!document.fullscreenElement);
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
      window.clearTimeout(hideTimer.current);
      swiper.destroy(true, true);
      document.body.classList.remove(...BODY_CLASSES);
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
    };
  }, [close, initialIndex, isGallery, showUi]);

  const toggleZoom = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (swiper.zoom.scale !== 1) {
      swiper.zoom.out();
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      setZoomMode(false);
    } else {
      swiper.zoom.in();
      swiper.allowSlideNext = false;
      swiper.allowSlidePrev = false;
      setZoomMode(true);
    }
  };

  const toggleShare = () => {
    const swiper = swiperRef.current;
    if (shareMode) swiper?.attachEvents();
    else swiper?.detachEvents();
    setShareMode(!shareMode);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else widgetRef.current?.requestFullscreen?.().catch(() => {});
  };

  // DialogsManager "hide: { onClick: true }" — any click outside .elementor-lightbox-prevent-close closes it.
  const onWidgetClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".elementor-lightbox-prevent-close") || target.closest(".dialog-close-button")) return;
    if (shareMode) {
      toggleShare();
      return;
    }
    close();
  };

  const pageUrl = typeof window !== "undefined" ? location.href.replace(/#.*/, "") + actionHash : "";
  const absSrc = typeof window !== "undefined" ? new URL(src, location.href).href : src;
  const shareLinks = [
    { key: "facebook", label: "Share on Facebook", href: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(pageUrl)}`, d: PATHS.facebook, cls: "e-eicon-facebook" },
    { key: "x-twitter", label: "Share on X", href: `https://x.com/intent/tweet?text= ${encodeURIComponent(pageUrl)}`, d: PATHS.x, cls: "e-eicon-x-twitter" },
    { key: "pinterest", label: "Pin it", href: `https://www.pinterest.com/pin/create/button/?url=&media=${encodeURIComponent(absSrc)}`, d: PATHS.pinterest, cls: "e-eicon-pinterest" },
  ];

  const containerClass = [
    "swiper",
    shareMode && "elementor-slideshow--share-mode",
    zoomMode && "elementor-slideshow--zoom-mode",
    fullscreen && "elementor-slideshow--fullscreen-mode",
    uiHidden && "elementor-slideshow--ui-hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return createPortal(
    <div
      ref={widgetRef}
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-lightbox"
      aria-modal="true"
      role="dialog"
      aria-label={isGallery ? "Project image gallery" : title}
      tabIndex={0}
      id={isGallery ? "elementor-lightbox-slideshow-project" : "elementor-lightbox-slideshow-single-img"}
      style={{ display: "block" }}
      onClick={onWidgetClick}
    >
      <div className="dialog-widget-content dialog-lightbox-widget-content" style={{ top: 0, left: 0 }}>
        <a
          role="button"
          tabIndex={0}
          aria-label="Close (Esc)"
          href="#"
          className="dialog-close-button dialog-lightbox-close-button"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <Icon d={PATHS.close} className="e-eicon-close dialog-close-button-icon" />
        </a>
        <div className="dialog-header dialog-lightbox-header" />
        <div className="dialog-message dialog-lightbox-message animated zoomIn">
          <div ref={containerRef} className={containerClass} onClick={showUi} onMouseMove={showUi} onKeyPress={showUi}>
            <header className="elementor-slideshow__header elementor-lightbox-prevent-close">
              <Icon
                d={PATHS.share}
                className="e-eicon-share-arrow"
                tabIndex={0}
                aria-expanded={shareMode}
                onClick={toggleShare}
              />
              <div className="elementor-slideshow__share-menu">
                {shareMode ? (
                  <div className="elementor-slideshow__share-links">
                    {shareLinks.map((l) => (
                      <a key={l.key} href={l.href} target="_blank" rel="noreferrer">
                        <Icon d={l.d} className={l.cls} />
                        {l.label}
                      </a>
                    ))}
                    <a href={src} download="">
                      <Icon d={PATHS.download} className="e-eicon-download-bold" aria-label="Download" />
                      Download image
                    </a>
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <Icon
                d={PATHS.zoomIn}
                className={`e-eicon-zoom-in-bold${zoomMode ? " elementor-hidden" : ""}`}
                role="switch"
                tabIndex={0}
                aria-checked="false"
                aria-label="Zoom"
                onClick={toggleZoom}
              />
              <Icon
                d={PATHS.zoomOut}
                className={`e-eicon-zoom-out-bold${zoomMode ? "" : " elementor-hidden"}`}
                role="switch"
                tabIndex={0}
                aria-checked={zoomMode ? "true" : "false"}
                aria-label="Zoom"
                onClick={toggleZoom}
              />
              <Icon
                d={PATHS.expand}
                className={`e-eicon-frame-expand${fullscreen ? " elementor-hidden" : ""}`}
                role="switch"
                tabIndex={0}
                aria-checked="false"
                aria-label="Fullscreen"
                onClick={toggleFullscreen}
              />
              <Icon
                d={PATHS.minimize}
                className={`e-eicon-frame-minimize${fullscreen ? "" : " elementor-hidden"}`}
                role="switch"
                tabIndex={0}
                aria-checked={fullscreen ? "true" : "false"}
                aria-label="Fullscreen"
                onClick={toggleFullscreen}
              />
              <span className="elementor-slideshow__counter">{isGallery && `${activeIndex + 1} / ${images.length}`}</span>
            </header>
            <div className="swiper-wrapper">
              {images.map((item, index) => (
                <div key={item.src} className="swiper-slide elementor-lightbox-item" data-e-action-hash={item.actionHash} role="group" aria-label={`${index + 1} / ${images.length}`}>
                  <div className="swiper-zoom-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="elementor-lightbox-image elementor-lightbox-prevent-close" data-title={item.title} alt={item.title} src={item.src} />
                  </div>
                </div>
              ))}
            </div>
            {isGallery && (
              <>
                <button type="button" className="elementor-swiper-button elementor-swiper-button-prev elementor-lightbox-prevent-close" aria-label="Previous image" onClick={() => swiperRef.current?.slidePrev()}>
                  <ChevronLeft />
                </button>
                <button type="button" className="elementor-swiper-button elementor-swiper-button-next elementor-lightbox-prevent-close" aria-label="Next image" onClick={() => swiperRef.current?.slideNext()}>
                  <ChevronRight />
                </button>
              </>
            )}
            <footer className="elementor-slideshow__footer elementor-lightbox-prevent-close">
              <div className="elementor-slideshow__title">{title}</div>
              <div className="elementor-slideshow__description" />
            </footer>
          </div>
        </div>
        <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper" />
      </div>
    </div>,
    document.body,
  );
}
