import { useMemo, useState } from "react";
import { ChatDemo } from "./components/ChatDemo";
import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { FeatureCard } from "./components/FeatureCard";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const painPoints = [
  {
    title: "Late-night Botox questions",
    description:
      "These visitors are often ready to book and looking for a reason to stay on your site.",
  },
  {
    title: "Weekend pricing inquiries",
    description:
      "If they do not get a response within minutes, they start looking somewhere else.",
  },
  {
    title: "After-work consultation requests",
    description:
      "By the next morning, the lead may already be gone.",
  },
];

const solutionCards = [
  {
    eyebrow: "Lost lead prevention",
    title: "Respond before the lead goes somewhere else",
    description:
      "Keep high-intent website visitors engaged before they leave your site or book somewhere else.",
  },
  {
    eyebrow: "Lead capture",
    title: "Capture the lead before they leave your site",
    description:
      "Collect contact details while the visitor is still engaged enough to submit interest.",
  },
  {
    eyebrow: "Booking support",
    title: "Turn interest into booked consultations",
    description:
      "Keep the conversation moving before the lead goes cold or books somewhere else.",
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
    title: "A potential patient visits your site after hours",
    description:
      "They are interested enough to ask a question instead of leaving right away.",
  },
  {
    step: "2",
    title: "They ask about services, pricing, or availability",
    description:
      "The visitor is deciding whether to stay engaged or move on to another med spa.",
  },
  {
    step: "3",
    title: "Revenue After Dark responds before they leave",
    description:
      "The reply helps hold attention before the lead goes cold or books somewhere else.",
  },
  {
    step: "4",
    title: "Your team receives a captured lead ready for follow-up",
    description:
      "The lead is already captured so your team can follow up while interest is still high.",
  },
];

const touchpoints = [
  {
    eyebrow: "Website inquiries",
    title: "Catch leads while they are still on your site",
    description:
      "When someone asks about services, timing, or pricing, the response gives them a reason to stay engaged.",
  },
  {
    eyebrow: "Service pages",
    title: "Capture treatment interest while visitors are still browsing",
    description:
      "When someone compares Botox, filler, laser, or skincare options on your site, the right response keeps them from drifting away.",
  },
  {
    eyebrow: "Pricing questions",
    title: "Keep pricing interest from turning into a lost lead",
    description:
      "Visitors asking about cost or timing are often closest to booking. If no one responds, they usually keep shopping.",
  },
  {
    eyebrow: "Follow-up speed",
    title: "Help your team follow up before the lead goes cold",
    description:
      "Once contact information is captured, your team has a better chance of reaching out while intent is still high.",
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
    eyebrow: "Starter",
    title: "Starter",
    price: "$497 setup",
    priceSuffix: "",
    description: "",
    includes: [
      "Website lead capture",
      "Service and pricing inquiry flow",
      "Lead details sent to your team",
      "Basic consultation request flow",
    ],
    supportPrice: "+ $197/month",
    supportItems: [],
    ctaLabel: "Start with Starter",
    featured: false,
  },
  {
    eyebrow: "Growth",
    title: "Growth",
    price: "$997 setup",
    priceSuffix: "",
    description: "",
    includes: [
      "Everything in Starter",
      "Instant text follow-up layer",
      "Lead handoff workflow",
      "Higher-intent booking prompts",
    ],
    supportPrice: "+ $397/month",
    supportItems: [],
    ctaLabel: "Start with Growth",
    featured: true,
  },
  {
    eyebrow: "Full Response System",
    title: "Full Response System",
    price: "Custom",
    priceSuffix: "",
    description: "",
    includes: [
      "Website capture",
      "Instant text follow-up",
      "CRM or inbox routing",
      "Missed-call recovery can be added later",
    ],
    supportPrice: "For offices that want full coverage",
    supportItems: [],
    ctaLabel: "Talk Through Options",
    featured: false,
  },
];

const faqs = [
  {
    question: "What kinds of inquiries can Revenue After Dark handle?",
    answer:
      "Common med spa lead conversations including Botox, fillers, laser hair removal, skincare, pricing questions, consultation requests, appointment timing, and general booking support.",
  },
  {
    question: "Does this handle missed phone calls?",
    answer:
      "No. This is focused on website lead capture. It helps engage visitors who land on your site, collect their info, and keep the conversation moving. Missed-call text-back can be added later as a separate layer.",
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
  ctaLabel,
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
        {priceSuffix ? <span className="pb-1 text-sm text-slate-500">{priceSuffix}</span> : null}
      </div>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p> : null}

      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {supportPrice || supportItems.length ? (
        <div className="mt-8 rounded-[26px] border border-slate-200 bg-slate-50/85 p-5">
          {supportPrice ? <p className="text-xl font-semibold text-slate-900">{supportPrice}</p> : null}
          {supportItems.length ? (
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {supportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8">
        <PrimaryButton href="#contact" className="w-full sm:w-auto">
          {ctaLabel || "Get Started"}
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
          <p className="truncate text-sm text-slate-600">Capture website leads before they leave</p>
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
        body: "Help ready-to-book prospects share preferences and contact details before they give up or go elsewhere.",
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
                Instant website lead response for med spas.
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
              <Badge>After-Hours AI for Med Spas</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.8rem]">
                After-Hours AI for Med Spas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Most med spas lose their highest-intent website leads at night. When someone asks about Botox, laser, or pricing after hours, they are ready.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-600">
                If your team responds the next morning, that lead may already be gone.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact">Book a Demo</PrimaryButton>
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
                      What lead recovery looks like when a visitor is about to leave
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                      The goal is to keep the visitor engaged before they go cold or book somewhere else.
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
              title="The Problem: Your Best Website Leads Happen After Hours"
              description="Med spa inquiries do not follow business hours."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              These are not casual browsers. These are ready buyers. If they do not get a response within minutes, they move to another med spa.
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
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What Happens Without After-Hours Coverage</p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[24px] border border-rose-100 bg-rose-50 p-5">
                    <p className="text-sm font-semibold text-rose-800">No response → they leave</p>
                    <p className="mt-2 text-sm leading-6 text-rose-900">The visitor leaves your site without submitting anything.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-900">Delayed response → they lose interest</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The longer the wait, the easier it is for the lead to drift away.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[26px] bg-rose-600 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Every missed response can become a lost booking.</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">Next-day follow-up → they may have already booked elsewhere</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    By the time your team replies, the consultation may already belong to another med spa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Where Leads Slip Away"
              title="The missed-conversion problem usually starts in the channels med spas rely on most."
              description="Revenue After Dark is designed for the moments where website response delays quietly cost consultations."
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
              title="After-Hours Coverage That Stops Lead Loss"
              description="Revenue After Dark keeps high-intent website visitors engaged before they leave or book somewhere else."
            />

            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              It responds on the website, captures contact details, and moves the conversation toward a consultation request while intent is still high.
            </p>

            <div className="mt-12">
              <SectionHeading
                eyebrow="How It Works"
                title="How It Works"
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
                <Badge>Benefits</Badge>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                  What This Means for Your Med Spa
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  After-hours speed changes what happens to your warmest leads.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Capture leads you would normally lose</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Stop letting interested website visitors disappear before your team even sees them.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Increase booked consultations without more traffic</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Get more from the visitors already landing on your site instead of paying for more clicks.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Turn late-night interest into real revenue</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    When interest shows up after hours, you still have a chance to capture it before it fades.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/80 bg-white/84 p-6">
                  <p className="text-lg font-semibold text-slate-900">Stay competitive in a crowded local market</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    If you are not responding, another med spa will.
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
              description="See how fast response turns a high-intent website visitor into a captured lead your team can follow up with."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              This is the exact moment you lose the booking.
            </p>

            <div className="mt-12">
              <ChatDemo />
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              This does not replace your phone system. It captures website visitors who may leave without calling, then helps your team follow up faster.
            </p>
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
              eyebrow="PRICING"
              title="Simple pricing for after-hours lead response"
              description="Start with website lead capture. Add instant text follow-up when you are ready."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.eyebrow} {...plan} />
              ))}
            </div>
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
                Stop Letting Ready Leads Wait Until Morning
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                If you are not responding in minutes, someone else is.
              </p>
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
