import styled from 'styled-components'
import cfg from '@src/cfg.json'

import { Layout } from "@src/components/Layout"
import background from "@src/images/background.png"
const colors = cfg.colors


//banner
const BannerBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
`

const Banner = () => {
    return(
        <BannerBg>
            
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