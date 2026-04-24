export function FeatureCard({ eyebrow, title, description }) {
  return (
    <article className="rounded-[32px] border border-white/75 bg-white/86 p-7 shadow-[0_24px_70px_rgba(103,77,92,0.08)] backdrop-blur transition hover:-translate-y-1">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">{eyebrow}</p>
      <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
