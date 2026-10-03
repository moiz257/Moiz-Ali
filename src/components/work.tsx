import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/sectionHeading";
import ProjectShowcase from "@/components/projectShowcase";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section className="section-shell work-section border-t border-white/10">
      <div className="section-container">
        <div className="work-topline"><span>03 / SELECTED SYSTEMS</span><span>Scroll to inspect <ArrowUpRight size={13} /></span></div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Real products. <span className="text-muted">Useful outcomes.</span></>}
            description="A selection of interfaces, platforms, and AI-enabled products built across healthcare, education, research, and SaaS."
          />
          <Link href="/works" className="button-secondary shrink-0 self-start md:self-end">View all work <ArrowUpRight size={16} /></Link>
        </div>
        <div className="mt-12 grid gap-5">
          {projects.slice(0, 3).map((project, index) => <ProjectShowcase key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
