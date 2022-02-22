import styled from "styled-components";
import config from "config.json";
import { useState } from "react";
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { validateElement } from "validation/validateElement";
import Captcha from "@/components/Captcha";

const StyledInput = styled.input`
    padding: 20px;
    background-color: ${config.colors.card};
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 1.2rem;
    width: 100%;
    margin-bottom: 5px;

    &:focus {
        outline: none;
    }
`;

const InputContainer = styled.div`
    flex: 0 49%;
    margin: 10px 0;

    @media (max-width: 700px) {
        flex: 0 100%;
    }
`;

const InputError = styled.span`
    color: red;
`;

const Input = ({ onChange, ...props }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);

    const inputRef = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    const validate = (event) => {
        setError(validateElement(event.target).message);
    };

    const handleFocus = () => {
        setError(null);
    };

    const handleInvalid = (event) => {
        event.preventDefault();
        validate(event);
    };

    return (
        <InputContainer>
            <StyledInput
                ref={inputRef}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={validate}
                onInvalid={handleInvalid}
                {...props}
            />

            {error && <InputError>{error}</InputError>}
        </InputContainer>
    );
};

const TextAreaContainer = styled.div`
    flex: 0 100%;
`;

const StyledTextArea = styled.textarea`
    padding: 20px;
    background-color: ${config.colors.card};
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 1.2rem;
    font-family: inherit;
    font-weight: inherit;
    margin: 10px 0;
    resize: none;
    height: 150px;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

const TextArea = ({ onChange, ...props }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);

    const inputRef = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    const validate = (event) => {
        setError(validateElement(event.target).message);
    };

    const handleFocus = () => {
        setError(null);
    };

    const handleInvalid = (event) => {
        event.preventDefault();
        validate(event);
    };

    return (
        <TextAreaContainer>
            <StyledTextArea
                ref={inputRef}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={validate}
                onInvalid={handleInvalid}
                {...props}
            />
            {error && <InputError>{error}</InputError>}
        </TextAreaContainer>
    );
};

const Fieldset = styled.fieldset`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: none;
    width: 100%;
`;

const Button = styled.button`
    padding: 15px 80px;
    color: white;
    background-color: ${config.colors.main};
    border: none;
    border-radius: 30px;
    font-size: 1.3rem;
    cursor: pointer;

    margin-top: 10px;

    &:active {
        outline: none;
    }
`;

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        celular: "",
        message: "",
        token: "",
    });

    const [captchaError, setCaptchaError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!form.token) {
            return setCaptchaError("É necessário preencher o captcha.");
        }

        try {
            const info = await (
                await fetch("/api/contact", {
                    body: JSON.stringify(form),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                })
            ).json();

            console.log(info);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        setForm((previousForm) => ({
            ...previousForm,
            [event.target.id]: event.target.value,
        }));
    };

    const handleVerify = (token) => {
        setForm((previousForm) => ({
            ...previousForm,
            token,
        }));

        setCaptchaError("");
    };

    return (
        <StyledContactForm onSubmit={handleSubmit}>
            <Fieldset>
                <Input
                    required
                    autocomplete="name"
                    id="name"
                    placeholder="Nome:"
                    onChange={handleChange}
                />
                <Input
                    required
                    autocomplete="family-name"
                    id="lastName"
                    placeholder="Sobrenome:"
                    onChange={handleChange}
                />
                <Input
                    required
                    autocomplete="email"
                    type="email"
                    id="email"
                    placeholder="Email:"
                    onChange={handleChange}
                />
                <Input
                    required
                    autocomplete="tel-national"
                    id="celular"
                    type="tel"
                    pattern="\d{2}\s?9\d{4}[\s-]?\d{4}"
                    placeholder="Celular:"
                    onChange={handleChange}
                />

                <TextArea
                    required
                    id="message"
                    minLength="50"
                    maxLength="400"
                    onChange={handleChange}
                    placeholder="Mensagem:"
                />
            </Fieldset>
            <Captcha
                id="token"
                sitekey={config.hcaptcha.sitekey}
                onVerify={handleVerify}
                error={captchaError}
            />
            <Button type="submit">Enviar</Button>
        </StyledContactForm>
    );
};

const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    font-size: 1.6rem;

    @media (max-width: 500px) {
        align-items: center;
        font-size: 1.3rem;
    }
`;

const StyledContact = styled.div`
    width: 100%;
    margin-top: ${config.style.header.height};
    display: grid;
    grid-template-columns: 40% auto;
    padding: 30px ${config.style.body.padding};
    min-height: calc(100vh - ${config.style.header.height});

    @media (max-width: 900px) {
        display: flex;
        flex-wrap: wrap;
        min-height: unset;

        & > div {
            padding: 0;
        }

        & > div:first-child {
            margin-bottom: 10px;
        }
    }

    @media (min-height: 720px) {
        align-items: center;
    }

    @media (max-width: 500px) {
        padding: 30px;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FormContainer = styled.div`
    padding-left: 50px;
`;

const StyledContactItem = styled.li`
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
    word-break: break-all;

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

const ContactItem = ({ icon: Icon, children, ...props }) => {
    return (
        <StyledContactItem>
            {Icon && (
                <IconContext.Provider
                    value={{
                        color: "white",
                        style: { marginRight: "10px" },
                    }}
                >
                    <Icon />
                </IconContext.Provider>
            )}

            {children}
        </StyledContactItem>
    );
};

export default function Contact() {
    return (
        <StyledContact>
            <ContactInfo>
                <SectionTitle
                    desc="Quer fazer um orçamento ou tem alguma dúvida? Entre em contato conosco através do formulário ou das formas de contato abaixo:"
                    title="Contato"
                />

                <ContactList>
                    <ContactItem icon={BsInstagram}>/dot</ContactItem>
                    <ContactItem icon={BsWhatsapp}>
                        {config.info.celular}
                    </ContactItem>
                    <ContactItem icon={AiOutlineMail}>
                        {config.info.email}
                    </ContactItem>
                </ContactList>
            </ContactInfo>
            <FormContainer>
                <ContactForm />
            </FormContainer>
        </StyledContact>
    );
}
