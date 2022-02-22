import nodemailer from "nodemailer";
import config from "config";
import { InternalError, ServiceError } from "api/errors/errors";

const emailConfig = config.get("api.email");

const transporter = nodemailer.createTransport({
    host: emailConfig.get("host"),
    port: emailConfig.get("port"),
    secure: ["development"].includes(process.env.NODE_ENV) ? false : true,
    tls: emailConfig.get("tls"),
    auth: {
        user: emailConfig.get("auth.user"),
        pass: emailConfig.get("auth.pass"),
    },
});

export class Email {
    static async send(options) {
        const requiredOptions = {
            to: "",
            subject: "",
        };

        if (typeof options != "object" || Array.isArray(options)) {
            throw new TypeError(
                `Parameter "options" must be an object! Received: ${JSON.stringify(
                    options
                )}`
            );
        }

        const missingOptions = [];

        for (let requiredOption in requiredOptions) {
            if (!options[requiredOption]) {
                missingOptions.push(requiredOption);
            }
        }

        if (missingOptions.length) {
            throw new InternalError({
                message: `Some required options are missing! ${missingOptions}`,
            });
        }

        try {
            await transporter.sendMail({
                from: `"${emailConfig.get("name")}" <${emailConfig.get(
                    "auth.user"
                )}>`,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            });
        } catch (err) {
            console.log(err);
            throw new ServiceError({
                message: `Unexpected error when trying a send email to ${
                    options.to
                }. ${JSON.stringify(error)}`,
                stack: err.stack,
            });
        }
    }
}
