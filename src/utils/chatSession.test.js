import assert from "node:assert/strict";
import test from "node:test";

import {
  CHAT_SESSION_MAX_IDLE_MS,
  chatbotSessionKey,
  getOrCreateVisitorSession,
  replaceVisitorSession,
} from "./chatSession.js";

function memoryStorage() {
  const values = new Map();
  return {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
  };
}

test("a browser with no chatbot state receives a clean visitor session", () => {
  const storage = memoryStorage();
  const session = getOrCreateVisitorSession({ storage, businessSlug: "demo", now: 100, randomUUID: () => "visitor-a" });
  assert.deepEqual(session, { id: "visitor-a", lastActiveAt: 100 });
});

test("refresh during an active session restores the same visitor ID", () => {
  const storage = memoryStorage();
  getOrCreateVisitorSession({ storage, businessSlug: "demo", now: 100, randomUUID: () => "visitor-a" });
  const refreshed = getOrCreateVisitorSession({ storage, businessSlug: "demo", now: 200, randomUUID: () => "unused" });
  assert.deepEqual(refreshed, { id: "visitor-a", lastActiveAt: 200 });
});

test("New conversation replaces the visitor ID while leaving the old identifier untouched in history", () => {
  const storage = memoryStorage();
  const original = getOrCreateVisitorSession({ storage, businessSlug: "demo", now: 100, randomUUID: () => "visitor-a" });
  const replacement = replaceVisitorSession({ storage, businessSlug: "demo", now: 200, randomUUID: () => "visitor-b" });
  assert.equal(original.id, "visitor-a");
  assert.deepEqual(replacement, { id: "visitor-b", lastActiveAt: 200 });
  assert.equal(JSON.parse(storage.getItem(chatbotSessionKey("demo"))).id, "visitor-b");
});

test("an expired session is not revived", () => {
  const storage = memoryStorage();
  getOrCreateVisitorSession({ storage, businessSlug: "demo", now: 100, randomUUID: () => "visitor-a" });
  const replacement = getOrCreateVisitorSession({
    storage,
    businessSlug: "demo",
    now: 100 + CHAT_SESSION_MAX_IDLE_MS + 1,
    randomUUID: () => "visitor-b",
  });
  assert.equal(replacement.id, "visitor-b");
});
