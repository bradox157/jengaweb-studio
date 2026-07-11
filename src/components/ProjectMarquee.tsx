import { Link } from "@tanstack/react-router";

interface MarqueeProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

interface ProjectMarqueeProps {
  projects: MarqueeProject[];
}

export function ProjectMarquee({ projects }: ProjectMarqueeProps) {
  // Duplicate the list so the scroll loop is seamless
  const loop = [...projects, ...projects];

  return (
    <div className="group/marquee relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/30 to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/30 to-transparent md:w-32" />

      <div className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused]">
        {loop.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="group/card w-[320px] shrink-0 md:w-[380px]"
          >
            <div className="mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={760}
                height={570}
                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              {project.tags?.[0] && (
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.tags[0]}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
