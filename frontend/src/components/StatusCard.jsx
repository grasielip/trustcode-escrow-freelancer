function StatusCard({ title, value, hint, accent = "cyan" }) {
  const accentClasses = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    violet: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  };

  return (
    <article className={`rounded-2xl border p-5 ${accentClasses[accent] || accentClasses.cyan}`}>
      <p className="text-sm uppercase tracking-[0.25em] text-slate-200">{title}</p>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-200">{hint}</p>
    </article>
  );
}

export default StatusCard;
