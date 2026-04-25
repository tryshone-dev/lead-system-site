import { useState } from "react";

const demoFlows = [
  {
    id: "botox-pricing",
    buttonLabel: "How much is Botox?",
    helperText: "Pricing conversation with lead capture",
    lead: {
      service: "Botox consultation",
      intent: "Pricing inquiry",
      name: "Olivia Bennett",
      email: "olivia@example.com",
      phone: "(555) 214-9088",
    },
    messages: [
      {
        role: "prospect",
        text: "How much is Botox?",
      },
      {
        role: "assistant",
        text: "Botox pricing can vary based on the treatment area and the number of units needed, so the best next step is a quick consultation. I can help you get pricing and availability started right now. What name should I put on your request?",
      },
      {
        role: "prospect",
        text: "Olivia Bennett",
      },
      {
        role: "assistant",
        text: "Perfect, Olivia. What is the best email and phone number for your consultation request so our team can send pricing details and the soonest openings?",
      },
      {
        role: "prospect",
        text: "olivia@example.com and (555) 214-9088",
      },
      {
        role: "assistant",
        text: "Thank you. I’ve noted your Botox interest and contact details. The next step is to request your consultation so we can confirm pricing, treatment recommendations, and appointment options.",
      },
    ],
    ctaLabel: "Request Botox Consultation",
  },
  {
    id: "laser-hair-removal",
    buttonLabel: "Do you offer laser hair removal?",
    helperText: "Treatment availability and booking support",
    lead: {
      service: "Laser hair removal",
      intent: "Qualified service inquiry",
      name: "Maya Carter",
      email: "maya@example.com",
      phone: "(555) 672-1140",
    },
    messages: [
      {
        role: "prospect",
        text: "Do you offer laser hair removal?",
      },
      {
        role: "assistant",
        text: "Yes, we do. We can help with laser hair removal consultations and answer questions about treatment areas, sessions, and next steps. To make sure the team follows up well, what is your name?",
      },
      {
        role: "prospect",
        text: "Maya Carter",
      },
      {
        role: "assistant",
        text: "Lovely to meet you, Maya. What is the best email and phone number for your consultation request? Once we have that, we can help you move toward availability and package details.",
      },
      {
        role: "prospect",
        text: "maya@example.com and (555) 672-1140",
      },
      {
        role: "assistant",
        text: "Perfect. I’ve captured your details for laser hair removal. The best next step is to request your consultation so the team can review treatment areas, pricing, and the soonest openings.",
      },
    ],
    ctaLabel: "Book Laser Consultation",
  },
  {
    id: "book-this-week",
    buttonLabel: "Can I book for this week?",
    helperText: "High-intent booking conversation",
    lead: {
      service: "Consultation booking",
      intent: "Ready to schedule",
      name: "Ava Thompson",
      email: "ava@example.com",
      phone: "(555) 390-2231",
    },
    messages: [
      {
        role: "prospect",
        text: "Can I book for this week?",
      },
      {
        role: "assistant",
        text: "We’d be happy to help with that. I can collect your details now so our team can match you with the soonest consultation options. What name should I add to your request?",
      },
      {
        role: "prospect",
        text: "Ava Thompson",
      },
      {
        role: "assistant",
        text: "Thanks, Ava. What is the best email and phone number for your booking request? I’ll make sure the team knows you are looking for something this week.",
      },
      {
        role: "prospect",
        text: "ava@example.com and (555) 390-2231",
      },
      {
        role: "assistant",
        text: "Amazing. I’ve captured your booking details and marked this as a high-intent request. Tap the button below to move forward with your consultation request.",
      },
    ],
    ctaLabel: "Book This Week",
  },
];

function ChatBubble({ role, text }) {
  const isAssistant = role === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[92%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[80%] ${
          isAssistant
            ? "rounded-br-md bg-rose-200 text-slate-900"
            : "rounded-bl-md bg-white/12 text-slate-100"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function SnapshotRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className="max-w-[13rem] text-right font-medium text-slate-900">{value}</dd>
    </div>
  );
}

export function ChatDemo() {
  const [activeFlowId, setActiveFlowId] = useState(demoFlows[0].id);

  const activeFlow = demoFlows.find((flow) => flow.id === activeFlowId) ?? demoFlows[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
      <div className="rounded-[34px] border border-white/75 bg-white/86 p-6 shadow-[0_24px_70px_rgba(101,77,92,0.08)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Lead-loss preview</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Click a common med spa question below to see how fast response keeps a high-intent prospect from drifting to another provider.
        </p>

        <div className="mt-5 space-y-3">
          {demoFlows.map((flow) => (
            <button
              key={flow.id}
              type="button"
              onClick={() => setActiveFlowId(flow.id)}
              className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                activeFlowId === flow.id
                  ? "border-rose-200 bg-rose-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-rose-100 hover:bg-rose-50/40"
              }`}
            >
              <p className="text-base font-semibold text-slate-900">{flow.buttonLabel}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{flow.helperText}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[26px] border border-slate-200 bg-slate-50/90 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Captured Lead Snapshot</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This is what a fast, polished first response looks like when a lead is ready to book.
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <SnapshotRow label="Service" value={activeFlow.lead.service} />
            <SnapshotRow label="Intent" value={activeFlow.lead.intent} />
            <SnapshotRow label="Name" value={activeFlow.lead.name} />
            <SnapshotRow label="Email" value={activeFlow.lead.email} />
            <SnapshotRow label="Phone" value={activeFlow.lead.phone} />
          </dl>
        </div>
      </div>

      <div className="overflow-hidden rounded-[36px] border border-white/75 bg-slate-950 p-5 shadow-[0_28px_90px_rgba(91,66,83,0.12)] sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-200">Revenue After Dark Demo</p>
            <p className="mt-1 text-sm text-slate-400">Front-end chatbot preview for your website</p>
          </div>
          <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            Conversion-ready
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {activeFlow.messages.map((message, index) => (
            <ChatBubble key={`${activeFlow.id}-${index}`} {...message} />
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Booking CTA</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            After capturing the lead, the bot closes with a clear next step so the visitor knows exactly how to move forward.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-rose-200 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition hover:bg-rose-100"
          >
            {activeFlow.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
