import styled from 'styled-components'
import cfg from '@src/cfg.json'

const Box = styled.div`
    width: 384px;
    height: 216px;
    margin-bottom: 50px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`
const Btn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 30%;
    padding: 10px 20px;
    background-color: ${cfg.colors.main};
    position: relative;
    z-index: 2;
    bottom: 330px;
    left: 35%;
    text-decoration: none;
    color: ${cfg.colors.text};
    font-weight: ${cfg.fontSizes.semiBold};
    font-size: 1.4rem;
    text-align: center;
    border-radius: 360px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    opacity: 0;
    transition: all 0.5s ease-out;
    pointer-events: none;
`
const Title = styled.h1`
    position: relative;
    padding-top: 30px;
    z-index: 2;
    bottom: 221px;
    width: 100%;
    height: 100%;
    font-family: '${cfg.font}';
    font-weight: ${cfg.fontSizes.bold};
    color: ${cfg.colors.text};
    font-size: 3.5rem;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s ease-out;
    &:hover {
        opacity: 1;
        backdrop-filter: blur(5px);
    }
    &:hover + .button {
        opacity: 1;
    }
`

const Project = (props) => {
    console.log(props.url)
    return(
        <Box>
            <Img className='background' src={props.img}/>
            <Title className='title' >{props.name}</Title>
            <Btn className='button' href={props.url}>Abrir</Btn>
        </Box>
    )
}

export default Project