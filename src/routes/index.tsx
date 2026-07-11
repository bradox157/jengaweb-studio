import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import heroImage from "@/assets/hero-concept.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JengaWeb — Web Design Studio" },
      { name: "description", content: "JengaWeb is a specialized design studio building high-performance digital experiences and websites for ambitious businesses." },
      { property: "og:title", content: "JengaWeb — Web Design Studio" },
      { property: "og:description", content: "JengaWeb is a specialized design studio building high-performance digital experiences and websites for ambitious businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-6 pb-20 pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl">
                We build <span className="text-primary">solid</span> foundations for the web.
              </h1>
              <p className="mb-10 mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground">
                JengaWeb is a specialized design studio creating high-performance digital experiences that scale with your vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  View Portfolio
                </Link>
                <a
                  href="#services"
                  className="rounded-lg bg-secondary px-8 py-4 font-bold text-secondary-foreground transition-colors hover:bg-secondary/80"
                >
                  Our Process
                </a>
              </div>
            </div>

            <div className="mt-20">
              <img
                src={heroImage}
                alt="JengaWeb studio concept — a modern glass building with blue accents"
                width={1440}
                height={608}
                className="h-[500px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="work" className="bg-secondary/30 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between">
              <div className="max-w-md">
                <h2 className="font-display text-4xl font-bold mb-4">Selected Works</h2>
                <p className="text-muted-foreground">
                  A curation of our recent collaborations across fintech, SaaS, and luxury commerce.
                </p>
              </div>
              <div className="mx-12 hidden h-px flex-1 bg-border lg:block" />
              <Link to="/work" className="group flex items-center gap-2 font-bold italic text-primary">
                View All Projects
                <span className="not-italic transition-transform group-hover:translate-x-1">→</span>
              </Link>
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
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-6 py-32">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground md:p-24">
            <div className="absolute -right-32 -top-32 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 size-64 rounded-full bg-black/10 blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                Ready to build your next block?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/80">
                Whether you're starting from zero or scaling to millions, we have the stack to get you there.
              </p>
              <a
                href="mailto:hello@jengaweb.design"
                className="mt-12 inline-block rounded-full bg-white px-12 py-5 text-lg font-bold text-primary transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
