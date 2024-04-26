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
                <Btn href="https://api.whatsapp.com/send?phone=5511961352783&text=Olá. Gostaria de fazer um orçamento de site">Contato</Btn>
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
const AboutBtn = styled.a`
    margin: 50px 0px;
    width: fit-content;
    padding: 15px 50px;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    background-color: ${cfg.colors.main};
    color: ${cfg.colors.text};
    text-decoration: none;
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
        <AboutBg id="sobre">
            <AboutContainer>
                <AboutText>
                    <AboutTitle>Um pouco sobre nós</AboutTitle>
                    <AboutDesc>A DOT é uma Agência Digital focada em oferecer serviços de criação de sites. Atendemos empresas de pequeno, médio e grande porte, nos mais variados segmentos que buscam melhorar a visibilidade na internet. Nós utilizamos as ferramentas mais atualizadas do mercado para fornecer um serviço estável e de qualidade, visando atingir o objetivo esperado pela empresa contratante.</AboutDesc>
                    <AboutBtn href="https://api.whatsapp.com/send?phone=5511961352783&text=Olá. Gostaria de fazer um orçamento de site">Faça já seu orçamento</AboutBtn>
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
        <ProjectsBg  id="projetos">
            <SectionTitle title={props.title} desc={props.desc}/>
            <ProjectsContainer>
                <Project name="CPX Racing" img="https://media.discordapp.net/attachments/816121169602019330/1233502974236688394/cpxracing.png?ex=662d54aa&is=662c032a&hm=18b787362b2a3db583240e787c4d923d19d3b70ca307b3b1da4c689a08e2ab32&=&format=webp&quality=lossless&width=1191&height=670" url="https://cpxracing.com.br"/>
                <Project name="Codify" img="https://media.discordapp.net/attachments/816121169602019330/1233502974861377616/Banner-codify.png?ex=662d54aa&is=662c032a&hm=8c9baab9fc9ddedaf2c50c399b461291c6866e59a36e8d6a60a0635e0f105306&=&format=webp&quality=lossless&width=1191&height=670" url="https://codifycommunity.com.br"/>
                <Project name="Dot" img="https://media.discordapp.net/attachments/816121169602019330/1233502973276192768/dot.png?ex=662d54aa&is=662c032a&hm=c3b50f9725175d2ad5ad4ff4f72742a7bbbebd738232879dc4e3312b1191ed7a&=&format=webp&quality=lossless&width=1191&height=670" url="https://dot-up.vercel.app"/>
                <Project name="Dashboard" img="https://media.discordapp.net/attachments/816121169602019330/1233502973510811751/dashboard.png?ex=662d54aa&is=662c032a&hm=689b01d615d245daea9f10b7b421ed48452f3cb86f8b7d73e40975bfe353e214&=&format=webp&quality=lossless&width=1191&height=670" url="https://simpledashboard123.netlify.app"/>
                <Project name="Medicenter" img="https://media.discordapp.net/attachments/816121169602019330/1233502972902768673/medicenter.png?ex=662d54aa&is=662c032a&hm=fed636918f28172c8689153655c6358935a35cf9fa5f094c4ad1ce326be7d565&=&format=webp&quality=lossless&width=1191&height=670" url="https://medicenter.tk"/>
                <Project name="Repfestas" img="https://media.discordapp.net/attachments/816121169602019330/1233502973796155432/repfestas.png?ex=662d54aa&is=662c032a&hm=e617b1b57fc6e9432c4dedc66572d679922ab495d7eac45a3f9b64b6e2874814&=&format=webp&quality=lossless&width=600&height=337" url="https://repfestas.com"/>
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