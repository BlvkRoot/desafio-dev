import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import crypto from 'crypto'
@Entity('transactions')
export class Transactions {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    transactionType: string;

    @Column()
    transactionOccurrenceDate : string;

    @Column({
        type: 'decimal'
    })
    transactionValue: string;

    @Column()
    transactionCPF: string;

    @Column()
    transactionCard: string;

    @Column()
    transactionTime: string;

    @Column()
    transactionStoreOwner: string;

    @Column()
    transactionStoreName: string;
 
    constructor() {
        if(!this.id) this.id = crypto.randomUUID()
    }
}