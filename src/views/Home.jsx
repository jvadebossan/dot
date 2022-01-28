import styled from 'styled-components'
import cfg from '@src/cfg.json'

import { Layout } from "@src/components/Layout"
import background from "@src/images/background.png"
import Svg from "@src/images/banner.svg"
const colors = cfg.colors



//banner
const BannerBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 70px
`
const BannerContent = styled.div`
    margin-top: 100px;
    width: 50%;
    height: 55%;
`
const BannerSvg = styled.img`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const BannerTitle = styled.h1`
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.bold};
    color: ${cfg.colors.text};
    font-size: 3.5rem;
`
const BannerDesc = styled.p`
    margin-top: 10px;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    color: ${cfg.colors.subtext};
    font-size: 1.2rem;

`
const Btn = styled.a`
    position: relative;
    top: 100px;
    background-color: ${cfg.colors.main};
    padding: 12px 30px;
    border-radius: 360px;
    color: ${cfg.colors.text};
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
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
    height: 100vh;
    background-color: ${colors.background2};
    border-top: 3px solid ${colors.border};
`

const About = () =>{
    return(
        <AboutBg>

        </AboutBg>
    )
}

//projetos

//avaliações

const Home = () => {
    return(
        <Layout>
            <Banner/>
            <About/>
        </Layout>
    )
}

export default Home