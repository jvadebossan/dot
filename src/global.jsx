import {createGlobalStyle} from "styled-components";
import cfg from "./cfg.json";

const Global = createGlobalStyle`
    *,*::before,*::after{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    #root{
        overflow-x:hidden;
    }

    body{
        font-family: '${cfg.font}';
    }

    html {
        scroll-behavior: smooth;
    }
`
export default Global;