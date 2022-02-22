import Head from "next/head";

import styled from "styled-components";
import config from "../config.json";

import { BsBrush, BsSpeedometer2, BsHddStack } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";

import Link from "next/link";
import Svg from "../public/images/banner.svg";

//components
import AboutCard from "../components/AboutCard";
import SectionTitle from "../components/SectionTitle";
import Project from "../components/Project";

//banner
const BannerBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/background.png");
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    padding: 0px 70px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`;
const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 1024px) {
        width: 70%;
    }
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }
`;
const BannerSvg = styled.img`
    width: 40% !important;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 1000px) {
        display: none;
    }
`;
const BannerTitle = styled.h1`
    font-weight: ${config.fontSizes.bold};
    color: ${config.colors.text};
    font-size: 3.5rem;
    @media (max-width: 500px) {
        font-size: 2.5rem;
        text-align: center;
    }
`;
const BannerDesc = styled.p`
    margin-top: 10px;
    font-weight: ${config.fontSizes.semiBold};
    color: ${config.colors.subtext};
    font-size: 1.2rem;
    @media (max-width: 500px) {
        font-size: 1rem;
        text-align: center;
    }
`;

const StyledBannerButton = styled.a`
    margin-top: 60px;
    background-color: ${config.colors.main};
    padding: 12px 30px;
    border-radius: 360px;
    color: ${config.colors.text};
    font-weight: ${config.fontSizes.semiBold};
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
    width: max-content;
    @media (max-width: 500px) {
        padding: 8px 20px;
        top: 50px;
        left: calc(50% - 60px);
    }
`;

const BannerButton = ({ children, ...props }) => {
    return (
        <Link {...props}>
            <StyledBannerButton>{children}</StyledBannerButton>
        </Link>
    );
};

const Banner = () => {
    return (
        <BannerBg>
            <BannerContent>
                <BannerTitle>
                    Somos a{" "}
                    <span style={{ color: config.colors.main }}>DOT</span>
                </BannerTitle>
                <BannerDesc>
                    Aqui sua ideia se torna realidade. Desenvolvemos sites e
                    aplicações utilizando as melhores tecnologias do mercado.{" "}
                </BannerDesc>
                <BannerButton href="/contato">Contato</BannerButton>
            </BannerContent>
            <BannerSvg src={Svg.src} />
        </BannerBg>
    );
};

//about
const AboutBg = styled.div`
    width: 100vw;
    height: auto;
    padding-bottom: 100px;
    background-color: ${config.colors.background2};
    border-top: 3px solid ${config.colors.border};
    padding: 8% 0;
`;
//about text
const AboutContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 50px;
    @media (max-width: 768px) {
        padding: 0px 20px;
        text-align: center;
        justify-content: center;
    }
`;
const AboutText = styled.div`
    flex: 1;
    min-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        min-width: 100%;
        text-align: center;
        align-items: center;
    }
`;
const AboutTitle = styled.h1`
    width: 100%;
    font-weight: ${config.fontSizes.bold};
    font-size: 3rem;
    color: ${config.colors.text};
    width: fit-content;
    text-decoration: underline wavy ${config.colors.main};
    text-underline-offset: 10px;
    @media (max-width: 768px) {
        font-size: 2.3rem;
        text-align: center;
    }
`;
const AboutDesc = styled.p`
    font-weight: ${config.fontSizes.semiBold};
    color: ${config.colors.subtext};
    font-size: 1.2rem;
    width: 90%;
    margin-top: 40px;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
        width: 100%;
    }
`;
const AboutBtn = styled.p`
    margin: 50px 0px;
    width: fit-content;
    padding: 15px 50px;
    font-weight: ${config.fontSizes.semiBold};
    background-color: ${config.colors.main};
    color: ${config.colors.text};
    font-size: 1.3rem;
    border-radius: 360px;
    cursor: pointer;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
//cards
const AboutCards = styled.ul`
    flex: 2;
    flex-wrap: wrap;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const About = () => {
    return (
        <AboutBg id="sobre">
            <AboutContainer>
                <AboutText>
                    <AboutTitle>Um pouco sobre nós</AboutTitle>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </AboutDesc>
                    <Link href="/contato" style={{ textDecoration: "none" }}>
                        <AboutBtn>Faça já seu orçamento</AboutBtn>
                    </Link>
                </AboutText>
                <AboutCards>
                    <AboutCard
                        title="Design"
                        content="O Design dos sites que criamos são feitos visando um melhor User Experience, além de encaixar com o tipo de produto/serviço que nosso cliente oferece"
                        icon={BsBrush}
                    />
                    <AboutCard
                        title="Responsividade"
                        content="Todos nossos sites são construidos tendo em mente tanto usuários Mobile quanto usuários de Computador."
                        icon={AiOutlineMobile}
                    />
                    <AboutCard
                        title="Otimização"
                        content="Nossos sites são feitos da forma mais otimizada possível, para que possam carregar rápido e entregar o conteúdo de forma rápida e eficiente ao usuário"
                        icon={BsSpeedometer2}
                    />
                    <AboutCard
                        title="Tecnologia"
                        content="Utilizamos as melhores tecnologias do mercado, que também são adotadas por empresas como Facebook, Netflix Instagram e etc."
                        icon={BsHddStack}
                    />
                </AboutCards>
            </AboutContainer>
        </AboutBg>
    );
};

//projects
const ProjectsBg = styled.div`
    width: 100vw;
    min-height: 80vh;
    height: auto;
    background-color: ${config.colors.background};
    border-top: 3px solid ${config.colors.border};
    padding: 5% 50px;
    @media (max-width: 768px) {
        padding: 0px 20px;
        text-align: center;
    }
`;
const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    margin-top: 70px;
    @media (max-width: 768px) {
        text-align: center;
        justify-content: center;
    }
`;
const Projects = (props) => {
    return (
        <ProjectsBg id="projetos">
            <SectionTitle title={props.title} desc={props.desc} />
            <ProjectsContainer>
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
                <Project
                    name="Codify"
                    img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg"
                    url="https://codifycommunity.tk"
                />
            </ProjectsContainer>
        </ProjectsBg>
    );
};

//coments

export default function Home() {
    return (
        <>
            <Head>
                <title>Dot</title>
            </Head>

            <Banner />
            <About />
            <Projects title="Projetos" desc="Alguns dos nossos Projetos:" />
        </>
    );
}
