import { TransactionInMemoryRepository } from '../../infra/repositories/inMemory/TransactionInMemoryRepository';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';
import {describe, it, expect, beforeEach} from 'vitest';
import config from '../../../../config/upload';
import { resolve } from 'path';

let fakeTransactionsRepository: TransactionInMemoryRepository;
let createTransaction: CreateTransactionUseCase;
describe('CreateTransactions', () => {
    beforeEach(() => {
      fakeTransactionsRepository = new TransactionInMemoryRepository();
      createTransaction = new CreateTransactionUseCase(fakeTransactionsRepository);
    });
  
    it('should be able to create transaction', async () => {
      const transaction = await createTransaction.execute({path: `${config.currDir}\\CNAB.txt`});
      expect(transaction).toBe(1);
    });

    it('should not be able to create transaction if file does not exit', async () => {
      const transaction = await createTransaction.execute({path: ''}); 
      expect(transaction).toBe(0);
    });
  });