import { useState } from "react";
import { RevenueChatClient } from "./RevenueChatClient";

export function RevenueChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {open && (
        <div className="mb-3 w-[min(390px,calc(100vw-2.5rem))] overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_28px_90px_rgba(30,41,59,0.28)]">
          <div className="flex items-center justify-between bg-white px-4 py-3">
            <strong className="text-sm text-slate-950">Ask Revenue After Dark</strong>
            <button className="grid size-10 place-items-center rounded-full bg-slate-100 text-lg text-slate-700" onClick={() => setOpen(false)} title="Close chat" type="button">×</button>
          </div>
          <RevenueChatClient compact />
        </div>
      )}
      <button className="ml-auto flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.3)] transition hover:bg-slate-800" onClick={() => setOpen((current) => !current)} type="button">
        <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
        {open ? "Close" : "Ask a question"}
      </button>
    </div>
  );
}
