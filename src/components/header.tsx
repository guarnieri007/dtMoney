import { HeaderContainer, HeaderContent, NewTransactionButton } from "./headerStyles";
import logoImg from "../assets/logo.svg"
import  * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionalModal } from "./newTransactionalModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionalModal>
                        
                    </NewTransactionalModal>

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}