"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }
    
    body {
        color: rgb(var(--foreground-rgb));
        background: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    }
    
    a {
        color: inherit;
        text-decoration: none;
    } 
    :root {
        --primary: #6699cc;
        --on-primary: #e0f5e0;
        --primary-container: #e0f5e0;
        --on-primary-container: #6699cc;
        --secondary: #66cc66;
        --on-secondary: #e0f5e0;
        --secondary-container: #e0f5e0;
        --on-secondary-container: #66cc66;
        --tertiary: #cc9966;
        --on-tertiary: #f5ebe0;
        --tertiary-container: #f5ebe0;
        --on-tertiary-container: #cc9966;
        --E-20: #cc66cc;
        --error: #f5e0f5;
        --on-error: #e0a3e0;
        --error-container: #e0a3e0;
        --on-error-container: #f5e0f5;
        --surface-dim: #d9d9d9;
        --surface-bright: #f2f2f2;
        --surface-container-lowest: #f2f2f2;
        --surface-container-low: #e6e6e6;
        --surface-container: #d9d9d9;
        --surface-container-high: #cccccc;
        --surface-container-highest: #c0c0c0;
        --on-surface: #333333;
        --on-surface-variant: #5a5a5a;
        --outline: #808080;
        --outline-variant: #a6a6a6;
    }
    [data-theme="dark"] {
        --primary: #e0f5e0;
        --on-primary: #6699cc;
        --primary-container: #6699cc;
        --on-primary-container: #e0f5e0;
        --secondary: #e0f5e0;
        --on-secondary: #66cc66;
        --secondary-container: #66cc66;
        --on-secondary-container: #e0f5e0;
        --tertiary: #f5ebe0;
        --on-tertiary: #cc9966;
        --tertiary-container: #cc9966;
        --on-tertiary-container: #f5ebe0;
        --error: #f5e0f5;
        --on-error: #cc66cc;
        --error-container: #cc66cc;
        --on-error-container: #f5e0f5;
        --surface-dim: #333333;
        --surface-bright: #cccccc;
        --surface-container-lowest: #c0c0c0;
        --surface-container-low: #cccccc;
        --surface-container: #808080;
        --surface-container-high: #e6e6e6;
        --surface-container-highest: #f2f2f2;
        --on-surface: #d9d9d9;
        --on-surface-variant: #a6a6a6;
        --outline: #d9d9d9;
        --outline-variant: #5a5a5a;
    }
    [data-theme='dark'] [data-hide-on-theme='dark'],
    [data-theme='light'] [data-hide-on-theme='light'] {
        display: none;
    }
`
export default GlobalStyle;

// const colors: Colors = {
//     P_20: "#6699cc",
//     P_80: "#e0f5e0",
//     P_50: "#a3e0a3",
//     S_20: "#66cc66",
//     S_80: "#e0f5e0",
//     S_50: "#a3e0a3",
//     T_20: "#cc9966",
//     T_80: "#f5ebe0",
//     T_50: "#e0c2a3",
//     E_20: "#cc66cc",
//     E_80: "#f5e0f5",
//     E_50: "#e0a3e0",
//     N_90: "#d9d9d9",
//     N_80: "#f2f2f2",
//     N_100: "#f2f2f2",
//     N_75: "#e6e6e6",
//     N_60: "#d9d9d9",
//     N_25: "#cccccc",
//     N_00: "#c0c0c0",
//     N_10: "#333333",
//     N_30: "#5a5a5a",
//     N_40: "#808080",
//     N_70: "#a6a6a6",
// };