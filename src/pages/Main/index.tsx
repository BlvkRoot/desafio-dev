import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, TABLE } from "../../styles";
import { formatISO9075 } from 'date-fns'
interface ITransactions {
    transactions: {
        id: string;
        transactionType: string;
        transactionOccurrenceDate: string;
        transactionValue: number;
        transactionCPF: string;
        transactionCard: string;
        transactionTime: string;
        transactionStoreOwner: string;
        transactionStoreName: string;
    }[]
}
function Main() {
    const [transactionsData, setTransactionsData] = useState<ITransactions[]>([]);
    useEffect(() => {
        const getAllTransactions = async () => {
            const { data } = await api.get<ITransactions>('/transactions');
            setTransactionsData([{ ...transactionsData, transactions: data.transactions }]);
        };
        getAllTransactions();
    }, []);
    return (
        <Container>
            <div>
                <TABLE>
                    <thead>
                        <tr>
                            <th colSpan={8}>Lista de Transações</th>
                        </tr>
                        <tr>
                            <th>Tipo</th>
                            <th>Occorrência</th>
                            <th>Valor</th>
                            <th>CPF</th>
                            <th>Cartão</th>
                            <th>Horário</th>
                            <th>Dono da Loja</th>
                            <th>Loja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactionsData[0]?.transactions.map(data => (
                                <tr key={data.id}>
                                    <td>{data.transactionType}</td>
                                    <td>{`${data.transactionOccurrenceDate.slice(0, 4)}/${data.transactionOccurrenceDate.slice(4, 6)}/${data.transactionOccurrenceDate.slice(6, 8)}`}</td>
                                    <td>{data.transactionValue}</td>
                                    <td>{data.transactionCPF}</td>
                                    <td>{data.transactionCard}</td>
                                    <td>{formatISO9075(Number(data.transactionTime), {
                                        representation: 'time',
                                        format: 'extended'
                                    })}</td>
                                    <td>{data.transactionStoreOwner}</td>
                                    <td>{data.transactionStoreName}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={8}>Total de saldo: {
                                transactionsData[0]?.transactions.reduce((curr, acc, i) => curr + Number(acc.transactionValue),0)
                            }</td>
                        </tr>
                    </tbody>
                </TABLE>
            </div>
        </Container>
    )
}

export default Main