import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMarquee } from "@/components/ProjectMarquee";
import { Reveal } from "@/components/Reveal";
import { RotatingWord } from "@/components/RotatingWord";
import { Magnetic } from "@/components/Magnetic";
import { LaptopMockup } from "@/components/LaptopMockup";
import { HeroVideoBg } from "@/components/HeroVideoBg";
import { projects } from "@/lib/projects";

const heroWords = ["solid", "scalable", "sharp", "swift"];

const stats = [
  { value: "1hr", label: "Response guarantee" },
  { value: "7-day", label: "Standard delivery" },
  { value: "100%", label: "Project completion" },
  { value: "You own", label: "Code, domain, hosting" },
];

const services = [
  { title: "Custom Website Development", description: "Fast, beautiful marketing sites engineered to convert." },
  { title: "Web Applications", description: "Scalable, secure web platforms built for real workloads." },
  { title: "UI/UX Design", description: "Premium interfaces that turn first impressions into trust." },
  { title: "E-Commerce Solutions", description: "High-converting storefronts with bulletproof checkout." },
  { title: "SEO & Performance", description: "Technical audits and optimization to help you rank and convert." },
  { title: "Maintenance & Support", description: "Ongoing care so your product keeps getting better." },
];

const process = [
  { step: "01", title: "You send us a message", description: "Drop us a line. We reply within the hour — not the next day." },
  { step: "02", title: "We talk through the details", description: "A short call to understand your business, your users, and exactly what needs to be built." },
  { step: "03", title: "You approve the quote", description: "A clear written quote within 24 hours. No vague scope, no hidden charges." },
  { step: "04", title: "We design and build", description: "We ship in tight iterative loops. You see progress, not silence." },
  { step: "05", title: "We launch", description: "Deployment, performance, and a clean handover. You own everything." },
  { step: "06", title: "We stay around", description: "Ongoing support and a direct line to us. If something breaks, we fix it fast." },
];

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
        <section className="relative isolate overflow-hidden px-6 pb-16 pt-40">
          {/* Looping ambient gradient video background */}
          <HeroVideoBg
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3GMM1ZXfFqeRT7y5z9MLauQ1U80/hf_20260711_134859_4e140d76-0d2e-4301-b293-276673b63c67.mp4"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          />
          {/* Fade video to background color toward the bottom so it blends into the rest of the page */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/40 to-background" />

          {/* Ambient animated gradient blobs */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-10 size-[420px] rounded-full bg-primary/20 blur-3xl"
            animate={{ x: [0, 40, -20, 0], y: [0, 30, 60, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-160px] top-40 size-[380px] rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, -30, 20, 0], y: [0, -40, 20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Dot trail accent */}
          <div className="pointer-events-none absolute right-10 top-52 hidden gap-2 lg:flex">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="size-2 rounded-full bg-primary/40"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="font-display flex flex-wrap items-baseline gap-x-3 gap-y-1 text-6xl font-bold leading-[0.9] tracking-tight md:gap-x-5 md:text-8xl">
                {"We build".split(" ").map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="inline-block"
                >
                  <RotatingWord words={heroWords} />
                </motion.span>
                {"foundations for the web.".split(" ").map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24 + i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="mb-10 mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground"
              >
                JengaWeb is a specialized design studio building premium websites and web apps that grow your business — delivered fast, communicated honestly, and built to last.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-wrap gap-4"
              >
                <Magnetic>
                  <Link
                    to="/work"
                    className="inline-block rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/30"
                  >
                    View Portfolio
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Link
                    to="/services"
                    className="inline-block rounded-lg bg-secondary px-8 py-4 font-bold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Our Process
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            <div className="mt-16">
              <LaptopMockup />
            </div>

            {/* Trust stat strip */}
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Marquee */}
        <section id="work" className="bg-secondary/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mb-12 flex items-end justify-between">
              <div className="max-w-md">
                <h2 className="font-display text-4xl font-bold mb-4">Selected Works</h2>
                <p className="text-muted-foreground">
                  A curation of our recent collaborations across fintech, SaaS, and luxury commerce.
                </p>
              </div>
              <Link to="/work" className="group hidden items-center gap-2 font-bold italic text-primary md:flex">
                View All Projects
                <span className="not-italic transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>

          <ProjectMarquee projects={projects} />

          <div className="mt-8 px-6 text-center md:hidden">
            <Link to="/work" className="group inline-flex items-center gap-2 font-bold italic text-primary">
              View All Projects
              <span className="not-italic transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-16 max-w-2xl">
              <h2 className="font-display text-4xl font-bold mb-4">Premium builds. Done to a premium standard.</h2>
              <p className="text-muted-foreground text-lg">
                No cutting corners, no subcontracting. Senior engineers on every project, start to finish.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    <h3 className="font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary/30 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal className="mb-16 max-w-2xl">
              <h2 className="font-display text-4xl font-bold mb-4">From first message to live product in days.</h2>
              <p className="text-muted-foreground text-lg">Not months. Here's exactly how we work.</p>
            </Reveal>

            <div className="space-y-10">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.06}>
                  <div className="flex gap-6 border-b border-border pb-10 last:border-none">
                    <span className="font-display shrink-0 text-3xl font-bold text-primary/30">{item.step}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-6 py-32">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground md:p-24">
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
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
