import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { PriceHighlight, TransactionsContainer, TrasactionalTable } from "./transactionsStyles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TrasactionalTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                   - R$59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TrasactionalTable>
            </TransactionsContainer>
        </div>
    )
}