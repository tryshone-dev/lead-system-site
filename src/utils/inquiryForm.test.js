import assert from "node:assert/strict";
import test from "node:test";

import {
  buildInquiryPayload,
  getCampaignContext,
  getInquiryErrors,
  validateInquiryField,
} from "./inquiryForm.js";

test("requires identity and email while leaving phone and notes optional", () => {
  assert.equal(validateInquiryField("name", ""), "Please enter your name.");
  assert.equal(validateInquiryField("business", ""), "Please enter your med spa or practice name.");
  assert.equal(validateInquiryField("email", "bad"), "Please enter a valid email address.");
  assert.equal(validateInquiryField("phone", ""), "");
  assert.equal(validateInquiryField("message", ""), "");
  assert.deepEqual(getInquiryErrors({ name: "Jamie", business: "Luna", email: "jamie@example.com" }), {
    name: "",
    business: "",
    email: "",
  });
});

test("preserves campaign context without adding contact details to tracking", () => {
  const location = {
    href: "https://www.revenueafterdarkai.com/med-spa-ai-pricing?utm_source=outreach&utm_campaign=tuesday",
    pathname: "/med-spa-ai-pricing",
    search: "?utm_source=outreach&utm_campaign=tuesday",
  };
  assert.deepEqual(getCampaignContext(location), {
    sourcePage: "/med-spa-ai-pricing",
    sourceUrl: location.href,
    utmSource: "outreach",
    utmMedium: "",
    utmCampaign: "tuesday",
    utmTerm: "",
    utmContent: "",
  });
  const payload = buildInquiryPayload({
    name: " Jamie ",
    business: " Luna ",
    email: " jamie@example.com ",
    phone: "",
    interest: "General lead capture",
    message: " Synthetic audit ",
  }, location);
  assert.equal(payload.email, "jamie@example.com");
  assert.equal(payload.utmCampaign, "tuesday");
  assert.equal(payload.requestType, "Revenue After Dark demo request");
});

