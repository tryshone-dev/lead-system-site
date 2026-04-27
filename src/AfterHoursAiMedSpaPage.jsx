import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const problemPoints = [
  "Late-night Botox questions",
  "Weekend pricing inquiries",
  "After-work consultation requests",
];

const riskPoints = [
  "No response \u2192 they leave",
  "Delayed response \u2192 they lose interest",
  "Next-day follow-up \u2192 they\u2019ve already booked elsewhere",
];

const workflow = [
  "A prospect visits your site after hours",
  "They ask a question about services or pricing",
  "Your AI responds instantly with a polished answer",
  "The conversation guides them toward booking a consult",
];

const benefits = [
  "Capture leads you would normally lose",
  "Increase booked consultations without more traffic",
  "Convert late-night interest into real revenue",
  "Stay competitive in a crowded local market",
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

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/80 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_rgba(74,58,69,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Revenue After Dark</p>
          <p className="truncate text-sm text-slate-600">After-hours AI for med spas</p>
        </div>
        <PrimaryButton href="/#contact" className="shrink-0 px-5 py-3">
          Book a Demo
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function AfterHoursAiMedSpaPage() {
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
                Capturing booked appointments while your competitors are offline.
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
            <a href="/#contact" className="transition hover:text-slate-900">
              Book a Demo
            </a>
          </nav>
        </header>

        <main>
          <section className="grid gap-14 py-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <Badge>After-Hours AI for Med Spas</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.8rem]">
                After-Hours AI for Med Spas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Most med spas lose their highest-intent leads at night.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                When someone asks about Botox, laser, or pricing after 7PM, they&rsquo;re ready. If your team responds the next morning, that lead is already gone.
              </p>
              <p className="mt-6 text-sm font-medium text-rose-700">
                <a href="/" className="transition hover:text-rose-800">
                  See how Revenue After Dark captures those leads instantly
                </a>
              </p>
              <div className="mt-8">
                <PrimaryButton href="/#contact">Book a Demo</PrimaryButton>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Lead Intent Snapshot</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                Ready buyers do not wait for tomorrow.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                After-work shoppers and weekend prospects are often the closest to booking. The page structure stays the same here so the experience matches the main site, while the message stays focused on after-hours recovery.
              </p>
              <div className="mt-6 space-y-4 rounded-[30px] bg-slate-950 p-5 text-slate-50 sm:p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                  <span>After-Hours Inquiry</span>
                  <span>9:14 PM</span>
                </div>
                <div className="max-w-[88%] rounded-[22px] rounded-bl-md bg-white/12 px-4 py-3 text-sm leading-6 text-slate-100">
                  Hi, do you have pricing for Botox and consultations this week?
                </div>
                <div className="ml-auto max-w-[88%] rounded-[22px] rounded-br-md bg-rose-200 px-4 py-3 text-sm leading-6 text-slate-900">
                  Yes. We can help with that right away and guide you toward the best next step while you&rsquo;re still ready to book.
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Problem"
              title="The Problem: Your Best Leads Happen After Hours"
              description="Med spa inquiries don’t follow business hours."
            />

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {problemPoints.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              These are not casual browsers. These are ready buyers.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              But if they don’t get a response within minutes, they move on to the next med spa.
            </p>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Without Coverage"
              title="What Happens Without After-Hours Coverage"
              description="Silence costs bookings every single week."
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {riskPoints.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Solution"
              title="The Solution: After-Hours AI That Responds Instantly"
              description="Revenue After Dark acts as your front desk after hours."
            />

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              It responds immediately, answers common questions, and moves the conversation toward a booked consultation while the lead is still engaged.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              No delays. No missed opportunities.
            </p>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="How It Works"
              title="How It Works"
              description="A simple after-hours flow designed to keep high-intent conversations moving."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item, index) => (
                <StepCard key={item} step={index + 1} text={item} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Benefits"
              title="What This Means for Your Med Spa"
              description="After-hours speed changes what happens to your warmest leads."
            />

            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {benefits.map((item) => (
                <BulletCard key={item}>{item}</BulletCard>
              ))}
            </ul>
          </section>

          <section className="py-12 sm:py-16">
            <div className="rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(250,244,247,0.9),rgba(243,247,249,0.88))] p-8 shadow-[0_24px_70px_rgba(102,76,91,0.08)] sm:p-10">
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl">
                Stop Letting Ready Leads Wait Until Morning
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                After-hours inquiries are often your warmest leads.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                If you’re not responding instantly, someone else is.
              </p>
              <div className="mt-8">
                <PrimaryButton href="/#contact">Book a Demo</PrimaryButton>
              </div>
            </div>
          </section>
        </main>
      </div>

      <MobileStickyCTA />
    </div>
  );
}
