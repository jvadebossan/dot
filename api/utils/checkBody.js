export default (requiredBody, body) => {
    const missingParams = [];

    for (let requiredParam in requiredBody) {
        if (!body[requiredParam]) {
            missingParams.push(requiredParam);
        }
    }

    return missingParams;
};
