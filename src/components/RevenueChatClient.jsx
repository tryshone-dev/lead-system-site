import { useEffect, useRef, useState } from "react";
import { getOrCreateVisitorSession, replaceVisitorSession, touchVisitorSession } from "../utils/chatSession";

const defaultBusinessSlug = "revenue-after-dark-demo";

function apiUrl(path) {
  const configured = String(import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
  const local = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:5173"
    : "https://revenue-after-dark-api.onrender.com";
  return `${configured || local}${path}`;
}

async function chatbotRequest(path, body) {
  const requestUrl = apiUrl(path);
  let response;
  try {
    response = await fetch(requestUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("[Revenue After Dark chatbot] API transport failed", {
      category: "API_UNREACHABLE_OR_CORS",
      method: "POST",
      requestUrl,
      error: error?.message || String(error),
    });
    throw new Error("Chat service is unreachable. Confirm the local API is running and allows this website origin.");
  }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    const category = payload.code
      || (response.status >= 500 ? "SERVER_OR_STORAGE_ERROR" : "CHAT_REQUEST_REJECTED");
    console.error("[Revenue After Dark chatbot] API request failed", {
      category,
      method: "POST",
      requestUrl,
      status: response.status,
      error: payload.error || "No error detail returned.",
    });
    throw new Error(payload.error || `Chat service returned ${response.status}.`);
  }
  return payload;
}

function ChatBubble({ role, content }) {
  const assistant = role === "assistant";
  return (
    <div className={`flex ${assistant ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[88%] rounded-[22px] px-4 py-3 text-sm leading-6 shadow-sm ${assistant ? "rounded-bl-md bg-white/12 text-slate-100" : "rounded-br-md bg-rose-200 text-slate-900"}`}>
        {content}
      </div>
    </div>
  );
}

export function RevenueChatClient({ compact = false, onReady, businessSlug = defaultBusinessSlug }) {
  const [conversation, setConversation] = useState(null);
  const [business, setBusiness] = useState(null);
  const [draft, setDraft] = useState("");
  const [bookingLink, setBookingLink] = useState("");
  const [status, setStatus] = useState("Connecting...");
  const [sending, setSending] = useState(false);
  const [resetting, setResetting] = useState(false);
  const scrollRef = useRef(null);
  const [sessionId, setSessionId] = useState(() => getOrCreateVisitorSession({
    storage: window.sessionStorage,
    businessSlug,
  }).id);

  useEffect(() => {
    let active = true;
    chatbotRequest("/api/revenue-after-dark/chatbot/session", {
      businessSlug,
      visitorSessionId: sessionId,
      sourceUrl: window.location.href,
    }).then((result) => {
      if (!active) return;
      setBusiness(result.business);
      setConversation(result.conversation);
      setBookingLink(result.business?.bookingLink || "");
      setStatus("Online");
      setResetting(false);
      onReady?.(result);
    }).catch((error) => {
      if (active) {
        setStatus(error.message || "Chat is temporarily unavailable.");
        setResetting(false);
      }
    });
    return () => { active = false; };
  }, [businessSlug, onReady, sessionId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [conversation?.messages?.length, sending]);

  async function sendMessage(text = draft) {
    const message = String(text || "").trim();
    if (!message || !conversation?.id || sending) return;
    setSending(true);
    setDraft("");
    setStatus("Thinking...");
    setConversation((current) => ({
      ...current,
      messages: [...(current?.messages || []), { id: `pending-${Date.now()}`, role: "visitor", content: message }],
    }));
    try {
      const result = await chatbotRequest("/api/revenue-after-dark/chatbot/message", {
        conversationId: conversation.id,
        visitorSessionId: sessionId,
        message,
        sourceUrl: window.location.href,
      });
      setConversation(result.conversation);
      setBookingLink(result.bookingLink || business?.bookingLink || "");
      setStatus("Online");
      touchVisitorSession({ storage: window.sessionStorage, businessSlug, id: sessionId });
    } catch (error) {
      setStatus(error.message || "Message could not be sent.");
      setConversation((current) => ({
        ...current,
        messages: (current?.messages || []).filter((item) => !String(item.id).startsWith("pending-")),
      }));
    } finally {
      setSending(false);
    }
  }

  async function recordBookingClick() {
    if (!conversation?.id) return;
    chatbotRequest("/api/revenue-after-dark/chatbot/booking-click", {
      conversationId: conversation.id,
      sourceUrl: window.location.href,
    }).catch(() => {});
  }

  function startNewConversation() {
    if (sending || resetting) return;
    const nextSession = replaceVisitorSession({ storage: window.sessionStorage, businessSlug });
    setResetting(true);
    setConversation(null);
    setDraft("");
    setBookingLink("");
    setStatus("Starting new conversation...");
    setSessionId(nextSession.id);
  }

  return (
    <section className={`flex min-h-0 flex-col overflow-hidden bg-slate-950 ${compact ? "h-[min(620px,78vh)] rounded-[28px]" : "min-h-[620px] rounded-[36px]"}`} aria-label="Revenue After Dark live chatbot">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Revenue After Dark</p>
          <p className="mt-1 text-sm text-slate-300">{business?.name || "Approved business assistant"}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="min-h-9 rounded-full px-3 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={sending || resetting}
            onClick={startNewConversation}
            type="button"
          >
            New conversation
          </button>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status === "Online" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"}`}>{status}</span>
        </div>
      </header>

      <div ref={scrollRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
        {(conversation?.messages || []).map((message) => <ChatBubble key={message.id} {...message} />)}
        {sending && <p className="text-xs font-medium text-slate-400">Preparing a grounded answer...</p>}
      </div>

      {bookingLink && conversation?.handoffStatus !== "NOT_STARTED" && (
        <div className="border-t border-white/10 px-5 py-4">
          <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950" href={bookingLink} onClick={recordBookingClick}>Open booking request</a>
        </div>
      )}

      <form className="flex gap-2 border-t border-white/10 p-4" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
        <label className="sr-only" htmlFor={`rad-chat-${compact ? "compact" : "demo"}`}>Message</label>
        <input
          id={`rad-chat-${compact ? "compact" : "demo"}`}
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-rose-200"
          disabled={!conversation?.id || sending}
          maxLength={1500}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about services, pricing, hours, or booking"
          value={draft}
        />
        <button className="min-h-11 rounded-full bg-rose-200 px-5 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50" disabled={!draft.trim() || !conversation?.id || sending} type="submit">Send</button>
      </form>
    </section>
  );
}

export const revenueChatApi = { apiUrl, chatbotRequest };
