import styled from "styled-components";
import Logo from "@/components/Logo";
import config from "config.json";

const FooterStyled = styled.footer`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-top: 3px solid ${config.colors.border};
    background-color: ${config.colors.background};
    color: #fff;
`;

const Texts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 25px;
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-family: ${config.font};
    font-weight: ${config.fontSizes.medium};
    color: ${config.colors.subtext};
`;

const CopyrightText = styled(Text)`
    margin-bottom: 10px;
    font-size: 1rem;
    text-align: center;
    color: ${config.colors.text};
`;

const Footer = () => {
    return (
        <FooterStyled>
            <Logo width="60px" />
            <Texts>
                <Text>Email: {config.info.email}</Text>
                <Text>Contato: {config.info.celular}</Text>
            </Texts>
            <CopyrightText>
                Dot, {new Date().getFullYear()}. All rights reserved
            </CopyrightText>
        </FooterStyled>
    );
};

export default Footer;
