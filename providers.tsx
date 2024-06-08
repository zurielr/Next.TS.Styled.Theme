"use client";

import { ThemeProvider } from "next-themes";
import StyledComponentsRegistry from "./lib/registry";
import React from "react";
import GlobalStyle from "./app/GlobalStyle";

function Providers(props: React.PropsWithChildren) {
    return (
    <StyledComponentsRegistry>
        <ThemeProvider>
            <GlobalStyle />
            { props.children }
        </ThemeProvider>
    </StyledComponentsRegistry>);
}

export default Providers;