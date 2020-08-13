// @ts-nocheck
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        min-height: 100vh;
        transition: 0.2s linear;
    }
`;