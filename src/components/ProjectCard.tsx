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
    <Link to="/work/$slug" params={{ slug }} className="group cursor-pointer">
      <div className="mb-6 aspect-square overflow-hidden rounded-2xl border border-border bg-card">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <span className="text-xs font-medium text-muted-foreground">{year}</span>
      </div>
    </Link>
  );
}
