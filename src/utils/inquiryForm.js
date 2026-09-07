export const emptyInquiryForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  interest: "Botox and injectables",
  message: "",
};

export function validateInquiryField(name, value) {
  const trimmedValue = String(value || "").trim();

  if (name === "name") {
    if (!trimmedValue) return "Please enter your name.";
    if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
  }

  if (name === "business" && !trimmedValue) {
    return "Please enter your med spa or practice name.";
  }

  if (name === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }
  }

  return "";
}

export function getInquiryErrors(form) {
  return {
    name: validateInquiryField("name", form.name),
    business: validateInquiryField("business", form.business),
    email: validateInquiryField("email", form.email),
  };
}

export function getCampaignContext(locationLike = {}) {
  const params = new URLSearchParams(locationLike.search || "");
  return {
    sourcePage: locationLike.pathname || "/",
    sourceUrl: locationLike.href || "",
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
  };
}

export function buildInquiryPayload(form, locationLike) {
  return {
    name: form.name.trim(),
    business: form.business.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    interest: form.interest,
    message: form.message.trim(),
    requestType: "Revenue After Dark demo request",
    ...getCampaignContext(locationLike),
  };
}

