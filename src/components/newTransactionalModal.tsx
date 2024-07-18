import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./newTransactionalModalStyles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
export function NewTransactionalModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title> Nova Transação</Dialog.Title>
                <CloseButton >
                    <X size={24} />
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}