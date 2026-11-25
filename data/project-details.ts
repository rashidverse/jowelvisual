import { PROJECTS } from "./site";
import { PROJECT_GALLERIES } from "./project-galleries";

const artisti = PROJECTS.find(({ slug }) => slug === "artisti-10th-floor")!;

// Attachment order and dimensions from the Artisti post's WordPress gallery.
const artistiImages = [
  { number: "2", width: 1800, height: 1500 },
  { number: "18", width: 2000, height: 1126 },
  { number: "17", width: 640, height: 800 },
  { number: "15", width: 1360, height: 1700 },
  { number: "14", width: 1200, height: 1500 },
  { number: "1", width: 1000, height: 1000 },
  { number: "13", width: 1173, height: 1380 },
  { number: "11", width: 1920, height: 1129 },
  { number: "12", width: 1062, height: 1250 },
  { number: "9", width: 1360, height: 1600 },
  { number: "8", width: 1317, height: 1550 },
  { number: "7", width: 1120, height: 1400 },
  { number: "5", width: 1699, height: 2000 },
  { number: "10", width: 2560, height: 1707, scaled: true },
  { number: "4", width: 1699, height: 2000 },
  { number: "16", width: 1196, height: 1495 },
  { number: "6", width: 2000, height: 1333 },
  { number: "3", width: 1560, height: 1200 },
];

export const PROJECT_DETAILS = [
  {
    ...artisti,
    gallery: artistiImages.map(({ number, width, height, scaled }) => ({
      src: `/uploads/2026/01/Artisti-10th-floor-${number}${scaled ? "-scaled" : ""}.webp`,
      title: `${artisti.title}-${number}`,
      actionHash: `#image-${number}`,
      width,
      height,
    })),
  },
  ...PROJECTS.flatMap((project) => {
    const attachments = PROJECT_GALLERIES[project.slug];
    if (!attachments) return [];

    return [{
      ...project,
      gallery: attachments.map(([file, title, width, height, id]) => ({
        src: `/uploads/2026/01/${file}`,
        title,
        actionHash: `#image-${id}`,
        width,
        height,
      })),
    }];
  }),
];
