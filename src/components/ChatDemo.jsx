import { RevenueChatClient } from "./RevenueChatClient";

const starterQuestions = [
  { label: "How much is Botox?", detail: "Approved pricing boundaries" },
  { label: "Do you offer laser hair removal?", detail: "Grounded service information" },
  { label: "Can I book a consultation?", detail: "Lead capture and booking handoff" },
];

export function ChatDemo() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
      <div className="rounded-[34px] border border-white/75 bg-white/86 p-6 shadow-[0_24px_70px_rgba(101,77,92,0.08)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Live product demo</p>
        <h3 className="mt-3 font-serif text-3xl text-slate-950">Try the med spa demo.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">Experience how this assistant could work on your med spa website. Ask about the sample practice's services, pricing, or booking.</p>
        <div className="mt-6 space-y-3">
          {starterQuestions.map((question) => (
            <article className="rounded-[22px] border border-slate-200 bg-white px-4 py-4" key={question.label}>
              <strong className="block text-sm text-slate-900">{question.label}</strong>
              <span className="mt-1 block text-xs leading-5 text-slate-500">{question.detail}</span>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">Demo only, not Revenue After Dark customer support or a real medical practice. Please use sample contact details when trying lead capture.</p>
      </div>
      <RevenueChatClient />
    </div>
  );
}
