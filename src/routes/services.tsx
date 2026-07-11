import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JengaWeb" },
      { name: "description", content: "JengaWeb offers strategic web design, full-stack development, and brand systems for ambitious businesses." },
      { property: "og:title", content: "Services — JengaWeb" },
      { property: "og:description", content: "JengaWeb offers strategic web design, full-stack development, and brand systems for ambitious businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Strategic Web Design",
    description: "We design systems, not just pages. Our process ensures visual consistency across every digital touchpoint.",
  },
  {
    title: "Full-Stack Engineering",
    description: "Performant, clean code using modern frameworks to deliver lightning-fast loading and SEO dominance.",
  },
  {
    title: "Brand & Identity Systems",
    description: "From logos to design tokens, we build coherent brand systems that scale across web, print, and product.",
  },
  {
    title: "SEO & Performance",
    description: "Technical audits, content architecture, and performance optimization to help you rank and convert.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main className="px-6 pt-40 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Services</span>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Design, code, and strategy.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
              We partner with ambitious teams to build digital products that look exceptional and perform even better.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="mailto:hello@jengaweb.design"
              className="inline-block rounded-full bg-primary px-12 py-5 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
