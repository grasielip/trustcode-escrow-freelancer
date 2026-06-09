
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { getContract } from "./contracts/TrustCodeEscrow";

function App() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if (wallet) {
      fetchBalance();
    }
  }, [wallet]);

  async function fetchBalance() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balanceWei = await provider.getBalance(wallet);
      const balanceEth = ethers.formatEther(balanceWei);
      setBalance(parseFloat(balanceEth).toFixed(4));
    } catch (error) {
      console.error("Erro ao buscar saldo:", error);
    }
  }

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("MetaMask não encontrada!");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWallet(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }

  async function depositFunds() {
    try {
      const contract = await getContract();
      const tx = await contract.depositFunds({
        value: ethers.parseEther("0.001"),
      });

      await tx.wait();
      alert("Fundos depositados com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function approveWork() {
    try {
      const contract = await getContract();
      const tx = await contract.approveWork();

      await tx.wait();
      alert("Serviço aprovado!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  function renderPage() {
    if (currentPage === "register") {
      return <Register wallet={wallet} onNavigate={setCurrentPage} />;
    }

    if (currentPage === "dashboard") {
      return <Dashboard wallet={wallet} />;
    }

    if (currentPage === "about") {
      return <About />;
    }

    return (
      <Home
        wallet={wallet}
        onConnectWallet={connectWallet}
        onDepositFunds={depositFunds}
        onApproveWork={approveWork}
        onNavigate={setCurrentPage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        wallet={wallet}
        balance={balance}
        onConnectWallet={connectWallet}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

