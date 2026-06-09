// Importa a biblioteca ethers.js
// Responsável por conectar o frontend à blockchain Ethereum
import { ethers } from "ethers";

// Endereço do contrato implantado na rede Sepolia
export const CONTRACT_ADDRESS =
  "0x9f04579b35dEC8533252C737BBe0F3576Fd81Dc1";

// ABI (Application Binary Interface)
// Define quais funções do contrato podem ser chamadas pelo frontend
export const CONTRACT_ABI = [

  // Função para depositar fundos no contrato
  {
    "inputs": [],
    "name": "depositFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },

  // Função para aprovar o serviço realizado pelo freelancer
  {
    "inputs": [],
    "name": "approveWork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  // Função para consultar o status atual do contrato
  {
    "inputs": [],
    "name": "getStatus",
    "outputs": [
      {
        "type": "bool",
        "name": "fundsDeposited"
      },
      {
        "type": "bool",
        "name": "workApproved"
      },
      {
        "type": "bool",
        "name": "paymentReleased"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },

  // Função para consultar o saldo armazenado no contrato
  {
    "inputs": [],
    "name": "contractBalance",
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

/*
  Função responsável por criar uma instância
  do Smart Contract e conectar a MetaMask
*/
export async function getContract() {

  // Verifica se a MetaMask está instalada
  if (!window.ethereum) {
    throw new Error("MetaMask não encontrada");
  }

  // Cria um provider conectado à MetaMask
  const provider = new ethers.BrowserProvider(
    window.ethereum
  );

  // Obtém a conta conectada pelo usuário
  const signer = await provider.getSigner();

  // Retorna uma instância do contrato
  // pronta para executar funções na blockchain
  return new ethers.Contract(

    // Endereço do contrato implantado
    CONTRACT_ADDRESS,

    // ABI contendo as funções disponíveis
    CONTRACT_ABI,

    // Conta autorizada a assinar transações
    signer
  );
}