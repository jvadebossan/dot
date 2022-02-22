import HCaptcha from "@hcaptcha/react-hcaptcha";
import config from "config.json";
import styled from "styled-components";

const CaptchaContainer = styled.div``;
const CaptchaError = styled.span`
    color: red;
`;

const Captcha = ({ error = "", ...props }) => {
    return (
        <CaptchaContainer>
            <HCaptcha sitekey={config.hcaptcha.sitekey} {...props} />

            {error && <CaptchaError>{error}</CaptchaError>}
        </CaptchaContainer>
    );
};

export default Captcha;
