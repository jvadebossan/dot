const express = require("express");
const { getAuthorizationCodeUrl } = require("./oauth");
const app = express();

const PORT = process.env.PORT || 2605;

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/oauth/url", (_, res) => {
    res.status(200).send(getAuthorizationCodeUrl());
});

app.get("/oauth/token", (req, res) => {
    console.log(req.query);
    res.status(200).send(req.params);
});

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
