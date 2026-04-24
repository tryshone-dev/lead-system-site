export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl leading-[1] tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
