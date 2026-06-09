import Hero from "../components/Hero";
import StatusCard from "../components/StatusCard";

function Home({ wallet, onConnectWallet, onDepositFunds, onApproveWork, onNavigate }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827,_#020617_55%)] text-white">
      <Hero
        title="Pagamentos seguros para freelancers e clientes"
        subtitle="Uma interface visual para demonstrar confiança, transparência e automação com smart contracts em um hackathon Web3."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Ações rápidas</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Conecte a carteira e teste o fluxo</h2>
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={onConnectWallet}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
            >
              {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Conectar Carteira"}
            </button>
            <button
              type="button"
              onClick={onDepositFunds}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Depositar fundos no escrow
            </button>
            <button
              type="button"
              onClick={onApproveWork}
              className="w-full rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Aprovar entrega
            </button>
            <button
              type="button"
              onClick={() => onNavigate("register")}
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-slate-700"
            >
              Criar perfil de demo
            </button>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Segurança</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Seu dinheiro protegido</h2>
          <p className="mt-4 text-sm text-slate-300">Os fundos permanecem bloqueados no smart contract até a validação completa do serviço, garantindo segurança para ambas as partes.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            <li>✓ Escrow automático</li>
            <li>✓ Sem intermediários</li>
            <li>✓ Transações imutáveis</li>
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl gap-6 px-6 pb-16">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Fluxo principal</p>
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

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        <StatusCard title="Contratos criados" value="12" hint="Acompanhamento visual para jurados" accent="cyan" />
        <StatusCard title="Valor depositado" value="4.8 ETH" hint="Fundos protegidos no contrato" accent="emerald" />
        <StatusCard title="Status atual" value="Em andamento" hint="Timeline com aprovação e liberação" accent="amber" />
      </section>
    </main>
  );
}

export default Home;
