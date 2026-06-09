function Navbar({ currentPage, onNavigate, wallet, balance, onConnectWallet }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "register", label: "Cadastro" },
    { id: "dashboard", label: "Dashboard" },
    { id: "about", label: "Sobre" },
  ];

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="text-xl font-semibold tracking-tight text-white"
        >
          TrustCode Escrow
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                currentPage === link.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {wallet && balance && (
            <button
              type="button"
              className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-300 border border-cyan-500/30 transition hover:bg-slate-700 hover:border-cyan-400"
            >
              {balance} ETH
            </button>
          )}
          <button
            type="button"
            onClick={onConnectWallet}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500"
          >
            {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Conectar Carteira"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
