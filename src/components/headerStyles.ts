import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${p => p.theme["gray-900"]};
    padding: 2.5rem 0px 7.5rem;

`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0px;
    background-color: ${p => p.theme["green-500"]};
    color: ${p => p.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: ${p => p.theme["green-700"]}
    }

`;