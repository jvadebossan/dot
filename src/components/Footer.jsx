import styled from "styled-components";
import config from "@src/cfg.json";
import Logo from "@src/components/Logo";

const colors = config.colors
const sizes = config.fontSizes

const FooterStyled = styled.footer`
    box-sizing:content-box;
    padding: 20px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color: ${colors.background};
    color: #fff;
`

const Texts = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin: 25px;
`

const Text = styled.p`
    font-size: 1.2rem;
    font-family: ${config.font};
    font-weight: ${sizes.medium};
    color: ${colors.subtext};
`

const CopyrightText = styled(Text)`
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${colors.text};
`

const Footer = ()=>{
    return (
        <FooterStyled>
            <Logo width="60px"/>
            <Texts>
                <Text>Email: {config.info.email}</Text>
                <Text>Contato: {config.info.celular}</Text>
            </Texts>
            <CopyrightText>Dot, {new Date().getFullYear()}. All rights reserved</CopyrightText>
        </FooterStyled>
    )

}

export default Footer;