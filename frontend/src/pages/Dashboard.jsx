import StatusCard from "../components/StatusCard";

function Dashboard({ wallet }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827,_#020617_55%)] text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Painel após conexão da carteira</h1>
        <p className="mt-3 max-w-3xl text-slate-300">Visual de demonstração para mostrar contratos, pagamentos e status em tempo real.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Card Cliente</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <StatusCard title="Contratos Criados" value="6" hint="Acordos abertos e em andamento" accent="cyan" />
              <StatusCard title="Valor Depositado" value="2.4 ETH" hint="Fundos bloqueados no escrow" accent="emerald" />
              <StatusCard title="Contratos Concluídos" value="4" hint="Pagamentos aprovados" accent="violet" />
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Card Freelancer</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <StatusCard title="Serviços Entregues" value="18" hint="Entregas concluídas com sucesso" accent="emerald" />
              <StatusCard title="Pagamentos Recebidos" value="5.1 ETH" hint="Recebimentos já liberados" accent="amber" />
              <StatusCard title="Avaliação" value="4.9/5" hint="Satisfação média dos clientes" accent="violet" />
            </div>
          </article>
        </div>

        <article className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Visualização da linha do tempo</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "Contrato Criado",
              "Fundos Depositados",
              "Serviço Entregue",
              "Pagamento Liberado",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/8 p-4 text-sm text-emerald-100">
                <p className="text-xs uppercase tracking-[0.25em]">Etapa {index + 1}</p>
                <p className="mt-2 font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-100">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Status Atual</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-emerald-400/10 px-3 py-2 text-emerald-100">🟢 Em andamento</span>
              <span className="rounded-full bg-amber-400/10 px-3 py-2 text-amber-100">🟡 Aguardando aprovação</span>
              <span className="rounded-full bg-cyan-400/10 px-3 py-2 text-cyan-100">🔵 Pago</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">Carteira conectada: {wallet || "0x1234...abcd"}</p>
          </div>
        </article>

        <article className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Fluxo Principal</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Acompanhe o contrato em 4 etapas</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-lg">✓</span>
              <span>Contrato criado e disponível para aprovação.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-lg">✓</span>
              <span>Fundos depositados com segurança no escrow.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-lg">✓</span>
              <span>Serviço entregue e validado pelo cliente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-lg">✓</span>
              <span>Pagamento liberado para o freelancer.</span>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
