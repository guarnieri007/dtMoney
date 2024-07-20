import { useContext } from "react";
import { Header } from "../components/header";
import { SearchForm } from "../components/searchForm";
import { Summary } from "../components/summary";
import { PriceHighlight, TransactionsContainer, TrasactionalTable } from "./transactionsStyles";
import { TransactionsContext } from "../contexts/transactionalContext";
import { dateFormatter, priceFormatter } from "../utils/formatter";



export function Transactions() {

    const  {transactions} = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TrasactionalTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TrasactionalTable>
            </TransactionsContainer>
        </div>
    )
}