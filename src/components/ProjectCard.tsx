import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
}

export function ProjectCard({ title, description, year, image, slug }: ProjectCardProps) {
  return (
    <Link to="/work/$slug" params={{ slug }} className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Scrim ensures the glass caption stays legible on bright photos */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Liquid glass caption panel */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/10 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
        <div>
          <h3 className="font-display text-lg font-bold text-white drop-shadow-sm">{title}</h3>
          <p className="text-sm text-white/80 drop-shadow-sm">{description}</p>
        </div>
        <span className="shrink-0 text-xs font-medium text-white/70">{year}</span>
      </div>
    </Link>
  );
}
