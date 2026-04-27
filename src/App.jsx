import { useMemo, useState } from "react";
import { ChatDemo } from "./components/ChatDemo";
import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { FeatureCard } from "./components/FeatureCard";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const painPoints = [
  {
    title: "High-intent questions happen after hours",
    description:
      "Botox, laser, filler, and booking questions often come in at night or on weekends, exactly when most teams are unavailable.",
  },
  {
    title: "Manual follow-up creates delay",
    description:
      "Even great front desks cannot respond instantly during treatments, calls, breaks, and peak hours.",
  },
  {
    title: "Slow response lowers booked consults",
    description:
      "If a lead waits until tomorrow, they often keep shopping instead of waiting for your answer.",
  },
];

const solutionCards = [
  {
    eyebrow: "Instant AI replies",
    title: "Answer treatment questions immediately",
    description:
      "Respond to Botox, filler, laser, skincare, pricing, and booking questions in a polished tone that feels aligned with your brand.",
  },
  {
    eyebrow: "Lead capture",
    title: "Collect the details your team needs",
    description:
      "Capture service interest, name, email, phone, urgency, and booking intent before the lead loses momentum.",
  },
  {
    eyebrow: "Booking support",
    title: "Move prospects toward consultations",
    description:
      "Guide interested visitors toward a consultation request without sounding robotic, pushy, or generic.",
  },
];

const proofPoints = [
  { value: "< 60s", label: "Typical first response across website chats and after-hours inquiries" },
  { value: "24/7", label: "Coverage for evenings, weekends, and the hours your team is offline" },
  { value: "More consults", label: "A lead flow built to recover conversations before they disappear" },
];

const workflow = [
  {
    step: "1",
    title: "Lead messages your site after hours",
    description:
      "A prospective patient reaches out while your front desk is closed, unavailable, or tied up.",
  },
  {
    step: "2",
    title: "Revenue After Dark responds instantly",
    description:
      "The first reply happens in minutes while the lead is still engaged and ready to take the next step.",
  },
  {
    step: "3",
    title: "The conversation moves toward booking",
    description:
      "Key details are captured and the lead is guided toward a consultation while intent is still high.",
  },
  {
    step: "4",
    title: "You wake up to scheduled consults",
    description:
      "Your team starts the day with qualified inquiries and a clearer path to follow-up.",
  },
];

const touchpoints = [
  {
    eyebrow: "Website inquiries",
    title: "Catch leads while they are still on your site",
    description:
      "When someone asks about services, timing, or pricing, the reply happens fast enough to keep them engaged instead of bouncing.",
  },
  {
    eyebrow: "Instagram or DM Leads",
    title: "Keep social interest from becoming delayed follow-up",
    description:
      "Direct messages often come after hours. A fast response helps hold attention while interest is still high.",
  },
  {
    eyebrow: "Missed calls",
    title: "Create a better path after the call goes unanswered",
    description:
      "If a prospect cannot reach the front desk right away, you still need a polished next step that keeps them moving toward consultation.",
  },
  {
    eyebrow: "Delayed replies",
    title: "Protect consultation momentum before it fades",
    description:
      "The longer a response takes, the more likely the prospect compares competitors or loses urgency to book.",
  },
];

const testimonials = [
  {
    quote: "Recover after-hours Botox and filler inquiries that would normally wait until morning.",
    name: "Outcome Focus",
    role: "Lead Recovery Use Case",
  },
  {
    quote: "Give the front desk cleaner lead context before they follow up.",
    name: "Outcome Focus",
    role: "Front Desk Support",
  },
  {
    quote: "Move more website and social conversations toward consultation opportunities.",
    name: "Outcome Focus",
    role: "Consultation Momentum",
  },
];

const pricingPlans = [
  {
    eyebrow: "Core Setup",
    title: "Core Setup",
    price: "$1,500",
    priceSuffix: "one-time",
    description: "For med spas that want a simple after-hours lead capture system installed fast.",
    includes: [
      "Custom AI chat tailored to your services",
      "Botox, filler, laser & booking response flows",
      "Lead capture (name, phone, email, service)",
      "Website integration",
      "Consultation-driven response design",
    ],
    supportPrice: "$500/month support",
    supportItems: [
      "Ongoing flow optimization",
      "Response improvements",
      "Monthly performance review",
      "Light troubleshooting",
    ],
    featured: false,
  },
  {
    eyebrow: "Growth Setup",
    title: "Growth Setup",
    price: "$2,500",
    priceSuffix: "one-time",
    description: "For med spas that want a more complete lead recovery flow.",
    includes: [
      "Everything in Core",
      "Advanced conversation flows",
      "CRM or email handoff setup",
      "Booking-focused scripting",
      "Priority customization",
    ],
    supportPrice: "$750/month support",
    supportItems: [
      "Conversion optimization",
      "Monthly tuning & updates",
      "Lead handling improvements",
      "Priority support",
    ],
    featured: true,
  },
];

const faqs = [
  {
    question: "What kinds of inquiries can Revenue After Dark handle?",
    answer:
      "Common med spa lead conversations including Botox, fillers, laser hair removal, skincare, pricing questions, consultation requests, appointment timing, and general booking support.",
  },
  {
    question: "Does it replace our front desk team?",
    answer:
      "No. It supports your front desk by capturing leads when they are busy, closed, or unavailable. Your team still handles the relationship and final booking.",
  },
  {
    question: "Can it connect to our CRM or booking process?",
    answer:
      "Yes. The demo is front-end only, but the system can be connected to your preferred form, CRM, calendar, or follow-up workflow.",
  },
  {
    question: "Is this only for after-hours?",
    answer:
      "No. After-hours is the main leak, but it also helps during treatment blocks, peak call times, weekends, and busy front desk moments.",
  },
];

const heroBullets = [
  "Respond before they drift",
  "Capture consult intent instantly",
  "Turn night inquiries into next-day follow-up",
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/80 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-rose-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_22px_60px_rgba(109,79,93,0.08)] backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  );
}

function WorkflowCard({ step, title, description }) {
  return (
    <div className="rounded-[32px] border border-white/75 bg-white/85 p-6 shadow-[0_24px_70px_rgba(112,84,95,0.08)] backdrop-blur sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
        {step}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function TouchpointCard({ eyebrow, title, description }) {
  return (
    <article className="rounded-[30px] border border-white/75 bg-white/84 p-6 shadow-[0_20px_60px_rgba(103,77,92,0.08)] backdrop-blur sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">{eyebrow}</p>
      <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <article className="rounded-[32px] border border-white/75 bg-white/88 p-7 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">{name}</p>
      <p className="mt-5 text-lg leading-8 text-slate-700">{quote}</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="text-sm font-medium text-slate-500">{role}</p>
      </div>
    </article>
  );
}

function PricingCard({
  eyebrow,
  title,
  price,
  priceSuffix,
  description,
  includes,
  supportPrice,
  supportItems,
  featured,
}) {
  return (
    <article
      className={`rounded-[34px] border p-7 shadow-[0_24px_80px_rgba(102,76,91,0.08)] backdrop-blur sm:p-8 ${
        featured
          ? "border-rose-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(252,242,247,0.92))]"
          : "border-white/80 bg-white/88"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <div className="mt-4 flex items-end gap-2">
        <p className="text-4xl font-semibold tracking-tight text-slate-900">{price}</p>
        <span className="pb-1 text-sm text-slate-500">{priceSuffix}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-8 rounded-[26px] border border-slate-200 bg-slate-50/85 p-5">
        <p className="text-xl font-semibold text-slate-900">{supportPrice}</p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
          {supportItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <PrimaryButton href="#contact" className="w-full sm:w-auto">
          Get Started
        </PrimaryButton>
      </div>
    </article>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(115,91,104,0.06)] transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
    >
      {children}
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/80 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_rgba(74,58,69,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Revenue After Dark</p>
          <p className="truncate text-sm text-slate-600">Turn after-hours leads into booked consults</p>
        </div>
        <PrimaryButton href="#contact" className="shrink-0 px-5 py-3">
          Book a Demo
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState("botox");

  const serviceHighlights = useMemo(
    () => ({
      botox: {
        label: "Botox",
        title: "Turn injectable curiosity into consultation intent",
        body: "Answer timing, maintenance, and next-step questions quickly so the prospect stays engaged and moves toward booking.",
      },
      laser: {
        label: "Laser Hair Removal",
        title: "Keep treatment-comparison shoppers in your pipeline",
        body: "Clarify what to expect, capture treatment interest, and hand your staff a warmer lead before the prospect clicks away.",
      },
      booking: {
        label: "Booking",
        title: "Support the moment when a lead is ready to schedule",
        body: "Help ready-to-book prospects share preferences and contact details so your team can close the loop faster.",
      },
    }),
    []
  );

  const activeHighlight = serviceHighlights[activeService];

  return (
    <div className="relative overflow-hidden bg-[var(--page-bg)] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(251,207,232,0.42),_transparent_34%),linear-gradient(180deg,_rgba(255,248,251,0.98),_rgba(247,242,246,0.76),_rgba(245,246,250,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-52 h-[34rem] bg-[radial-gradient(circle_at_18%_28%,_rgba(244,205,221,0.36),_transparent_28%),radial-gradient(circle_at_82%_8%,_rgba(214,235,242,0.56),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <header className="flex items-center justify-between gap-4 py-5">
          <a href="#top" className="flex items-center gap-3 text-slate-900">
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
            <a href="/after-hours-ai-med-spa" className="transition hover:text-slate-900">
              After-Hours AI
            </a>
            <a href="#problem" className="transition hover:text-slate-900">
              Problem
            </a>
            <a href="#solution" className="transition hover:text-slate-900">
              Solution
            </a>
            <a href="#demo" className="transition hover:text-slate-900">
              Demo
            </a>
            <a href="#faq" className="transition hover:text-slate-900">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </header>

        <main id="top">
          <section className="grid gap-14 py-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <Badge>After-Hours Lead Recovery for Med Spas</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.8rem]">
                Every missed after-hours lead is a booked appointment you lost.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                If someone messages your med spa after hours and doesn’t get a response within minutes, they don’t wait. They book somewhere else.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-600">
                Revenue After Dark responds instantly, captures the lead, and moves them toward a booked consultation while they’re still ready.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
                <SecondaryButton href="#demo">Check your missed lead flow</SecondaryButton>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600">After-hours silence costs bookings every week.</p>
              <p className="mt-2 text-sm text-slate-500">No tech setup. No commitment. Just a quick walkthrough.</p>

              <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 sm:gap-4">
                {heroBullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-[24px] border border-white/80 bg-white/78 px-4 py-4 shadow-[0_16px_40px_rgba(105,78,91,0.05)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <StatCard key={point.label} value={point.value} label={point.label} />
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-slate-600">
                For med spas, fast follow-up often matters more than more traffic.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-rose-100/80 blur-2xl md:block" />
              <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-cyan-100/75 blur-2xl md:block" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Live Lead Snapshot</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                      What a fast response looks like when a lead is ready to book
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                      Fast follow-up helps hold attention, capture intent, and keep the conversation moving toward consultation instead of comparison shopping.
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Online 24/7
                  </div>
                </div>

                <div className="mt-7 rounded-[30px] bg-slate-950 p-5 text-slate-50 sm:p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                    <span>Incoming Website Chat</span>
                    <span>10:47 PM</span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="max-w-[85%] rounded-[22px] rounded-bl-md bg-white/12 px-4 py-3 text-sm leading-6 text-slate-100">
                      Hi, I’m interested in Botox and wanted to know how soon I could get in for a consultation.
                    </div>
                    <div className="ml-auto max-w-[88%] rounded-[22px] rounded-br-md bg-rose-200 px-4 py-3 text-sm leading-6 text-slate-900">
                      Absolutely. We can help with that now. I can gather a few details and help your consultation request move forward right away.
                    </div>
                    <div className="grid gap-3 rounded-[24px] border border-white/10 bg-white/6 p-4 text-sm text-slate-200 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Lead Intent</p>
                        <p className="mt-2 font-medium text-white">High-intent injectable inquiry</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Next Action</p>
                        <p className="mt-2 font-medium text-white">Capture details and guide to consult</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {Object.entries(serviceHighlights).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveService(key)}
                      className={`rounded-[24px] border px-4 py-4 text-left transition ${
                        activeService === key
                          ? "border-rose-200 bg-rose-50 shadow-sm"
                          : "border-slate-200 bg-white/78 hover:border-rose-100 hover:bg-white"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-900">{item.title}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-5 rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(250,245,248,0.88))] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">{activeHighlight.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{activeHighlight.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{activeHighlight.body}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 sm:py-14">
            <div className="rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(249,241,245,0.88),rgba(243,247,249,0.88))] p-8 shadow-[0_24px_70px_rgba(102,76,91,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">The Reality</p>
              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl">
                Most med spas lose 30–50% of after-hours leads.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Not because they’re not interested. Because no one responds fast enough.
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3 sm:gap-4">
                <li className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4">Leads go cold in minutes</li>
                <li className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4">Competitors respond faster</li>
                <li className="rounded-[22px] border border-white/80 bg-white/80 px-4 py-4">The booking goes to whoever replies first</li>
              </ul>
            </div>
          </section>

          <section id="problem" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Problem"
              title="Your best leads often arrive when your front desk is unavailable."
              description="By the time your team follows up the next morning, that prospect may have already compared providers, sent another message, or booked somewhere else."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              If a prospect waits until the next morning, they usually book somewhere else first.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <div className="grid gap-5">
                {painPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[32px] border border-white/80 bg-white/84 p-6 shadow-[0_18px_60px_rgba(106,79,92,0.08)] backdrop-blur sm:p-7"
                  >
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[36px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,239,244,0.9))] p-7 shadow-[0_28px_70px_rgba(104,80,93,0.1)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What Happens Without Instant Response</p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[24px] border border-rose-100 bg-rose-50 p-5">
                    <p className="text-sm font-semibold text-rose-800">11:16 PM</p>
                    <p className="mt-2 text-sm leading-6 text-rose-900">
                      “Hi, do you offer laser hair removal packages?”
                    </p>
                    <p className="mt-3 text-sm leading-6 text-rose-700">No response until the next morning.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-900">By the time staff follows up</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The prospect has already compared providers, messaged a competitor, or lost the urgency to book.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[26px] bg-rose-600 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Conversion Risk</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">Fast intent needs a fast answer.</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    The lead asking the question right now is often closer to booking than the lead you follow up with tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Where Leads Slip Away"
              title="The missed-conversion problem usually starts in the channels med spas rely on most."
              description="Revenue After Dark is designed for the moments where response delays quietly cost consultations, from website chats to DMs and missed calls."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {touchpoints.map((item) => (
                <TouchpointCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id="solution" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Solution"
              title="After-hours lead recovery for med spas."
              description="Revenue After Dark gives your practice a polished first response when your team is busy, closed, or unavailable, so more inquiries become qualified consult opportunities."
            />

            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              The goal is simple: fewer missed conversations, more qualified consults.
            </p>

            <div className="mt-12">
              <SectionHeading
                eyebrow="How It Works"
                title="How it works"
                description="A simple flow built to respond fast and move after-hours interest toward booking."
              />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {solutionCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {workflow.map((item) => (
                <WorkflowCard key={item.step} {...item} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <div className="grid gap-6 rounded-[40px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,247,249,0.88),rgba(251,241,245,0.92))] p-8 shadow-[0_28px_90px_rgba(91,71,86,0.1)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <Badge>Why It Converts Better</Badge>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                  Premium brand feel. Faster response. Stronger booking momentum.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Polished tone</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Responses feel warm and elevated, aligned with a luxury service experience instead of generic chatbot copy.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Lead-ready handoff</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Your staff gets cleaner details, clearer intent, and a better starting point for converting inquiries into appointments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Social Proof"
              title="Built for real front desk pressure."
              description="Designed for med spas handling Botox, fillers, laser, skincare, pricing, and high-intent booking questions."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={`${item.name}-${item.role}`} {...item} />
              ))}
            </div>
          </section>

          <section id="demo" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Chatbot Demo"
              title="See what happens when a lead gets an instant answer."
              description="Click a common med spa question below to see how the system responds, captures information, and keeps the conversation moving toward a consultation."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              This is the exact moment you lose the booking.
            </p>

            <div className="mt-12">
              <ChatDemo />
            </div>
          </section>

          <section id="faq" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions med spas ask before launching."
              description="Keep the buying process simple by answering practical setup and use-case questions right on the page."
            />

            <div className="mt-12 grid gap-4">
              {faqs.map((item, index) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Simple Starter Pricing"
              title="Simple pricing. Built around results."
              description="If this system helps recover even a few missed consultations each month, it pays for itself."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.eyebrow} {...plan} />
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-sm font-medium leading-7 text-slate-600">
              Start simple. If the system helps recover even a few missed consultations, it can pay for itself quickly.
            </p>
          </section>

          <section id="contact" className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Request a Demo"
                  title="Let me show you where your leads are leaking."
                  description="We’ll walk through your current inquiry flow and show where faster response could recover more consultation opportunities."
                />
                <div className="mt-8 rounded-[34px] border border-white/80 bg-white/84 p-6 shadow-[0_22px_70px_rgba(97,74,89,0.08)] sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Best Fit Practices</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>Med spas handling Botox, fillers, laser, skin, and body-service inquiries</li>
                    <li>Teams that want faster after-hours lead response coverage</li>
                    <li>Practices looking to convert more website and social conversations into consults</li>
                  </ul>
                </div>
                <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-slate-900">
                  You don’t need more traffic first. You need to convert more of the people already reaching out.
                </p>
              </div>

              <ContactForm />
            </div>
          </section>

          <section className="py-12 sm:py-16">
            <div className="rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(250,244,247,0.9),rgba(243,247,249,0.88))] p-8 shadow-[0_24px_70px_rgba(102,76,91,0.08)] sm:p-10">
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl">
                You’re already paying for leads.
                <br />
                You’re just not capturing them.
              </h2>
              <div className="mt-8">
                <PrimaryButton href="#contact">Book a Demo</PrimaryButton>
              </div>
            </div>
          </section>
        </main>
      </div>

      <MobileStickyCTA />
    </div>
  );
}
