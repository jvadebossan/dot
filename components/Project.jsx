import styled from "styled-components";
import config from "config.json";

const Box = styled.div`
    min-width: 300px;
    flex: 0 31%;
    margin: 10px;
    position: relative;

    @media (max-width: 1044px) {
        flex: 0 47%;
    }
`;
const Img = styled.img`
    width: 100%;
    object-fit: contain;
`;
const Btn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 10px 20px;
    background-color: ${config.colors.main};
    text-decoration: none;
    color: ${config.colors.text};
    font-weight: ${config.fontSizes.semiBold};
    font-size: 1.4rem;
    text-align: center;
    border-radius: 360px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-out;
`;

const Title = styled.h1`
    font-weight: ${config.fontSizes.bold};
    color: ${config.colors.text};
    font-size: 3.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-out;
`;

const ProjectInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.3s all;

    &:hover {
        opacity: 1;
        backdrop-filter: blur(5px);
    }
`;

const Project = (props) => {
    return (
        <Box>
            <Img className="background" src={props.img} />
            <ProjectInfo>
                <Title className="title">{props.name}</Title>
                <Btn className="button" href={props.url} target="_blank">
                    Abrir
                </Btn>
            </ProjectInfo>
        </Box>
    );
};

export default Project;
