import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    *,*::before,*::after{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    #root{
        overflow-x:hidden;
    }
`
export default Global;