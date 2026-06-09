import { useState } from "react";

function Register({ wallet, onNavigate }) {
  const [form, setForm] = useState({ name: "", email: "", userType: "Cliente" });
  const [created, setCreated] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCreated(true);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827,_#020617_55%)] text-white">
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Cadastro</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Perfil do Usuário</h1>
          <p className="mt-4 text-justify text-slate-300">
            Crie sua identidade na plataforma em poucos passos. O processo foi projetado para oferecer uma experiência intuitiva, permitindo que clientes e freelancers iniciem suas operações com rapidez e segurança.
          </p>

          <ul className="mt-6 space-y-3 text-justify text-sm text-slate-200">
            <li>• Cadastro simplificado com nome, e-mail e perfil de utilização.</li>
            <li>• Integração visual com carteira digital para reforçar a confiança e a autenticação Web3.</li>
            <li>• Confirmação instantânea de registro e conexão da conta.</li>
            <li>• Estrutura preparada para futuras evoluções, incluindo autenticação descentralizada e gerenciamento completo de perfis.</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-sm text-slate-200">
              Nome
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400"
                placeholder="Ex.: Ana Silva"
              />
            </label>

            <label className="block text-sm text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="ana@exemplo.com"
              />
            </label>

            <fieldset className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <legend className="px-1 text-sm text-slate-200">Tipo de usuário</legend>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-100">
                {['Cliente', 'Freelancer'].map((type) => (
                  <label key={type} className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2">
                    <input
                      type="radio"
                      name="userType"
                      value={type}
                      checked={form.userType === type}
                      onChange={handleChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
            >
              Criar Perfil
            </button>
          </form>

          {created && (
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-lg font-semibold">Perfil criado com sucesso</p>
              <p className="mt-1 text-sm">Carteira conectada: {wallet || "0x1234...abcd"}</p>
            </div>
          )}

          <button
            type="button"
            onClick={() => onNavigate("dashboard")}
            className="mt-6 w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-slate-700"
          >
            Ver dashboard do perfil
          </button>
        </article>
      </section>
    </main>
  );
}

export default Register;
