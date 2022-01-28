import styled from "styled-components";
import Logo from "@src/components/Logo";

import cfg from '@src/cfg.json'
const colors = cfg.colors
const sizes = cfg.fontSizes

const HeaderBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 0px 70px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoArea = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
`

const Name = styled.h1`
    margin-left: 15px;
    font-family: '${cfg.font}';
    font-size: 1.5rem;
    color: ${colors.subtext};
    font-weight: ${sizes['semi-bold']};
`

const Nav = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Item = styled.a`
    margin-left: 0px;
    font-family: '${cfg.font}';
    font-size: 1.2rem;
    color: ${colors.subtext};
    font-weight: ${sizes.semiBold};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover{
        color: ${colors.main};
    }
    margin-left: 40px;
`


const HeaderContent = () => {
    return(
        <HeaderBox>
            <LogoArea>
                <Logo width={'35px'}/>
                <Name>DOT</Name>
            </LogoArea>
            <Nav>
                <Item href="#sobre">Sobre Nós</Item>
                <Item href="#projetos">Projetos</Item>
                <Item href="/contato">Contato</Item>
            </Nav>
        </HeaderBox>
    )
}

const Header = () => {
    return(
        <HeaderContent />
    )
}

export default Header