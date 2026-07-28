import { AiReceptionistWaitlist } from "./components/AiReceptionistWaitlist";
import { ChatDemo } from "./components/ChatDemo";
import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { PrimaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";
import { SiteLogo } from "./components/SiteLogo";

const proofPoints = [
  {
    title: "Instant response",
    description: "Visitors get a reply while they are still on your site, not the next day.",
  },
  {
    title: "Always on",
    description: "Nights, weekends, and after-hours inquiries are handled automatically.",
  },
  {
    title: "More consults",
    description: "Turn late-night questions into real appointments instead of lost leads.",
  },
];

const heroBullets = [
  "Capture revenue while your office is closed",
  "Wake up to qualified consultations",
  "Start every morning with new opportunities",
];

const outcomeCards = [
  {
    title: "Respond",
    description: "Answer website visitors instantly after hours.",
  },
  {
    title: "Capture",
    description: "Collect names, phone numbers, emails, and service interest.",
  },
  {
    title: "Convert",
    description: "Turn high-intent visitors into consultation requests before they leave.",
  },
  {
    title: "Handoff",
    description: "Deliver complete lead information directly to your team the next morning.",
  },
];

const workflow = [
  {
    step: "1",
    title: "A visitor asks about services, pricing, or availability",
    description: "The conversation starts when intent is highest, not the next morning.",
  },
  {
    step: "2",
    title: "Revenue After Dark responds instantly on the website",
    description: "The visitor stays engaged instead of drifting to another med spa.",
  },
  {
    step: "3",
    title: "The system captures contact details and service interest",
    description: "Name, phone, email, and treatment interest are collected automatically.",
  },
  {
    step: "4",
    title: "Your team gets a qualified lead ready for follow-up",
    description: "You wake up to context, conversation history, and new opportunities.",
  },
];

const serviceSpecialties = [
  "Botox consultations",
  "Dermal fillers",
  "Laser treatments",
  "Chemical peels",
  "Microneedling",
  "Membership questions",
  "Pricing inquiries",
  "Appointment requests",
  "Availability questions",
  "General service FAQs",
];

const comparisonCards = [
  {
    generic: "Answers questions.",
    revenue: "Designed to convert visitors into consultations.",
  },
  {
    generic: "Knows general information.",
    revenue: "Learns your treatments, pricing, services, and booking process.",
  },
  {
    generic: "Ends conversations.",
    revenue: "Captures lead information and prepares your team to follow up.",
  },
  {
    generic: "Works for everyone.",
    revenue: "Built specifically for med spas.",
  },
];

const dashboardFields = [
  ["Name", "Olivia Bennett"],
  ["Service", "Botox Consultation"],
  ["Intent", "Pricing Inquiry"],
  ["Captured", "10:43 PM"],
  ["Phone", "Collected"],
  ["Email", "Collected"],
  ["Status", "Ready for Follow-Up"],
];

const dashboardStats = [
  ["Lead Queue", "8 waiting"],
  ["New Leads Today", "14"],
  ["Average Response Time", "< 1 min"],
  ["After-Hours Conversations", "23"],
  ["Qualified Leads", "11"],
  ["Appointments Requested", "6"],
];

const leadQueue = [
  { name: "Olivia Bennett", service: "Botox Consultation", status: "Ready for follow-up" },
  { name: "Maya Carter", service: "Laser Hair Removal", status: "Consult requested" },
  { name: "Ava Thompson", service: "Scheduling Inquiry", status: "Availability check sent" },
];

const implementationSteps = [
  {
    step: "1",
    title: "Book Demo",
    description: "See a personalized walkthrough.",
  },
  {
    step: "2",
    title: "Customize",
    description: "We configure Revenue After Dark for your services, pricing, and workflows.",
  },
  {
    step: "3",
    title: "Launch",
    description: "Install on your website with minimal effort.",
  },
  {
    step: "4",
    title: "Capture",
    description: "Start collecting after-hours leads immediately.",
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
    question: "Does this replace my website?",
    answer:
      "No. Revenue After Dark installs on your existing site and helps your current traffic convert after hours.",
  },
  {
    question: "Does this work with my booking system?",
    answer:
      "Yes. It can hand leads into your booking flow, CRM, calendar, or follow-up process.",
  },
  {
    question: "Can I customize responses?",
    answer:
      "Yes. Responses can be tailored to your services, pricing approach, tone, and conversion goals.",
  },
  {
    question: "Can it answer pricing questions?",
    answer:
      "Yes. It can handle common pricing questions and guide visitors toward the next step when exact pricing depends on treatment area or consultation.",
  },
  {
    question: "What happens if someone asks a medical question?",
    answer:
      "Medical or clinical questions should be routed to your team. Revenue After Dark is built to capture the lead and move the conversation to a safe next step.",
  },
  {
    question: "Can it transfer to a staff member?",
    answer:
      "Yes. Workflows can be configured so urgent or special cases route to the right person or follow-up channel.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most setups move quickly once we have your services, pricing guidance, and lead workflow details.",
  },
  {
    question: "How does my team receive leads?",
    answer:
      "Your team receives captured details, service interest, and conversation context so follow-up starts with clarity.",
  },
  {
    question: "Can I edit the knowledge base?",
    answer:
      "Yes. Your treatments, FAQs, pricing guidance, and policies can be updated as your med spa evolves.",
  },
  {
    question: "Is patient information handled securely?",
    answer:
      "Lead data should be handled with secure workflows and appropriate access controls. Sensitive medical advice still stays with your staff.",
  },
];

const aiReceptionistFeatures = [
  "Answers incoming calls 24/7",
  "Handles common treatment and appointment questions",
  "Qualifies new leads",
  "Books consultations automatically",
  "Sends confirmation and follow-up texts",
  "Notifies your team instantly",
  "Stores call transcripts and lead history",
  "Integrates with the Revenue After Dark dashboard",
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/80 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-rose-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function StatCard({ title, description }) {
  return (
    <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_22px_60px_rgba(109,79,93,0.08)] backdrop-blur">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.4rem]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function OutcomeCard({ title, description }) {
  return (
    <article className="rounded-[30px] border border-white/80 bg-white/86 p-6 shadow-[0_20px_60px_rgba(103,77,92,0.08)] backdrop-blur sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
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

function WhyChooseCard({ generic, revenue }) {
  return (
    <article className="rounded-[32px] border border-white/80 bg-white/88 p-7 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Generic AI Chatbot</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">{generic}</p>
        </div>
        <div className="rounded-[24px] border border-rose-100 bg-rose-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Revenue After Dark</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">{revenue}</p>
        </div>
      </div>
    </article>
  );
}

function DashboardMetricCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/88 p-5 shadow-[0_18px_50px_rgba(103,77,92,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}

function LeadField({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-b-0">
      <dt className="text-sm text-slate-400">{label}</dt>
      <dd className="text-sm font-medium text-white">{value}</dd>
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

function ServiceChip({ children }) {
  return (
    <li className="rounded-full border border-white/80 bg-white/84 px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_16px_40px_rgba(105,78,91,0.05)]">
      {children}
    </li>
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
          <p className="truncate text-sm text-slate-600">Turn nights into booked appointments</p>
        </div>
        <PrimaryButton href="#contact" className="shrink-0 px-5 py-3">
          Book My Demo
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
          <SiteLogo href="#top" />

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="/after-hours-ai-med-spa" className="transition hover:text-slate-900">
              After-Hours AI
            </a>
            <a href="#demo" className="transition hover:text-slate-900">
              Demo
            </a>
            <a href="#how-it-works" className="transition hover:text-slate-900">
              How It Works
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
                Every night potential patients ask about Botox, laser treatments, pricing, and
                appointments. If nobody answers, many schedule somewhere else before your office
                opens. Revenue After Dark responds immediately, captures the lead, and keeps the
                conversation moving.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact">Book a Demo</PrimaryButton>
                <SecondaryButton href="#demo">See It On Your Site</SecondaryButton>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600">
                After-hours silence is costing you bookings every week.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                No setup. No commitment. Just a quick walkthrough to see it on your site.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-rose-100/80 blur-2xl md:block" />
              <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-cyan-100/75 blur-2xl md:block" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white/84 p-6 shadow-[0_30px_100px_rgba(101,76,91,0.12)] backdrop-blur sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
                    After-hours opportunity
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-[1.8rem]">
                    The visitor who asks at night is usually ready to book now.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                    Most after-hours inquiries are high intent. They are deciding whether to book
                    with you or move on.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {proofPoints.map((point) => (
                    <StatCard key={point.title} title={point.title} description={point.description} />
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

          <section id="outcomes" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Business Outcomes"
              title="What Revenue After Dark Delivers"
              description="A simple after-hours revenue system built to keep high-intent website visitors moving toward a consultation."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {outcomeCards.map((card) => (
                <OutcomeCard key={card.title} {...card} />
              ))}
            </div>
          </section>

          <section id="demo" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Interactive Demo"
              title="See the Lead Flow in Action"
              description="Experience how a real after-hours website visitor becomes a captured consultation request your team can follow up with."
            />
            <p className="mt-6 max-w-3xl text-sm font-medium text-slate-600">
              This is the strongest part of the system. Visitors see answers fast, stay engaged,
              and give your team something real to work with by morning.
            </p>

            <div className="mt-12">
              <ChatDemo />
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              This does not replace your phone system. It captures website visitors who may leave
              without calling, then helps your team follow up faster. Turn nights into booked
              appointments and start every morning with new opportunities.
            </p>
          </section>

          <section id="how-it-works" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="How It Works"
              title="How Revenue After Dark Works"
              description="A clean after-hours flow that helps your med spa protect revenue and create more of it."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item) => (
                <WorkflowCard key={item.step} {...item} />
              ))}
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Built Specifically for Med Spas"
              title="Built Specifically for Med Spas"
              description="Revenue After Dark is positioned for Botox, fillers, laser, and consultation-driven treatments, not generic website chat."
            />
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              It is especially relevant for Michigan med spas and aesthetic clinics in Detroit,
              Dearborn, West Bloomfield, Novi, Birmingham, and Royal Oak that want more booked
              consults from the traffic they already have.
              <span> </span>
              <a href="/med-spa-lead-capture-michigan" className="font-medium text-rose-700 transition hover:text-rose-800">
                Explore the Michigan landing page.
              </a>
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {serviceSpecialties.map((item) => (
                <ServiceChip key={item}>{item}</ServiceChip>
              ))}
            </ul>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Why Med Spa Owners Choose Revenue After Dark"
              title="Built to convert, not just answer"
              description="The difference is not more AI. It is better follow-through, better capture, and a system that understands how med spas actually sell."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {comparisonCards.map((card, index) => (
                <WhyChooseCard key={index} generic={card.generic} revenue={card.revenue} />
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-base font-semibold leading-7 text-slate-900">
              Revenue After Dark isn&apos;t another chatbot. It&apos;s an after-hours revenue system
              built specifically for med spas.
            </p>
          </section>

          <section id="dashboard" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Owner View"
              title="What Your Team Receives"
              description="Wake up to qualified consultations, cleaner follow-up, and a clear view of what happened while your office was closed."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[36px] border border-white/80 bg-slate-950 p-6 shadow-[0_28px_90px_rgba(91,66,83,0.12)] sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-200">
                      New Lead Received
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Captured after hours. Ready for follow-up.
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    10:43 PM
                  </div>
                </div>

                <dl className="mt-5">
                  {dashboardFields.map(([label, value]) => (
                    <LeadField key={label} label={label} value={value} />
                  ))}
                </dl>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {dashboardStats.map(([label, value]) => (
                    <DashboardMetricCard key={label} label={label} value={value} />
                  ))}
                </div>

                <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_70px_rgba(102,76,91,0.08)] backdrop-blur sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
                    Lead Queue
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Your team starts the day with contact details, treatment interest, and context
                    already captured.
                  </p>

                  <div className="mt-6 space-y-3">
                    {leadQueue.map((item) => (
                      <QueueRow key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Implementation"
              title="What Happens After You Book"
              description="Short setup. Minimal effort. Faster lead capture as soon as the system is live."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {implementationSteps.map((item) => (
                <WorkflowCard key={item.step} {...item} />
              ))}
            </div>
          </section>

          <section id="pricing" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="PRICING"
              title="Simple Pricing for After-Hours Lead Response"
              description="Start capturing after-hours leads immediately. Upgrade when you are ready to scale."
            />
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              Keep the traffic you already paid for. Capture revenue while your office is closed.
              Start every morning with fresh opportunities instead of dead leads.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.eyebrow} {...plan} />
              ))}
            </div>
          </section>

          <section id="faq" className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions before you launch"
              description="Clear answers for med spa owners who want to know how the system works, what it handles, and what their team receives."
            />

            <div className="mt-12 grid gap-4">
              {faqs.map((item, index) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
              ))}
            </div>
          </section>

          <section className="py-12 sm:py-16">
            <div className="rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,241,245,0.92),rgba(244,247,249,0.9))] p-8 shadow-[0_24px_70px_rgba(102,76,91,0.08)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div>
                  <div className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-rose-700">
                    Coming Soon
                  </div>
                  <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl">
                    24/7 AI Receptionist for Med Spas
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Never miss a lead after hours. Answer calls, qualify prospects, book
                    appointments, and follow up automatically.
                  </p>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {aiReceptionistFeatures.map((item) => (
                      <li
                        key={item}
                        className="rounded-[24px] border border-white/80 bg-white/84 px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_18px_50px_rgba(103,77,92,0.08)] backdrop-blur"
                      >
                        <span className="font-semibold text-rose-700">✓</span>
                        <span className="ml-3">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">
                    Future Revenue After Dark Module:
                    <span> </span>
                    AI Receptionist is currently in development and will integrate directly with
                    lead capture, appointment booking, follow-up automation, and reporting inside
                    the Operator Dashboard.
                  </p>
                </div>

                <AiReceptionistWaitlist />
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Final Step"
                  title="Don’t lose tomorrow’s appointments tonight."
                  description="Book a personalized demo and see Revenue After Dark on your own website."
                />
                <div className="mt-8">
                  <PrimaryButton href="#demo-request">Book My Demo</PrimaryButton>
                </div>
                <div className="mt-8 rounded-[34px] border border-white/80 bg-white/84 p-6 shadow-[0_22px_70px_rgba(97,74,89,0.08)] sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Best Fit Practices
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>Med spas handling Botox, fillers, laser, skin, and body-service inquiries</li>
                    <li>Teams that want to wake up to qualified consultations instead of cold leads</li>
                    <li>Practices looking to turn nights into booked appointments</li>
                  </ul>
                </div>
                <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-slate-900">
                  This solves a real business problem, shows your staff what they receive, and helps
                  you start every morning with more revenue opportunities.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Call or text:{" "}
                  <a href="tel:+19476220143" className="font-medium text-rose-700 transition hover:text-rose-800">
                    (947) 622-0143
                  </a>
                </p>
              </div>

              <div id="demo-request">
                <ContactForm />
              </div>
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

      <MobileStickyCTA />
    </div>
  );
}
