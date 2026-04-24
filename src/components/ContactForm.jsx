const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdlvye";

export function ContactForm() {
  const submitted =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("submitted") === "true";

  const successRedirect =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?submitted=true#contact`
      : "";

  return (
    <div className="rounded-[36px] border border-white/80 bg-white/90 p-6 shadow-[0_28px_80px_rgba(96,73,88,0.1)] backdrop-blur sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Book a Demo</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">Tell us about your practice</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          We’ll use this information to tailor the walkthrough to your services, lead flow, and booking goals.
        </p>
        <p className="mt-3 text-sm text-slate-500">No tech setup. No commitment. Just a quick walkthrough.</p>
      </div>

      <form className="space-y-5" action={FORMSPREE_ENDPOINT} method="POST">
        <input type="hidden" name="_subject" value="New MedSpa Lead" />
        <input type="hidden" name="_next" value={successRedirect} />

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Jamie Carter"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Med spa or practice</span>
            <input
              type="text"
              name="practice"
              placeholder="Luna Aesthetics"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              required
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              placeholder="jamie@lunaaesthetics.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Main area of interest</span>
            <select
              name="interest"
              defaultValue="Botox and injectables"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            >
              <option>Botox and injectables</option>
              <option>Laser hair removal</option>
              <option>General lead capture</option>
              <option>Booking workflow support</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">What would you like help with?</span>
          <textarea
            name="message"
            rows="5"
            placeholder="We want to respond faster to after-hours inquiries and increase consultation bookings."
            className="mt-2 w-full rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            required
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
          >
            Show me the missed lead flow
          </button>
          <p className="text-sm text-slate-500">Takes 10 minutes. No setup required.</p>
        </div>

        {submitted ? (
          <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
            Thanks. Your demo request has been submitted successfully. This frontend flow is ready to connect to your CRM or backend.
          </div>
        ) : null}
      </form>
    </div>
  );
}
