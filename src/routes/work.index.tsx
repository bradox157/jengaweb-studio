import { createFileRoute } from "@tanstack/react-router";
import { ProjectMarquee } from "@/components/ProjectMarquee";
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
  return (
    <main className="pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Portfolio</span>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Websites that work as hard as you do.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            A selection of real projects across healthcare, e-commerce, marketplaces, and local business — where strategy, design, and engineering came together to move the needle.
          </p>
        </div>
      </div>

      <ProjectMarquee projects={projects} />

      <div className="mx-auto max-w-7xl px-6">
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
