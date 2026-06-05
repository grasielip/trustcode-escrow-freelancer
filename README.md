# TrustCode Escrow Freelancer

## Descrição

O TrustCode Escrow Freelancer é uma solução baseada em blockchain que utiliza Smart Contracts para automatizar pagamentos entre clientes e freelancers.

O projeto funciona como um sistema de escrow (conta de garantia), onde os fundos permanecem bloqueados em um contrato inteligente até que o serviço seja entregue e aprovado pelo cliente.

O objetivo é reduzir a dependência de confiança informal, minimizar riscos de inadimplência e aumentar a transparência nas relações comerciais.

---

## Problema

O mercado de prestação de serviços digitais cresce continuamente, mas ainda enfrenta problemas relacionados à confiança entre contratantes e prestadores de serviço.

## Freelancers frequentemente enfrentam:

* Atrasos nos pagamentos;
* Inadimplência;
* Falta de garantias contratuais;
* Dificuldade para comprovar acordos;
* Dependência de confiança informal.

Clientes também enfrentam desafios importantes:

* Receio de realizar pagamentos antecipados;
* Falta de garantias sobre a entrega do serviço;
* Necessidade de intermediários para validação e mediação.

Esse cenário gera conflitos, custos operacionais e reduz a eficiência das relações comerciais.

---

## Solução

O TrustCode Escrow Freelancer utiliza Smart Contracts para automatizar acordos de prestação de serviços.

O contrato inteligente atua como uma camada de confiança programável entre cliente e freelancer, garantindo que os recursos financeiros sejam liberados apenas quando as condições previamente definidas forem cumpridas.

Todo o fluxo fica registrado na blockchain, proporcionando transparência, rastreabilidade e auditabilidade.

---

## Objetivo do Projeto

Demonstrar como Smart Contracts podem automatizar acordos de prestação de serviços, reduzindo a necessidade de intermediários e aumentando a segurança das transações.

O projeto busca validar um fluxo completo de pagamento utilizando blockchain Ethereum em ambiente de testes.

---

## Fluxo da Aplicação

### Etapa 1 – Criação do Acordo

O cliente cria um acordo informando:

* Endereço da carteira do freelancer;
* Descrição do serviço;
* Valor acordado.

O Smart Contract registra essas informações na blockchain.

### Etapa 2 – Depósito dos Fundos

O cliente deposita o valor acordado em ETH.

Os fundos permanecem bloqueados no contrato inteligente.

### Etapa 3 – Execução do Serviço

O freelancer realiza o trabalho contratado.

### Etapa 4 – Aprovação da Entrega

Após verificar a entrega, o cliente aprova o serviço.

### Etapa 5 – Liberação Automática do Pagamento

O Smart Contract transfere automaticamente os fundos para o freelancer.

A transação é registrada na blockchain.

---

## MVP Implementado

### Funcionalidades Principais

* Criação de acordo entre cliente e freelancer;
* Registro da descrição do serviço;
* Registro do valor contratado;
* Depósito de fundos em ETH;
* Aprovação da entrega pelo cliente;
* Liberação automática do pagamento;
* Registro de eventos on-chain para auditoria.

### Funcionalidades Fora do Escopo

* Sistema de login;
* Banco de dados;
* Sistema de disputas;
* Marketplace completo;
* Dashboard administrativo;
* Deploy em ambiente de produção.

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

## Arquitetura da Solução

### Smart Contract

O Smart Contract é o componente principal da solução e é responsável por:

* Registrar o acordo entre cliente e freelancer;
* Armazenar a descrição do serviço e o valor contratado;
* Receber e bloquear os fundos depositados pelo cliente;
* Controlar o status do contrato;
* Registrar eventos para auditoria na blockchain;
* Liberar automaticamente o pagamento após a aprovação do serviço.

### Blockchain

A blockchain é responsável por garantir a execução segura e transparente das regras definidas no contrato.

Benefícios:

* Transparência das transações;
* Imutabilidade dos registros;
* Rastreabilidade das operações;
* Auditoria pública das transações;
* Execução automática das regras de negócio.

Rede utilizada:

* Ethereum
* Sepolia Testnet

### Carteira Digital

A MetaMask é utilizada para:

* Assinar transações;
* Interagir com o Smart Contract;
* Depositar fundos;
* Aprovar entregas;
* Receber pagamentos.

---

## Contrato Inteligente

### Principais Funções

#### createAgreement()

Responsável por registrar:

* Contratante;
* Freelancer;
* Descrição do serviço;
* Valor acordado.

#### depositFunds()

Permite ao cliente depositar ETH no contrato.

#### approveWork()

Permite ao cliente aprovar a conclusão do serviço.

#### releasePayment()

Libera automaticamente os fundos para o freelancer após a aprovação.

---

## Eventos On-Chain

O contrato registra eventos importantes para auditoria e rastreabilidade:

* AgreementCreated
* FundsDeposited
* WorkApproved
* PaymentReleased

---

## Fluxo Operacional

```text
Cliente
│
├── Cria o acordo
│
├── Deposita ETH
│
▼
Smart Contract
│
├── Registra informações
├── Bloqueia os fundos
├── Controla o status do contrato
│
▼
Freelancer
│
├── Executa o serviço
│
▼
Cliente
│
├── Aprova a entrega
│
▼
Smart Contract
│
└── Libera o pagamento automaticamente
│
▼
Freelancer recebe os fundos
```

---

## Segurança

O contrato implementa controles básicos para garantir a integridade do processo:

* Apenas o cliente pode aprovar a entrega;
* O pagamento só pode ser liberado após aprovação;
* Os fundos permanecem bloqueados até o cumprimento das condições;
* Eventos on-chain permitem auditoria das operações;
* Todas as transações ficam registradas na blockchain Ethereum.

---

## Privacidade

O projeto não armazena dados pessoais dos usuários.

As interações são realizadas exclusivamente por meio de endereços públicos de carteiras Ethereum.

Nenhuma informação como nome, CPF, telefone, endereço ou e-mail é armazenada pelo Smart Contract.

---

## Como Executar

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/trustcode-escrow-freelancer.git
```

### Acessar o Projeto

```bash
cd trustcode-escrow-freelancer
```

### Instalar Dependências

```bash
npm install
```

### Compilar o Contrato

```bash
npx hardhat compile
```

### Executar Testes

```bash
npx hardhat test
```

### Realizar Deploy na Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Critérios de Sucesso

O projeto será considerado funcional quando for possível:

1. Criar um acordo de prestação de serviço;
2. Depositar ETH de teste;
3. Aprovar a entrega do serviço;
4. Liberar automaticamente o pagamento;
5. Verificar as transações na Sepolia Testnet.

---

## Aplicação Real

A solução pode ser aplicada em:

* Plataformas de freelancers;
* Marketplaces de serviços;
* Agências digitais;
* Consultorias;
* Contratos corporativos;
* Prestação de serviços remotos.

---

## Diferenciais

* Problema real de mercado;
* Fluxo financeiro completo;
* Uso efetivo de blockchain;
* Smart Contract como elemento central da solução;
* Transparência por meio de registros imutáveis;
* Auditoria através de eventos on-chain;
* Facilidade de expansão para marketplaces e plataformas de serviços.

---

## Autor

Grasieli Priscila de Paula Figueredo

Projeto desenvolvido para o desafio TrustCode do HackWeb Web3.

---

## Licença

Este projeto está licenciado sob a licença MIT.
