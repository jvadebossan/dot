// https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//oauth2.example.com/code&client_id=client_id

const { default: axios } = require("axios");
const AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
const TOKEN_URI = "https://oauth2.googleapis.com/token";

const SCOPE = "https://mail.google.com";
const CLIENT_ID =
    "127508907428-1s68qanur8hd494u5mdjtm434p6mh3qh.apps.googleusercontent.com";

const CLIENT_SECRET = "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";

const getAuthorizationCodeUrl = () => {
    const params = new URLSearchParams({
        scope: SCOPE,
        access_type: "offline",
        include_granted_scopes: true,
        response_type: "code",
        redirect_uri: "http://localhost:2605/oauth/token",
        client_id: CLIENT_ID,
    });

    return `${AUTH_URI}?${params.toString()}`;
};

const getOAuthTokens = async (code) => {
    const params = new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type_authorization_code,
        redirect_uri: "http://localhost:2605",
    });

    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    try {
        return (await axios.post(TOKEN_URI, params, config)).data;
    } catch (err) {
        console.error(err);
        throw new Error(`Something went wrong!`);
    }
};

module.exports = {
    getAuthorizationCodeUrl,
};
