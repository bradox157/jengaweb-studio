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
            className="group/card relative w-[320px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card md:w-[380px]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={760}
                height={570}
                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>

            {/* Scrim ensures the glass caption stays legible on bright photos */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Liquid glass caption panel */}
            <div className="absolute inset-x-3 bottom-3 flex items-start justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
              <div>
                <h3 className="font-display text-base font-bold text-white drop-shadow-sm">{project.title}</h3>
                <p className="text-xs text-white/80 drop-shadow-sm">{project.description}</p>
              </div>
              {project.tags?.[0] && (
                <span className="shrink-0 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
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
