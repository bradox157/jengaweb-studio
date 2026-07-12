import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — JengaWeb" },
      { name: "description", content: "Browse our portfolio of web design and development projects for healthcare, e-commerce, marketplaces, and local businesses." },
      { property: "og:title", content: "Work — JengaWeb" },
      { property: "og:description", content: "Browse our portfolio of web design and development projects for healthcare, e-commerce, marketplaces, and local businesses." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.tags.includes(activeCategory));

  return (
    <main className="px-6 pb-24 pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Portfolio</span>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Websites that work as hard as you do.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            A selection of real projects across healthcare, e-commerce, marketplaces, and local business — where strategy, design, and engineering came together to move the needle.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                category === activeCategory
                  ? "rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-colors"
                  : "rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                description={project.description}
                year={project.year}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-24 text-center text-muted-foreground">No projects in this category yet.</p>
        )}

        {/* Closing CTA */}
        <Reveal className="relative mx-auto mt-24 max-w-5xl overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground md:p-20">
          <div className="absolute -right-32 -top-32 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-64 rounded-full bg-black/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Want to be featured here next?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Let's build something you're proud to show off.
            </p>
            <a
              href="mailto:hello@jengaweb.design"
              className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-transform hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
