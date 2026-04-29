import { useEffect } from "react";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const inquiryBullets = [
  "Visitor asks about Botox, filler, laser, or pricing",
  "No one responds while intent is high",
  "They book with another clinic before morning",
];

const workflowBullets = [
  "Instant response while the visitor is still on your site",
  "Name, phone, email, and service interest captured",
  "Your team gets a warmer lead ready for follow-up",
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/80 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-rose-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function BulletCard({ children }) {
  return (
    <li className="rounded-[24px] border border-white/80 bg-white/84 px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_18px_50px_rgba(103,77,92,0.08)] backdrop-blur">
      {children}
    </li>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/80 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_rgba(74,58,69,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Revenue After Dark</p>
          <p className="truncate text-sm text-slate-600">Med spa lead capture for Michigan clinics</p>
        </div>
        <PrimaryButton href="/#contact" className="shrink-0 px-5 py-3">
          Book a Demo
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function MedSpaLeadCaptureMichiganPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = "Med Spa Lead Capture Michigan | After-Hours Inquiry Conversion";

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Capture med spa leads in Michigan before they go cold. Turn after-hours Botox, filler, and laser inquiries into booked consultations."
      );
    }

    return () => {
      document.title = previousTitle;

      if (metaDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[var(--page-bg)] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(251,207,232,0.42),_transparent_34%),linear-gradient(180deg,_rgba(255,248,251,0.98),_rgba(247,242,246,0.76),_rgba(245,246,250,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-52 h-[34rem] bg-[radial-gradient(circle_at_18%_28%,_rgba(244,205,221,0.36),_transparent_28%),radial-gradient(circle_at_82%_8%,_rgba(214,235,242,0.56),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <header className="flex items-center justify-between gap-4 py-5">
          <a href="/" className="flex items-center gap-3 text-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/75 bg-white/85 shadow-sm">
              <span className="font-serif text-2xl leading-none text-rose-700">R</span>
            </div>
            <div>
              <p className="text-base font-semibold tracking-[0.02em]">Revenue After Dark</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Instant website lead response for med spas.
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="/" className="transition hover:text-slate-900">
              Home
            </a>
            <a href="/after-hours-ai-med-spa" className="transition hover:text-slate-900">
              After-Hours AI
            </a>
            <a href="/med-spa-lead-capture-michigan" className="transition hover:text-slate-900">
              Michigan Lead Capture
            </a>
            <a href="/#contact" className="transition hover:text-slate-900">
              Book a Demo
            </a>
          </nav>
        </header>

        <main>
          <section className="grid gap-14 py-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <Badge>MICHIGAN MED SPA LEAD CAPTURE</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.8rem]">
                You’re Losing Ready-to-Book Clients After 5PM
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                When someone asks about Botox, filler, laser, or pricing at night, they are already interested. If no one responds until the next day, they may book somewhere else before your team ever sees the lead.
              </p>
              <div className="mt-8">
                <PrimaryButton href="#section-3">See How It Works</PrimaryButton>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">MICHIGAN OPPORTUNITY</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                The lead is hottest when your office is closed.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Revenue After Dark helps Michigan med spas capture high-intent website visitors before they disappear.
              </p>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="SECTION 1"
              title="Most Med Spa Leads Don’t Wait Until Morning"
              description="Someone asking about pricing at 9PM is not just browsing. They are comparing options, checking availability, and deciding where to book."
            />
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="SECTION 2"
              title="Where After-Hours Leads Get Lost"
              description="This is where local med spa lead generation usually breaks down."
            />

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {inquiryBullets.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section id="section-3" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="SECTION 3"
              title="How Revenue After Dark works"
              description="A simple after-hours response system built to keep high-intent conversations moving toward a booked consultation."
            />

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {workflowBullets.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="SECTION 4"
              title="Built for Michigan med spas"
              description="Designed for clinics in Detroit, Dearborn, West Bloomfield, Novi, Birmingham, Royal Oak, and surrounding areas that want more booked consults from the traffic they already have."
            />

            <div className="mt-8">
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl">
                Stop Letting Ready Clients Wait Until Morning
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                If your website gets after-hours inquiries, those leads should be captured before they go cold.
              </p>
            </div>

            <div className="mt-8">
              <PrimaryButton href="/#contact">Book a Demo</PrimaryButton>
            </div>
          </section>
        </main>
      </div>

      <MobileStickyCTA />
    </div>
  );
}
