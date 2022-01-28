import logoSrc from "@src/images/logo.svg";

const Logo = ({width,...props})=>{
    return (
        <img src = {logoSrc} width={width} alt="Logo dot" {...props}></img>
    )
}

export default Logo;