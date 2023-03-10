import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/Default";
import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
