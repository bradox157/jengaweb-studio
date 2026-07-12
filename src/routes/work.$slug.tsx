import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — JengaWeb` : "Project — JengaWeb" },
        { name: "description", content: project ? project.description : "Project showcase" },
        { property: "og:title", content: project ? `${project.title} — JengaWeb` : "Project — JengaWeb" },
        { property: "og:description", content: project ? project.description : "Project showcase" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <main className="px-6 pt-40 pb-24">
      <div className="mx-auto max-w-7xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{project.tags.join(" / ")}</span>
        <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{project.description}</p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Visit Live Site
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <img
            src={project.image}
            alt={project.title}
            width={1024}
            height={1024}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Year</h3>
            <p className="mt-2 text-lg">{project.year}</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Services</h3>
            <p className="mt-2 text-lg">{project.tags.join(", ")}</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Client</h3>
            <p className="mt-2 text-lg">{project.title}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
