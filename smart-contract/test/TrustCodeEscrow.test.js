import test from 'node:test';
import assert from 'node:assert/strict';

import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../../frontend/src/contracts/TrustCodeEscrow.js';

const functionNames = CONTRACT_ABI.map((item) => item.name).filter(Boolean);

test('o contrato expõe um endereço Ethereum válido', () => {
  assert.match(CONTRACT_ADDRESS, /^0x[a-fA-F0-9]{40}$/);
});

test('a ABI expõe as funções essenciais do fluxo de escrow', () => {
  assert.ok(functionNames.includes('depositFunds'));
  assert.ok(functionNames.includes('approveWork'));
  assert.ok(functionNames.includes('getStatus'));
  assert.ok(functionNames.includes('contractBalance'));
});
