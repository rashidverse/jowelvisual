"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { LightboxDialog, type LightboxImage } from "./Lightbox";

type GalleryImage = LightboxImage & { width: number; height: number };
type Tile = { width: number; height: number; top: number; left: number };

function getLayout(images: readonly GalleryImage[], width: number, idealHeight: number, gap: number) {
  const ratios = images.map((image) => image.width / image.height);
  const preferredWidths = ratios.map((ratio) => Math.min(width, Math.round(ratio * idealHeight)));
  const tiles: Tile[] = [];
  let top = 0;
  let rowStart = 0;
  let rowWidth = 0;

  function finishRow(end: number, fitWidth: number) {
    const availableWidth = width - (end - rowStart - 1) * gap;
    const height = (preferredWidths[rowStart] / fitWidth) * availableWidth / ratios[rowStart];
    let left = 0;

    for (let index = rowStart; index < end; index++) {
      const tileWidth = preferredWidths[index] / fitWidth * availableWidth;
      tiles.push({ width: tileWidth, height, top, left });
      left += tileWidth + gap;
    }
    rowStart = end;
    top += height + gap;
  }

  preferredWidths.forEach((itemWidth, index) => {
    const nextWidth = rowWidth + itemWidth;
    // Match Elementor's justified rows by choosing the closer fit to the available width.
    if (nextWidth - width > width - rowWidth) {
      finishRow(index, rowWidth);
      rowWidth = 0;
    }
    rowWidth += itemWidth;
  });

  if (rowStart < images.length) {
    finishRow(images.length, rowWidth / width >= 0.7 ? rowWidth : width);
  }
  return { tiles, height: Math.max(0, top - gap) };
}

export default function ProjectGallery({ images }: { images: readonly GalleryImage[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<ReturnType<typeof getLayout>>();
  const [openIndex, setOpenIndex] = useState<number>();
  const close = useCallback(() => setOpenIndex(undefined), []);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const update = () => {
      const width = gallery.getBoundingClientRect().width;
      if (width <= 0) return;
      const viewport = window.innerWidth;
      const idealHeight = viewport <= 1200 ? 150 : viewport <= 1366 ? 880 : 980;
      setLayout(getLayout(images, width, idealHeight, viewport <= 1366 ? 10 : 20));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(gallery, { box: "border-box" });
    return () => observer.disconnect();
  }, [images]);

  useEffect(() => {
    const openSharedImage = () => {
      const index = images.findIndex((image) => image.actionHash === location.hash);
      if (index !== -1) setOpenIndex(index);
    };
    openSharedImage();
    window.addEventListener("hashchange", openSharedImage);
    return () => window.removeEventListener("hashchange", openSharedImage);
  }, [images]);

  return (
    <>
      <div
        ref={galleryRef}
        className={`project-gallery${layout ? " project-gallery--justified" : ""}`}
        style={{ height: layout?.height }}
      >
        {images.map((image, index) => (
          <a
            key={image.src}
            className="project-gallery-image"
            href={image.src}
            style={layout?.tiles[index]}
            aria-label={`Open ${image.title}`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              setOpenIndex(index);
            }}
          >
            <Image src={image.src} alt={image.title} width={image.width} height={image.height} />
          </a>
        ))}
      </div>
      {openIndex !== undefined && <LightboxDialog key={openIndex} images={images} initialIndex={openIndex} onClose={close} />}
    </>
  );
}
