import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — JengaWeb" },
      { name: "description", content: "Simple, transparent pricing for websites that grow your business. Basic, Standard, and Premium packages from JengaWeb." },
      { property: "og:title", content: "Pricing — JengaWeb" },
      { property: "og:description", content: "Simple, transparent pricing for websites that grow your business." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Basic",
    price: "$499",
    tagline: "For a clean, professional first web presence.",
    features: [
      "Single-page website",
      "Mobile-responsive design",
      "Up to 5 sections",
      "Basic contact form",
      "3-day delivery",
      "1 round of revisions",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$1,499",
    tagline: "For growing businesses that need more than one page.",
    features: [
      "Up to 6 custom pages",
      "Custom design system",
      "Basic SEO setup",
      "CMS for easy content edits",
      "7-day delivery",
      "3 rounds of revisions",
      "30 days of post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$3,999",
    tagline: "For ambitious products and full web applications.",
    features: [
      "Unlimited custom pages",
      "Full web app / dashboard build",
      "Advanced animations & interactions",
      "API & third-party integrations",
      "Priority delivery timeline",
      "Unlimited revisions during build",
      "90 days of post-launch support",
      "Direct line to your dev team",
    ],
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Pricing</span>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Simple pricing. No surprises.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
              Pick the package that fits where your business is today. Every tier includes clear communication and a fixed timeline — no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                    tier.highlighted
                      ? "border-primary bg-card shadow-xl shadow-primary/10 md:scale-105"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">{tier.price}</span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <svg
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:hello@jengaweb.design?subject=${encodeURIComponent(`${tier.name} package inquiry`)}`}
                    className={`mt-8 inline-block rounded-lg px-6 py-3.5 text-center font-bold transition-all ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Need something custom? <a href="mailto:hello@jengaweb.design" className="font-bold text-primary hover:underline">Let's talk about your project.</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
