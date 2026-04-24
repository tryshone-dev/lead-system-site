import { useState } from "react";

export function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[28px] border border-white/75 bg-white/82 shadow-[0_16px_50px_rgba(102,76,91,0.06)] backdrop-blur">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900 sm:text-lg">{question}</span>
        <span className="text-2xl leading-none text-rose-700">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen ? (
        <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600 sm:px-7">
          {answer}
        </div>
      ) : null}
    </div>
  );
}
