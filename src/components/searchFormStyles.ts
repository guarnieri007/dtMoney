import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0px;
        background: ${p => p.theme["gray-900"]};
        color: ${p => p.theme["gray-300"]};
        padding: 1rem;
        &:focus {
            box-shadow: 0 0 0 2px ${p => p.theme["green-300"]};
        }

        &::placeholder {
            color: ${p => p.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0px;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${p => p.theme["green-300"]};
        color: ${p => p.theme["green-300"]};
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            background: ${props => props.theme["green-500"]};
            border-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }

`