import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BodyClass from "@/components/BodyClass";
import ProjectGallery from "@/components/ProjectGallery";
import { PROJECT_DETAILS } from "@/data/project-details";

import "./project-detail.css";
import "../styles/wp/lightbox-dialog.min.css";
import "../styles/wp/lightbox-custom-lightbox.min.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECT_DETAILS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: PROJECT_DETAILS.find((project) => project.slug === slug)?.title };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = PROJECT_DETAILS.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="content">
      <BodyClass className={`single single-post postid-${project.id} elementor-page-887`} />
      <div className="elementor elementor-887 elementor-location-single" data-elementor-id="887" data-elementor-type="single-post">
        <section className="project-detail-hero" style={{ backgroundImage: `url("${project.image}")` }}>
          <h1>{project.title}</h1>
        </section>
        <section className="project-detail-gallery" aria-label={`${project.title} gallery`}>
          <ProjectGallery images={project.gallery} />
        </section>
      </div>
    </main>
  );
}
