import styled from "styled-components";
import cfg from "@src/cfg.json";
import Logo from "@src/components/Logo";


const FooterStyled = styled.footer`
    box-sizing:content-box;
    padding: 20px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-top: 3px solid ${cfg.colors.border};
    background-color: ${cfg.colors.background};
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
    text-align:center;
    font-size: 1.2rem;
    font-family: ${cfg.font};
    font-weight: ${cfg.fontSizes.medium};
    color: ${cfg.colors.subtext};
`

const CopyrightText = styled(Text)`
    margin-bottom: 10px;
    font-size: 1rem;
    text-align:center;
    color: ${cfg.colors.text};
`

const Footer = ()=>{
    return (
        <FooterStyled>
            <Logo width="60px"/>
            <Texts>
                <Text>Email: {cfg.info.email}</Text>
                <Text>Contato: {cfg.info.celular}</Text>
            </Texts>
            <CopyrightText>Dot, {new Date().getFullYear()}. All rights reserved</CopyrightText>
        </FooterStyled>
    )

}

export default Footer;