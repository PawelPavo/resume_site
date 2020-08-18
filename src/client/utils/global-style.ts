// @ts-nocheck
import { createGlobalStyle } from 'styled-components';

// creates style for the whole website and toggles between themes
export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        min-height: 100vh;
        transition: 0.2s linear;
        font-family: "Courier New", Courier, monospace;
    }
`;