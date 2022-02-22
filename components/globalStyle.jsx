import { createGlobalStyle } from "styled-components";
import config from "config.json";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        font-family: '${config.style.body.font}';
        width:100vw;
        height:max-content;
        background-color: ${config.colors.background};
        overflow-x:hidden;
    }
`;
export default GlobalStyle;
