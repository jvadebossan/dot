import config from "config";
import hcaptcha from "hcaptcha";

const secret = config.get("api.captcha.secret");

export class Captcha {
    static async verify(token) {
        return (await hcaptcha.verify(secret, token)).success;
    }
}
