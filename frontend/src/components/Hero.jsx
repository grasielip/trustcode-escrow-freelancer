function Hero({ title, subtitle, badge = "Hackathon Web3" }) {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-18 text-center md:py-20">
      <span className="mx-auto inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-100">
        {badge}
      </span>
      <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
      <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">{subtitle}</p>
    </section>
  );
}

export default Hero;
