const sessionPrefix = "revenue-after-dark-chatbot-session";
export const CHAT_SESSION_MAX_IDLE_MS = 8 * 60 * 60 * 1000;

export function chatbotSessionKey(businessSlug) {
  return `${sessionPrefix}:${businessSlug}`;
}

function newVisitorSessionId(randomUUID) {
  return randomUUID?.() || `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveSession(storage, businessSlug, session) {
  storage.setItem(chatbotSessionKey(businessSlug), JSON.stringify(session));
  return session;
}

export function getOrCreateVisitorSession({
  storage,
  businessSlug,
  now = Date.now(),
  maxIdleMs = CHAT_SESSION_MAX_IDLE_MS,
  randomUUID = globalThis.crypto?.randomUUID?.bind(globalThis.crypto),
}) {
  const raw = storage.getItem(chatbotSessionKey(businessSlug));
  if (raw) {
    try {
      const stored = JSON.parse(raw);
      const active = stored?.id && Number.isFinite(stored.lastActiveAt) && now - stored.lastActiveAt <= maxIdleMs;
      if (active) return saveSession(storage, businessSlug, { id: stored.id, lastActiveAt: now });
    } catch {
      // Older builds stored the ID as plain text. Preserve it for this active tab.
      return saveSession(storage, businessSlug, { id: raw, lastActiveAt: now });
    }
  }
  return replaceVisitorSession({ storage, businessSlug, now, randomUUID });
}

export function replaceVisitorSession({
  storage,
  businessSlug,
  now = Date.now(),
  randomUUID = globalThis.crypto?.randomUUID?.bind(globalThis.crypto),
}) {
  return saveSession(storage, businessSlug, { id: newVisitorSessionId(randomUUID), lastActiveAt: now });
}

export function touchVisitorSession({ storage, businessSlug, id, now = Date.now() }) {
  if (!id) return null;
  return saveSession(storage, businessSlug, { id, lastActiveAt: now });
}
