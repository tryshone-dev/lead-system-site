import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { ChatDemo } from "./components/ChatDemo";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";
import { SiteLogo } from "./components/SiteLogo";
import { usePageSeo } from "./usePageSeo";

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

function StepCard({ step, text }) {
  return (
    <div className="rounded-[32px] border border-white/75 bg-white/85 p-6 shadow-[0_24px_70px_rgba(112,84,95,0.08)] backdrop-blur sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
        {step}
      </div>
      <p className="mt-5 text-base leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function SnapshotRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className="max-w-[14rem] text-right font-medium text-slate-900">{value}</dd>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/88 p-5 shadow-[0_18px_50px_rgba(103,77,92,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}

function QueueRow({ name, service, status }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[22px] border border-slate-200 bg-white/88 px-4 py-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="mt-1 text-sm text-slate-600">{service}</p>
      </div>
      <p className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">{status}</p>
    </div>
  );
}

function MobileStickyCTA({ label }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/80 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_rgba(74,58,69,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Revenue After Dark</p>
          <p className="truncate text-sm text-slate-600">After-hours AI built specifically for med spas</p>
        </div>
        <PrimaryButton href="#contact" className="shrink-0 px-5 py-3">
          {label}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function TargetedLandingPage({ config }) {
  usePageSeo({
    title: config.seo.title,
    description: config.seo.description,
    canonicalPath: config.path,
    ogTitle: config.seo.title,
    ogDescription: config.seo.description,
    twitterTitle: config.seo.title,
    twitterDescription: config.seo.description,
    schema: config.seo.schema,
  });

  return (
    <div className="relative overflow-hidden bg-[var(--page-bg)] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(251,207,232,0.42),_transparent_34%),linear-gradient(180deg,_rgba(255,248,251,0.98),_rgba(247,242,246,0.76),_rgba(245,246,250,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-52 h-[34rem] bg-[radial-gradient(circle_at_18%_28%,_rgba(244,205,221,0.36),_transparent_28%),radial-gradient(circle_at_82%_8%,_rgba(214,235,242,0.56),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <header className="flex items-center justify-between gap-4 py-5">
          <SiteLogo href="/" />

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="/" className="transition hover:text-slate-900">
              Home
            </a>
            <a href="#problem" className="transition hover:text-slate-900">
              Problem
            </a>
            <a href="#demo" className="transition hover:text-slate-900">
              Demo
            </a>
            <a href="#results" className="transition hover:text-slate-900">
              Results
            </a>
            <a href="#faq" className="transition hover:text-slate-900">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Book a Demo
            </a>
          </nav>
        </header>

        <main>
          <section className="grid gap-14 py-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <Badge>{config.hero.eyebrow}</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.8rem]">
                {config.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {config.hero.description}
              </p>
              <div className="mt-8">
                <PrimaryButton href="#contact">{config.hero.ctaLabel}</PrimaryButton>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
                {config.hero.panelEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                {config.hero.panelTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{config.hero.panelDescription}</p>

              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {config.hero.panelBullets.map((item) => (
                  <BulletCard key={item}>{item}</BulletCard>
                ))}
              </ul>
            </div>
          </section>

          <section id="problem" className="py-16 sm:py-20">
            <SectionHeading eyebrow="Problem" title={config.problem.title} description={config.problem.description} />
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {config.problem.cards.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section id="solution" className="py-16 sm:py-20">
            <SectionHeading eyebrow="Solution" title={config.solution.title} description={config.solution.description} />
            <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {config.solution.cards.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section id="demo" className="py-16 sm:py-20">
            <SectionHeading eyebrow="Interactive Demo" title={config.demo.title} description={config.demo.description} />
            {config.demo.examples ? (
              <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {config.demo.examples.map((item) => (
                  <BulletCard key={item}>{item}</BulletCard>
                ))}
              </ul>
            ) : null}

            <div className="mt-12">
              <ChatDemo />
            </div>
          </section>

          <section id="results" className="py-16 sm:py-20">
            <SectionHeading eyebrow="Results" title={config.results.title} description={config.results.description} />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-6">
              {config.results.steps.map((item, index) => (
                <StepCard key={item} step={index + 1} text={item} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="What Your Team Receives"
              title={config.team.title}
              description={config.team.description}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Lead Snapshot</p>
                <dl className="mt-6 space-y-3 text-sm">
                  {config.team.snapshot.map(([label, value]) => (
                    <SnapshotRow key={label} label={label} value={value} />
                  ))}
                </dl>
              </div>

              <div className="grid gap-6">
                {config.team.metrics ? (
                  <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur sm:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Owner View</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {config.team.metrics.map(([label, value]) => (
                        <MetricCard key={label} label={label} value={value} />
                      ))}
                    </div>
                  </div>
                ) : null}

                {config.team.queue ? (
                  <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur sm:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Lead Queue</p>
                    <div className="mt-6 space-y-3">
                      {config.team.queue.map((item) => (
                        <QueueRow key={item.name} {...item} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading eyebrow="How It Works" title={config.how.title} description={config.how.description} />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
              {config.how.steps.map((item, index) => (
                <StepCard key={item} step={index + 1} text={item} />
              ))}
            </div>
          </section>

          <section id="contact" className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionHeading eyebrow="CTA" title={config.cta.title} description={config.cta.description} />
                <div className="mt-8">
                  <PrimaryButton href="#demo-request">{config.cta.buttonLabel}</PrimaryButton>
                </div>
                <div className="mt-8 rounded-[34px] border border-white/80 bg-white/84 p-6 shadow-[0_22px_70px_rgba(97,74,89,0.08)] sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Best Fit</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>Med spas handling consultation-driven service inquiries</li>
                    <li>Teams that want more structured after-hours lead capture</li>
                    <li>Practices looking to turn website traffic into booked consultations</li>
                  </ul>
                </div>
              </div>

              <div id="demo-request">
                <ContactForm />
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Short answers for the practical questions med spa owners ask before they book a demo."
            />

            <div className="mt-12 grid gap-4">
              {config.faqs.map((item, index) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
              ))}
            </div>
          </section>
        </main>

        <footer className="pb-8 pt-4 text-sm text-slate-500">
          <p>
            Call or text:{" "}
            <a href="tel:+19476220143" className="font-medium text-rose-700 transition hover:text-rose-800">
              (947) 622-0143
            </a>
          </p>
        </footer>
      </div>

      <MobileStickyCTA label={config.cta.buttonLabel} />
    </div>
  );
}
