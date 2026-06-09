function About() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827,_#020617_55%)] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Sobre</p>

        <h1 className="mt-3 text-4xl font-semibold text-white">TrustCode Escrow</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Protecting freelance payments through blockchain-powered smart contracts.
        </p>

        <div className="mt-10 space-y-10 text-slate-200">
          <article>
            <h2 className="text-2xl font-semibold text-white">Sobre o projeto</h2>
            <p className="mt-3 max-w-3xl text-justify text-slate-300">
              O TrustCode é uma plataforma de escrow descentralizada projetada para aumentar a confiança entre clientes e freelancers. Os fundos ficam bloqueados com segurança em um contrato inteligente e são liberados apenas após o trabalho acordado ser concluído e aprovado.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white">Problema</h2>
            <p className="mt-3 max-w-3xl text-justify text-slate-300">
              Freelancers often face delayed payments, contract disputes, and uncertainty when working with new clients. Traditional payment methods usually depend on intermediaries and provide limited protection for both parties. TrustCode eliminates the need for intermediaries by using blockchain technology. Smart contracts automatically enforce payment conditions, ensuring transparency, security, and trust throughout the entire process.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white">Benefícios</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>Secure Escrow Protection</li>
              <li>Automated Payment Release</li>
              <li>Transparent Blockchain Records</li>
              <li>Decentralized Trust</li>
              <li>Reduced Payment Disputes</li>
              <li>Lower Transaction Risks</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white">Como funciona</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-300">
              <li>Create an Agreement</li>
              <li>Deposit Funds</li>
              <li>Complete the Service</li>
              <li>Approve Delivery</li>
              <li>Release Payment Automatically</li>
            </ol>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white">Perfil do Usuário</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Crie sua identidade na plataforma em poucos passos. O processo foi projetado para oferecer uma experiência intuitiva, permitindo que clientes e freelancers iniciem suas operações com rapidez e segurança.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>Cadastro simplificado com nome, e-mail e perfil de utilização.</li>
              <li>Integração visual com carteira digital para reforçar a confiança e a autenticação Web3.</li>
              <li>Confirmação instantânea de registro e conexão da conta.</li>
              <li>Estrutura preparada para futuras evoluções, incluindo autenticação descentralizada e gerenciamento completo de perfis.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white">Chamada para ação</h2>
            <p className="mt-3 max-w-3xl text-slate-300">Start building trust with decentralized freelance payments.</p>
          </article>

          <footer className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-slate-300">
            <p className="font-semibold text-white">TrustCode • Decentralized Escrow Platform for Freelance Services</p>
            <p className="mt-2">Built with Solidity, Ethereum, React, Tailwind CSS and Ethers.js.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default About;
