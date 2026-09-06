export const hostedChatbotApiBaseUrl = "https://revenue-after-dark-api.onrender.com";

function parseConfiguredUrl(value) {
  try {
    return new URL(String(value || "").trim());
  } catch {
    return null;
  }
}

function isLoopbackHostname(hostname) {
  return ["localhost", "127.0.0.1", "::1"].includes(String(hostname || "").toLowerCase());
}

export function resolveChatbotApiBaseUrl({ configured = "", hostname = "" } = {}) {
  const configuredUrl = parseConfiguredUrl(configured);
  const localPage = isLoopbackHostname(hostname);

  if (localPage) {
    return configuredUrl && isLoopbackHostname(configuredUrl.hostname)
      ? configuredUrl.origin
      : "http://localhost:10000";
  }

  if (configuredUrl && configuredUrl.protocol === "https:" && !isLoopbackHostname(configuredUrl.hostname)) {
    return configuredUrl.origin;
  }

  return hostedChatbotApiBaseUrl;
}
