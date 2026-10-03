import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import TechTag from "@/components/techTag";
import { projects } from "@/lib/projects";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project) return { title: "Project not found — Moiz Ali" };
  return {
    title: `${project.title} — Moiz Ali`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project) notFound();

  return (
    <>
      <Navbar name="WORKS" />
      <main className="case-study-page">
        <section className="section-shell pt-12">
          <div className="section-container">
            <Link href="/works" className="back-link"><ArrowLeft size={14} /> Back to selected work</Link>
            <div className="case-study-hero mt-8">
              <div>
                <p className="project-meta">{project.category} / {project.year}</p>
                <h2 className="case-study-title">{project.title}</h2>
                <p className="case-study-lead">{project.description}</p>
              </div>
              <div className="case-study-hero-meta"><span>Role</span><strong>{project.contribution}</strong></div>
            </div>
            <div className="case-study-image mt-12"><Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div>
          </div>
        </section>

        <section className="section-shell border-t border-white/10">
          <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="project-meta">Build notes</p><h2 className="section-title mt-5">A focused product surface with a clear job to do.</h2></div>
            <div>
              <p className="section-copy text-lg">This case study presents the verified portfolio information currently available for the project. It keeps the story focused on the product, the technical surface, and the contribution without inventing results or client claims.</p>
              <div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((technology) => <TechTag key={technology}>{technology}</TechTag>)}</div>
              <div className="mt-10 flex flex-wrap gap-4">
                {project.href ? <Link href={project.href} target="_blank" rel="noreferrer" className="button-primary">Open live project <ArrowUpRight size={16} /></Link> : null}
                <Link href="/contact" className="button-secondary">Discuss a similar build <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
