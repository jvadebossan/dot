const path = require("path");

if (["development"].includes(process.env.NODE_ENV)) {
    require("dotenv").config();
    console.log(process.env.EMAIL_USER);
}

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
