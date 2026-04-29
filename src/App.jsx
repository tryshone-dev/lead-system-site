import { useMemo, useState } from "react";
import { ChatDemo } from "./components/ChatDemo";
import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { FeatureCard } from "./components/FeatureCard";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const painPoints = [
  {
    title: "They ask after hours",
    description:
      "Website visitors land on your service or pricing pages when your team is offline.",
  },
  {
    title: "They wait for a response",
    description:
      "They are deciding whether to stay engaged or keep looking for another med spa.",
  },
  {
    title: "They book somewhere else",
    description:
      "If no one responds quickly, the consultation often goes to a competitor instead.",
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
    title: "A visitor asks about services, pricing, or availability",
    description:
      "They have enough intent to raise their hand instead of leaving your site.",
  },
  {
    step: "2",
    title: "The system responds instantly on the website",
    description:
      "The conversation starts while the visitor is still paying attention.",
  },
  {
    step: "3",
    title: "It captures their name, phone, email, and service interest",
    description:
      "Instead of losing the visitor, your team gets the details needed to follow up.",
  },
  {
    step: "4",
    title: "Your team receives a warmer lead ready for follow-up",
    description:
      "The handoff happens with context while intent is still fresh.",
  },
];

const outcomeComparison = {
  without: [
    "Inquiry comes in after hours",
    "No one responds right away",
    "Lead loses interest or books elsewhere",
  ],
  with: [
    "Inquiry comes in",
    "Website responds instantly",
    "Lead details are captured",
    "Your team follows up with context",
  ],
};

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
      "No. This is focused on website lead capture. It engages visitors who land on your site, collects their information, and helps your team follow up faster. Missed-call text-back can be added later as a separate layer.",
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

function ComparisonCard({ eyebrow, title, items }) {
  return (
    <article className="rounded-[32px] border border-white/80 bg-white/88 p-7 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
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
            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
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
                You’re Losing Ready-to-Book Clients After 5PM
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                When someone asks about Botox, laser, or pricing at night, they are ready to book. If your team responds the next morning, they may have already booked somewhere else.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact">Book a Demo</PrimaryButton>
                <SecondaryButton href="#demo">See It On Your Site</SecondaryButton>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600">After-hours silence is costing you bookings every week.</p>
              <p className="mt-2 text-sm text-slate-500">No setup. No commitment. Just a quick walkthrough to see it on your site.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-rose-100/80 blur-2xl md:block" />
              <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-cyan-100/75 blur-2xl md:block" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">After-Hours Window</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                    The visitor who asks at night is often the one closest to booking.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                    Most visitors asking about pricing, services, or availability after hours are deciding whether to stay engaged or move on.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {proofPoints.map((point) => (
                    <StatCard key={point.label} value={point.value} label={point.label} />
                  ))}
                </div>

                <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 sm:gap-4">
                  {heroBullets.map((item) => (
                    <li
                      key={item}
                      className="rounded-[24px] border border-white/80 bg-white/78 px-4 py-4 shadow-[0_16px_40px_rgba(105,78,91,0.05)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="problem" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Problem"
              title="The Problem: High-Intent Leads Go Cold Fast"
              description="After-hours inquiries are not casual browsing. They are often people ready to compare pricing, check availability, or book a consultation."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              Med spa inquiries do not follow business hours.
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

          <section id="solution" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="How It Works"
              title="How Revenue After Dark Works"
              description="A simple after-hours flow designed to keep high-intent conversations moving."
            />

            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              Revenue After Dark keeps high-intent website visitors engaged before they leave or book somewhere else.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {workflow.map((item) => (
                <WorkflowCard key={item.step} {...item} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Outcome Comparison"
              title="What Changes When You Respond Instantly"
              description="The difference is not more traffic. It is what happens to the interest already landing on your site."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <ComparisonCard
                eyebrow="Without Revenue After Dark"
                title="Without Revenue After Dark"
                items={outcomeComparison.without}
              />
              <ComparisonCard
                eyebrow="With Revenue After Dark"
                title="With Revenue After Dark"
                items={outcomeComparison.with}
              />
            </div>
          </section>

          <section id="demo" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Demo"
              title="See the Lead Flow in Action"
              description="Watch how a high-intent website visitor becomes a captured lead your team can follow up with."
            />

            <div className="mt-12">
              <ChatDemo />
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              This does not replace your phone system. It captures website visitors who may leave without calling, then helps your team follow up faster.
            </p>
          </section>

          <section id="pricing" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="PRICING"
              title="Simple Pricing for After-Hours Lead Response"
              description="Start with website lead capture. Add instant text follow-up when you are ready."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.eyebrow} {...plan} />
              ))}
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
