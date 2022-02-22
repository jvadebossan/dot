import styled from "styled-components";
import config from "config.json";

const STContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
    }
`;
const Title = styled.h1`
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
const Desc = styled.p`
    font-weight: ${config.fontSizes.semiBold};
    color: ${config.colors.subtext};
    font-size: 1.2rem;
    margin-top: 30px;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
    }
`;

const SectionTitle = (props) => {
    return (
        <STContainer>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
        </STContainer>
    );
};

export default SectionTitle;
