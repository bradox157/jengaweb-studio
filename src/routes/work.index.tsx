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
    <main className="relative isolate overflow-hidden pb-24 pt-40">
      {/* Higgsfield-generated ambient background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url(https://d8j0ntlcm91z4.cloudfront.net/user_3GMM1ZXfFqeRT7y5z9MLauQ1U80/hf_20260712_203329_a9635c2b-95bf-49d7-a499-01e23aa56774.png)",
        }}
      />
      {/* Fade into the background color so it blends into the marquee below */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/60 to-background" />

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
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/254700206558?text=Hi%20JengaWeb%2C%20I%27d%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-transform hover:scale-105"
              >
                Chat on WhatsApp
              </a>
              <a href="tel:+254700206558" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground">
                or call us: 0700 206 558
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
