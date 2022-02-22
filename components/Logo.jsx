import Image from "next/image";
import logoSrc from "@/images/logo.svg";

const Logo = ({ width, ...props }) => {
    return <Image src={logoSrc} width={width} alt="Logo dot" {...props} />;
};

export default Logo;
