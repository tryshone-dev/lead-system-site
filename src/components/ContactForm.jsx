import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const initialForm = {
  name: "",
  practice: "",
  email: "",
  interest: "Botox and injectables",
  message: "",
};

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (name === "name") {
    if (!trimmedValue) return "Please enter your name.";
    if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
  }

  if (name === "practice") {
    if (!trimmedValue) return "Please enter your med spa or practice name.";
  }

  if (name === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }
  }

  if (name === "message") {
    if (!trimmedValue) return "Please share a quick note about your goals.";
    if (trimmedValue.length < 12) return "Please add a little more detail so we can follow up well.";
  }

  return "";
}

function getErrors(form) {
  return {
    name: validateField("name", form.name),
    practice: validateField("practice", form.practice),
    email: validateField("email", form.email),
    message: validateField("message", form.message),
  };
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [state, handleSubmit] = useForm("xvzdlvye");
  const hasVisibleErrors = Object.values(errors).some(Boolean);

  useEffect(() => {
    if (state.succeeded) {
      setForm(initialForm);
      setTouched({});
      setErrors({});
      setSubmitError("");
    }
  }, [state.succeeded]);

  function handleChange(event) {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);

    if (touched[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();

    const nextErrors = getErrors(form);
    setErrors(nextErrors);
    setTouched({
      name: true,
      practice: true,
      email: true,
      message: true,
    });

    const isValid = !Object.values(nextErrors).some(Boolean);
    if (!isValid) {
      setSubmitError("");
      return;
    }

    setSubmitError("");
    await handleSubmit(event);
  }

  useEffect(() => {
    if (state.errors?.length) {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    }
  }, [state.errors]);

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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Book a Demo</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">Tell us about your practice</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          We’ll use this information to tailor the walkthrough to your services, lead flow, and booking goals.
        </p>
        <p className="mt-3 text-sm text-slate-500">No tech setup. No commitment. Just a quick walkthrough.</p>
      </div>

      <form className="space-y-5" onSubmit={onSubmit} noValidate>
        <input type="hidden" name="_subject" value="New MedSpa AI Lead" />

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Jamie Carter"
              className={fieldClass("name")}
              aria-invalid={Boolean(touched.name && errors.name)}
            />
            <FieldError name="name" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Med spa or practice</span>
            <input
              type="text"
              name="practice"
              value={form.practice}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Luna Aesthetics"
              className={fieldClass("practice")}
              aria-invalid={Boolean(touched.practice && errors.practice)}
            />
            <FieldError name="practice" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="jamie@lunaaesthetics.com"
              className={fieldClass("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
            />
            <FieldError name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-rose-700" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Main area of interest</span>
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
          <span className="text-sm font-medium text-slate-700">What would you like help with?</span>
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
          <FieldError name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-rose-700" />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {state.submitting ? "Sending..." : "Show me the missed lead flow"}
          </button>
          <p className="text-sm text-slate-500">Takes 10 minutes. No setup required.</p>
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

        {state.succeeded ? (
          <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
            Thanks. Your demo request has been submitted successfully. This frontend flow is ready to connect to your CRM or backend.
          </div>
        ) : null}
      </form>
    </div>
  );
}
