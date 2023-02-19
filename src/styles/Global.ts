import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.backgroundWhite};
    -webkit-font-smoothing: antialiased;
    height: 100vh;
}

body, input, text-area, button {
    font-family: ${({ theme }) => theme.fonts.regular};
}

a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    transition: transform 0.6s;
}

input {
  outline: none;
}

`;
