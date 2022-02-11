import styled from 'styled-components'
import cfg from '@src/cfg.json'

import {BsBrush, BsSpeedometer2, BsHddStack} from "react-icons/bs"
import {AiOutlineMobile} from "react-icons/ai"

import { Link } from  'react-router-dom'

import { Layout } from "@src/components/Layout"
import background from "@src/images/background.png"
import Svg from "@src/images/banner.svg"

//components
import AboutCard from '@src/components/AboutCard'
import SectionTitle from '@src/components/SectionTitle'
import Project from '@src/components/Project'

//banner
const BannerBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 70px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const BannerContent = styled.div`
    margin-top: 100px;
    width: 50%;
    height: 55%;
    @media (min-width: 650px) and (max-width: 1024px){
        width: 70%;
    }
    @media (min-width: 300px) and (max-width: 650px){
        width: 100%;
    }
`
const BannerSvg = styled.img`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 1000px) {
        display: none;
    }
`
const BannerTitle = styled.h1`
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.bold};
    color: ${cfg.colors.text};
    font-size: 3.5rem;
    @media (max-width: 500px) {
        font-size: 2.5rem;
        text-align: center;
    }
`
const BannerDesc = styled.p`
    margin-top: 10px;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    color: ${cfg.colors.subtext};
    font-size: 1.2rem;
    @media (max-width: 500px) {
        font-size: 1rem;
        text-align: center;
    }

`
const Btn = styled.a`
    position: relative;
    top: 100px;
    background-color: ${cfg.colors.main};
    padding: 12px 30px;
    border-radius: 360px;
    color: ${cfg.colors.text};
    font-weight: ${cfg.fontSizes.semiBold};
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 500px) {
        padding: 8px 20px;
        top: 50px;
        left: calc(50% - 60px);
    }
`
const Banner = () => {
    return(
        <BannerBg>
            <BannerContent>
                <BannerTitle>Somos a <span style={{color: cfg.colors.main}}>DOT</span></BannerTitle>
                <BannerDesc>Aqui  sua ideia se torna realidade. Desenvolvemos sites e aplicações utilizando as melhores tecnologias do mercado. </BannerDesc>
                <Btn href="/contato">Contato</Btn>
            </BannerContent>
            <BannerSvg src={Svg}/>
        </BannerBg>
    )
}


//about
const AboutBg = styled.div`
    width: 100vw;
    height: auto;
    padding-bottom: 100px;
    background-color: ${cfg.colors.background2};
    border-top: 3px solid ${cfg.colors.border};
    padding: 8% 0;
`
//about text
const AboutContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 50px;
    @media (max-width: 600px) {
        padding: 0px 20px
        text-align: center;
        justify-content: center;
    }
`
const AboutText = styled.div`
    flex: 1;
    width: 100%;
    min-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        min-width: 300px;
        text-align: center;
        align-items: center;
    }
`
const AboutTitle = styled.h1`
    width: 100%;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.bold};
    font-size: 3rem;
    color: ${cfg.colors.text};
    width: fit-content;
    text-decoration: underline wavy ${cfg.colors.main};
    text-underline-offset: 10px;
    @media (max-width: 600px) {
        font-size:2.3rem;
        text-align: center;
    }
`
const AboutDesc = styled.p`
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    color: ${cfg.colors.subtext};
    font-size: 1.2rem;
    width: 90%;
    margin-top: 40px;
    @media (max-width: 600px) {
        font-size:1rem;
        text-align: center;
        width: 100%;
    }
`
const AboutBtn = styled.p`
    margin: 50px 0px;
    width: fit-content;
    padding: 15px 50px;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    background-color: ${cfg.colors.main};
    color: ${cfg.colors.text};
    font-size: 1.3rem;
    border-radius: 360px;
    cursor: pointer;
    @media (max-width: 600px) {
        text-align: center;
        width: 100%;
    }
`
//cards
const AboutCards = styled.ul`
    flex: 2;
    flex-wrap: wrap;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items:center;
`
const About = () =>{
    return(
        <AboutBg>
            <AboutContainer>
                <AboutText>
                    <AboutTitle>Um pouco sobre nós</AboutTitle>
                    <AboutDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</AboutDesc>
                    <Link to="/contato" style={{textDecoration: 'none'}}><AboutBtn>Faça já seu orçamento</AboutBtn></Link>
                </AboutText>
                <AboutCards>
                    <AboutCard title="Design" content="O Design dos sites que criamos são feitos visando um melhor User Experience, além de encaixar com o tipo de produto/serviço que nosso cliente oferece" icon={BsBrush}/>
                    <AboutCard title="Responsividade" content="Todos nossos sites são construidos tendo em mente tanto usuários Mobile quanto usuários de Computador." icon={AiOutlineMobile}/>
                    <AboutCard title="Otimização" content="Nossos sites são feitos da forma mais otimizada possível, para que possam carregar rápido e entregar o conteúdo de forma rápida e eficiente ao usuário" icon={BsSpeedometer2}/>
                    <AboutCard title="Tecnologia" content="Utilizamos as melhores tecnologias do mercado, que também são adotadas por empresas como Facebook, Netflix Instagram e etc." icon={BsHddStack}/>
                </AboutCards>
            </AboutContainer>
        </AboutBg>
    )
}


//projects
const ProjectsBg = styled.div`
    width: 100vw;
    min-height: 80vh;
    height: auto;
    background-color: ${cfg.colors.background};
    border-top: 3px solid ${cfg.colors.border};
    padding: 5% 50px;
    @media (max-width: 600px) {
        padding: 0px 20px
        text-align: center;
    }
`
const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    margin-top: 70px;
    @media (max-width: 600px) {
        text-align: center;
        justify-content: center;
    }
`
const Projects = (props) => {
    return(
        <ProjectsBg>
            <SectionTitle title={props.title} desc={props.desc}/>
            <ProjectsContainer>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/815305065727787062/941749649235140648/codify_banner-min.jpg" url="https://codifycommunity.tk"/>
            </ProjectsContainer>
        </ProjectsBg>
    )
}


//coments

const Home = () => {
    return(
        <Layout>
            <Banner/>
            <About/>
            <Projects title="Projetos" desc="Alguns dos nossos Projetos:"/> 
        </Layout>
    )
}

export default Home