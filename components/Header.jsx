import styled from "styled-components";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import Link from "next/link";

import config from "config.json";

const HeaderBox = styled.div`
    width: 100%;
    height: ${config.style.header.height};
    position: absolute;
    top: 0;
    left: 0;
    padding: 0px ${config.style.body.padding};
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`;

const LogoArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
`;

const Name = styled.h1`
    margin-left: 15px;
    font-size: 1.5rem;
    color: ${config.colors.subtext};
    font-weight: ${config.fontSizes.semiBold};
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${config.colors.subtext};

    @media (max-width: 500px) {
        position: fixed;
        width: 70vw;
        height: 100vh;
        top: 0;
        right: -100%;
        transition: 0.3s all;
        background-color: ${config.colors.main};
        color: white;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 20px;

        z-index: 999;

        &.active {
            right: 0;
        }

        & > li {
            margin: 10px 0;
        }
    }
`;

const StyledItem = styled.li`
    display: block;
    margin-left: 0px;
    font-size: 1.2rem;
    font-weight: ${config.fontSizes.semiBold};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
        color: ${config.colors.main};
    }
    margin-left: 40px;
`;

const Item = ({ children, ...props }) => {
    return (
        <Link {...props}>
            <StyledItem>{children}</StyledItem>
        </Link>
    );
};

const routes = {
    "/contato": {
        name: "Home",
        href: "/",
    },
    "/": {
        name: "Contato",
        href: "/contato",
    },
};

const HeaderContent = ({ absolute }) => {
    const router = useRouter();

    return (
        <HeaderBox className={absolute && "absolute"}>
            <LogoArea>
                <Logo width={"35px"} />
                <Name>DOT</Name>
            </LogoArea>
            <Nav className="">
                <Item href="/#sobre">Sobre Nós</Item>
                <Item href="/#projetos">Projetos</Item>

                {
                    /*
                    Aqui renderizamos o último item do menu dependendo da url atual do usuário.

                    Se a url atual (o pathname, mais especificamente) existir dentro de routes,
                    que contém objetos com nome e href, utilizamos essas informações para colocar no item.
                */
                    routes[router.pathname] ? (
                        <Item href={routes[router.pathname].href}>
                            {routes[router.pathname].name}
                        </Item>
                    ) : (
                        <Item href="/">Home</Item>
                    )
                }
            </Nav>
        </HeaderBox>
    );
};

const Header = () => {
    return <HeaderContent />;
};

export default Header;
