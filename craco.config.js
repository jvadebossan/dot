const path = require("path");
const root = path.resolve(__dirname);

module.exports = {
    webpack:{
        alias:{
            "@src": `${root}/src`
        }
    }
}