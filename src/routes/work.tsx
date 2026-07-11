import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — JengaWeb" },
      { name: "description", content: "Browse our portfolio of web design and development projects for fintech, SaaS, e-commerce, and professional services." },
      { property: "og:title", content: "Work — JengaWeb" },
      { property: "og:description", content: "Browse our portfolio of web design and development projects for fintech, SaaS, e-commerce, and professional services." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main className="px-6 pt-40 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Portfolio</span>
            <h1 className="font-display mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Websites that work as hard as you do.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
              A selection of projects where strategy, design, and engineering came together to move the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                year={project.year}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
