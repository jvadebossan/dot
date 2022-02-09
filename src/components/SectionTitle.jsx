import styled from 'styled-components'
import cfg from '@src/cfg.json'

const STContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 600px) {
        text-align: center;
        align-items: center;
    }
`
const Title = styled.h1`
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
const Desc = styled.p`
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.semiBold};
    color: ${cfg.colors.subtext};
    font-size: 1.2rem;
    margin-top: 30px;
    @media (max-width: 600px) {
        font-size:1rem;
        text-align: center;
    }
`

const SectionTitle = (props) => {
    return(
        <STContainer>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
        </STContainer>
    )
}

export default SectionTitle