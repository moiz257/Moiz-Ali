import ProjectShowcase from "@/components/projectShowcase";
import { projects } from "@/lib/projects";

export default function MyWork() {
  return (
    <section className="section-shell pt-12">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="section-copy">A focused archive of product interfaces, platforms, and applied AI work. Each project is represented conservatively using the information available in the existing portfolio.</p>
        </div>
        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => <ProjectShowcase key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
