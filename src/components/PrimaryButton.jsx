export function PrimaryButton({ href, children, className = "" }) {
  const label = children || "Book a Demo";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(32,24,31,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 ${className}`}
    >
      {label}
    </a>
  );
}
