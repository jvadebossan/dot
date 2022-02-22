import styled from "styled-components";
import config from "config.json";

import { IconContext } from "react-icons";

const AboutCardTitle = styled.h1`
    color: white;
    font-size: 1.6rem;
    font-weight: ${config.fontSizes.semiBold};
`;

const AboutCardInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const AboutCardStyled = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    width: 300px;
    min-height: 200px;
    margin: 10px;
    padding: 20px;
    background-color: ${config.colors.card};
    border-radius: 10px;
    color: #737380;
    flex: 1 47%;
    @media (max-width: 500px) {
        min-width: 300px;
    }
`;

const AboutCardImage = styled.img`
    width: 32px;
`;

const AboutCard = ({ icon: Icon, title, content }) => {
    return (
        <AboutCardStyled>
            <AboutCardInfo>
                {typeof Icon === "string" ? (
                    <AboutCardImage alt={`Ícone do card ${title}`} src={Icon} />
                ) : (
                    Icon && (
                        <IconContext.Provider
                            value={{
                                size: "32px",
                                color: "#8257E5",
                                style: {
                                    marginRight: "10px",
                                },
                            }}
                        >
                            <Icon />
                        </IconContext.Provider>
                    )
                )}
                <AboutCardTitle>{title}</AboutCardTitle>
            </AboutCardInfo>
            {content}
        </AboutCardStyled>
    );
};

export default AboutCard;
