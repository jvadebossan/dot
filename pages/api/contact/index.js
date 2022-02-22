import config from "config";
import { BaseError } from "api/errors/errors";
import ContactForm from "api/models/ContactForm";
import nc from "next-connect";
import { Captcha } from "api/services/captcha";
import { Email } from "api/services/email";
import { contactEmail } from "api/templates/contactEmail";
import checkBody from "api/utils/checkBody";

const handler = nc({
    onError: (err, _, res) => {
        console.error(err);
        res.status(500).send({
            code: 500,
            message: "Something went wrong!",
        });
    },
});

handler.post(async (req, res) => {
    /*
        - Checar se o body contém todas as informações do formulário do contato.
        - Enviar e-mail com o nodeMailer.
    */

    const missingParams = checkBody(ContactForm, req.body);

    if (missingParams.length) {
        return res.status(400).send({
            code: 400,
            message: `Some params are missing! ${JSON.stringify(
                missingParams
            )}`,
        });
    }

    const { token: captchaToken } = req.body;

    try {
        if (!(await Captcha.verify(captchaToken))) {
            return res.status(400).send({
                code: 400,
                message: "Invalid token!",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            code: 500,
            message: "Something went wrong!",
        });
    }

    const { name, lastName, email, celular, message } = req.body;
    const contactHtml = contactEmail(name, lastName, email, celular, message);

    try {
        await Email.send({
            to: config.get("api.email.to"),
            subject: "Novo contato com a Dot!",
            html: contactHtml,
        });

        res.status(200).send({
            code: 200,
            email: contactHtml,
        });
    } catch (err) {
        console.error(err);

        let statusCode = 500;

        if (err instanceof BaseError) {
            statusCode = err.statusCode;
        }

        return res.status(statusCode).send({
            code: statusCode,
            message: "Something went wrong!",
        });
    }
});

export default handler;
