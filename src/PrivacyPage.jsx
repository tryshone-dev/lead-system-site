import { SiteLogo } from "./components/SiteLogo";
import { usePageSeo } from "./usePageSeo";

const sections = [
  {
    title: "Information we collect",
    body: "The demo-request form collects your name, business name, email address, and any optional phone number or message you provide. The client chatbot demo may collect the messages and sample contact details entered during a conversation. The site also uses basic measurement tools that collect device, browser, page, and interaction information.",
  },
  {
    title: "How we use information",
    body: "We use inquiry details to respond to your request and arrange a Revenue After Dark walkthrough. Chatbot demo data is used to operate the demonstration, preserve its conversation history, and review lead-capture behavior. Site measurement data helps us understand page and demo engagement.",
  },
  {
    title: "Service providers",
    body: "Revenue After Dark uses service providers to host the website and API, store chatbot records, process demo requests, operate the language model, and measure website use. These currently include Vercel, Render, PostgreSQL hosting, OpenAI, Formspree, Microsoft Clarity, and the OpenAI measurement pixel.",
  },
  {
    title: "Retention and choices",
    body: "Revenue After Dark has not published a fixed retention period. Information is retained as needed to operate the service, respond to requests, and maintain business records. You may contact us to ask about, correct, or request deletion of information you submitted, subject to any records we need to retain for legitimate business or legal purposes.",
  },
  {
    title: "Medical and sensitive information",
    body: "The public demo is not a medical provider and is not intended for medical records, diagnosis details, or urgent clinical questions. Do not enter sensitive medical information into the demo. Revenue After Dark does not make a public claim of HIPAA compliance.",
  },
  {
    title: "Contact",
    body: "For privacy questions or requests, call Revenue After Dark at (248) 942-4785 or use the demo-request form on the main website and identify your message as a privacy request.",
  },
];

export default function PrivacyPage() {
  usePageSeo({
    title: "Privacy Notice | Revenue After Dark",
    description: "How Revenue After Dark collects and uses website inquiry and chatbot demonstration information.",
    canonicalPath: "/privacy",
    ogTitle: "Privacy Notice | Revenue After Dark",
    ogDescription: "How Revenue After Dark handles website inquiry and chatbot demonstration information.",
    twitterTitle: "Privacy Notice | Revenue After Dark",
    twitterDescription: "How Revenue After Dark handles website inquiry and chatbot demonstration information.",
  });

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-900">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 py-4">
          <SiteLogo href="/" />
          <a className="text-sm font-medium text-rose-700 hover:text-rose-800" href="/">Back to website</a>
        </header>

        <main className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Privacy Notice</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-slate-950 sm:text-6xl">Your information, explained plainly.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            This notice covers the public Revenue After Dark website, inquiry form, and client chatbot demonstration. Last updated September 6, 2026.
          </p>

          <div className="mt-12 space-y-6">
            {sections.map((section) => (
              <section className="rounded-[28px] border border-white/80 bg-white/88 p-6 shadow-[0_18px_55px_rgba(102,76,91,0.07)] sm:p-8" key={section.title}>
                <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

