import { useState } from "react";
import {
  buildInquiryPayload,
  emptyInquiryForm,
  getInquiryErrors,
  validateInquiryField,
} from "../utils/inquiryForm";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdlvye";

export function ContactForm() {
  const [form, setForm] = useState(emptyInquiryForm);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasVisibleErrors = Object.values(errors).some(Boolean);

  function handleChange(event) {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);

    if (touched[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateInquiryField(name, value),
      }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({
      ...current,
      [name]: validateInquiryField(name, value),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors = getInquiryErrors(form);
    setErrors(nextErrors);
    setTouched({
      name: true,
      business: true,
      email: true,
    });

    const isValid = !Object.values(nextErrors).some(Boolean);
    if (!isValid) {
      setSuccessMessage("");
      setSubmitError("");
      return;
    }

    setSuccessMessage("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(buildInquiryPayload(form, window.location)),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      if (typeof window !== "undefined" && typeof window.oaiq === "function") {
        window.oaiq("measure", "lead_created", {
          type: "customer_action",
        });
      }

      if (typeof window !== "undefined" && typeof window.clarity === "function") {
        window.clarity("event", "demo_request_submitted");
      }

      setSuccessMessage("Your demo request was received. We’ll contact you to arrange the walkthrough.");
      setForm(emptyInquiryForm);
      setTouched({});
      setErrors({});
    } catch {
      setSubmitError("Something went wrong sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldClass(name) {
    const hasError = Boolean(errors[name] && touched[name]);
    return `mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
      hasError
        ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
        : "border-slate-200 focus:border-rose-300 focus:ring-rose-100"
    }`;
  }

  function FieldError({ name }) {
    if (!(touched[name] && errors[name])) {
      return null;
    }

    return <p className="mt-2 text-sm text-rose-700">{errors[name]}</p>;
  }

  return (
    <div className="rounded-[36px] border border-white/80 bg-white/90 p-6 shadow-[0_28px_80px_rgba(96,73,88,0.1)] backdrop-blur sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Request a Demo</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">Tell us about your practice</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          We’ll use this information to tailor the walkthrough to your services, lead flow, and booking goals.
        </p>
        <p className="mt-3 text-sm text-slate-500">Submit the request and we’ll contact you to arrange the walkthrough.</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Name <span className="text-rose-700">Required</span></span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Jamie Carter"
              className={fieldClass("name")}
              aria-invalid={Boolean(touched.name && errors.name)}
              required
            />
            <FieldError name="name" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Med spa or practice <span className="text-rose-700">Required</span></span>
            <input
              type="text"
              name="business"
              value={form.business}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Luna Aesthetics"
              className={fieldClass("business")}
              aria-invalid={Boolean(touched.business && errors.business)}
              required
            />
            <FieldError name="business" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email <span className="text-rose-700">Required</span></span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="jamie@lunaaesthetics.com"
              className={fieldClass("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
              required
            />
            <FieldError name="email" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Phone <span className="text-slate-400">Optional</span></span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(248) 942-4785"
              className={fieldClass("phone")}
              aria-invalid={Boolean(touched.phone && errors.phone)}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Main area of interest <span className="text-slate-400">Optional</span></span>
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
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
          <span className="text-sm font-medium text-slate-700">What would you like help with? <span className="text-slate-400">Optional</span></span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            placeholder="We want to respond faster to after-hours inquiries and increase consultation bookings."
            className={`${fieldClass("message")} rounded-[24px]`}
            aria-invalid={Boolean(touched.message && errors.message)}
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
          >
            {isSubmitting ? "Sending request..." : "Request My Demo"}
          </button>
          <p className="text-sm text-slate-500">The personalized walkthrough takes about 10 minutes.</p>
        </div>

        {hasVisibleErrors ? (
          <div className="rounded-[22px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-800">
            Please fix the highlighted fields before submitting.
          </div>
        ) : null}

        {submitError ? (
          <div className="rounded-[24px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-800">
            {submitError}
          </div>
        ) : null}

        {successMessage ? (
          <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
            {successMessage}
          </div>
        ) : null}
      </form>
      <p className="mt-5 text-xs leading-5 text-slate-500">
        By submitting, you agree that Revenue After Dark may contact you about this request. See our{" "}
        <a className="font-medium text-rose-700 hover:text-rose-800" href="/privacy">Privacy Notice</a>.
      </p>
    </div>
  );
}
