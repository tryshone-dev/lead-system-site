import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdlvye";

const initialForm = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  monthlyCallVolume: "",
};

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (name === "businessName") {
    if (!trimmedValue) return "Please enter your business name.";
  }

  if (name === "contactName") {
    if (!trimmedValue) return "Please enter your contact name.";
    if (trimmedValue.length < 2) return "Contact name must be at least 2 characters.";
  }

  if (name === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }
  }

  if (name === "phone") {
    if (!trimmedValue) return "Please enter your phone number.";
  }

  return "";
}

function getErrors(form) {
  return {
    businessName: validateField("businessName", form.businessName),
    contactName: validateField("contactName", form.contactName),
    email: validateField("email", form.email),
    phone: validateField("phone", form.phone),
  };
}

export function AiReceptionistWaitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const hasVisibleErrors = Object.values(errors).some(Boolean);

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

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = getErrors(form);
    setErrors(nextErrors);
    setTouched({
      businessName: true,
      contactName: true,
      email: true,
      phone: true,
    });

    const isValid = !Object.values(nextErrors).some(Boolean);
    if (!isValid) {
      setSuccessMessage("");
      setSubmitError("");
      return;
    }

    setSuccessMessage("");
    setSubmitError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.contactName,
          contactName: form.contactName,
          business: form.businessName,
          businessName: form.businessName,
          email: form.email,
          phone: form.phone,
          monthlyCallVolume: form.monthlyCallVolume,
          moduleInterest: "AI Receptionist",
        }),
      });

      if (!response.ok) {
        throw new Error("Waitlist submission failed");
      }

      setSuccessMessage("Thanks — you’ve been added to the AI Receptionist waitlist.");
      setSubmitError("");
      setForm(initialForm);
      setTouched({});
      setErrors({});
      setIsOpen(true);
    } catch {
      setSubmitError("Something went wrong sending your waitlist request. Please try again.");
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
    <div className="rounded-[34px] border border-white/80 bg-white/88 p-7 shadow-[0_24px_80px_rgba(102,76,91,0.08)] backdrop-blur sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Coming Soon</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Join the list for businesses that want phone automation inside Revenue After Dark.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Join Waitlist
        </button>
      </div>

      {isOpen ? (
        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Business Name</span>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Luna Aesthetics"
                className={fieldClass("businessName")}
                aria-invalid={Boolean(touched.businessName && errors.businessName)}
              />
              <FieldError name="businessName" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Contact Name</span>
              <input
                type="text"
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Jamie Carter"
                className={fieldClass("contactName")}
                aria-invalid={Boolean(touched.contactName && errors.contactName)}
              />
              <FieldError name="contactName" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email Address</span>
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
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="(947) 622-0143"
                className={fieldClass("phone")}
                aria-invalid={Boolean(touched.phone && errors.phone)}
              />
              <FieldError name="phone" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Monthly Call Volume (optional)</span>
            <input
              type="text"
              name="monthlyCallVolume"
              value={form.monthlyCallVolume}
              onChange={handleChange}
              placeholder="About 100 calls"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Join Waitlist
            </button>
            <p className="text-sm text-slate-500">We’ll reach out when AI Receptionist opens for early access.</p>
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
      ) : null}
    </div>
  );
}
