# TrustCode Escrow Freelancer

## Descrição

O TrustCode Escrow Freelancer é uma solução baseada em blockchain que utiliza Smart Contracts para automatizar pagamentos entre clientes e freelancers.

O projeto funciona como um sistema de escrow (conta de garantia), onde os fundos permanecem bloqueados em um contrato inteligente até que o serviço seja entregue e aprovado pelo cliente.

O objetivo é reduzir a dependência de confiança informal, diminuir riscos de inadimplência e aumentar a transparência nas relações comerciais.

---

## Problema

Freelancers frequentemente enfrentam:

* Atrasos em pagamentos;
* Inadimplência;
* Falta de garantias contratuais;
* Dependência de confiança informal.

Clientes também enfrentam dificuldades:

* Receio de pagar antecipadamente;
* Falta de garantias sobre a entrega do serviço;
* Dependência de intermediários para mediação.

Esse cenário gera conflitos, custos operacionais e reduz a confiança entre as partes.

---

## Solução

O TrustCode Escrow Freelancer utiliza um Smart Contract para automatizar o fluxo de pagamento.

### Fluxo

1. Cliente cria o acordo.
2. Cliente deposita ETH no contrato.
3. Os fundos permanecem bloqueados.
4. Freelancer realiza o serviço.
5. Cliente aprova a entrega.
6. O pagamento é liberado automaticamente.

Todas as etapas ficam registradas na blockchain.

---

## MVP Implementado

### Funcionalidades

* Criação de acordo entre cliente e freelancer;
* Registro do valor contratado;
* Depósito de fundos em ETH;
* Aprovação da entrega;
* Liberação automática do pagamento;
* Eventos on-chain para auditoria.

### Fora do Escopo

* Login de usuários;
* Banco de dados;
* Sistema de disputas;
* Marketplace completo;
* Dashboard administrativo;
* Deploy em produção.

---

## Tecnologias Utilizadas

* Solidity
* Hardhat
* Ethereum
* Sepolia Testnet
* MetaMask
* OpenZeppelin
* GitHub

---

## Estrutura do Projeto

```text
trustcode-escrow-freelancer
│
├── contracts/
│   └── TrustCodeEscrow.sol
│
├── scripts/
│   └── deploy.js
│
├── test/
│   └── TrustCodeEscrow.test.js
│
├── README.md
├── hardhat.config.js
└── package.json
```

---

## Arquitetura

### Smart Contract

Responsável por:

* Registrar o acordo;
* Receber os depósitos;
* Controlar o status do serviço;
* Liberar pagamentos automaticamente.

### Blockchain

Rede utilizada:

* Ethereum Sepolia Testnet

### Carteira

Utilizada para interação:

* MetaMask

---

## Contrato Inteligente

### Principais Funções

### createAgreement()

Registra:

* Contratante;
* Freelancer;
* Descrição do serviço;
* Valor acordado.

### depositFunds()

Permite ao cliente depositar ETH no contrato.

### approveWork()

Permite ao cliente aprovar a entrega do serviço.

### releasePayment()

Libera automaticamente os fundos para o freelancer.

---

## Eventos On-Chain

O contrato registra eventos importantes para auditoria:

* AgreementCreated
* FundsDeposited
* WorkApproved
* PaymentReleased

---

## Como Executar

### Clonar o projeto

```bash
git clone https://github.com/seu-usuario/trustcode-escrow-freelancer.git
```

### Entrar na pasta

```bash
cd trustcode-escrow-freelancer
```

### Instalar dependências

```bash
npm install
```

### Compilar contrato

```bash
npx hardhat compile
```

### Executar testes

```bash
npx hardhat test
```

### Fazer deploy na Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Critérios de Sucesso

O projeto é considerado funcional quando for possível:

* Criar um acordo;
* Depositar ETH de teste;
* Aprovar a entrega;
* Liberar automaticamente o pagamento;
* Verificar as transações na Sepolia Testnet.

---

## Aplicação Real

A solução pode ser utilizada em:

* Plataformas de freelancers;
* Marketplaces de serviços;
* Agências digitais;
* Contratos corporativos;
* Consultorias;
* Prestação de serviços remotos.

---

## Diferenciais

* Problema real de mercado;
* Fluxo financeiro completo;
* Uso efetivo de blockchain;
* Transparência através de registros imutáveis;
* Smart Contract como elemento central da solução;
* Auditoria por eventos on-chain.

---

## Autor

Grasieli Priscila de Paula Figueredo

Projeto desenvolvido para o desafio TrustCode do HackWeb Web3.

---

## Licença

MIT License
