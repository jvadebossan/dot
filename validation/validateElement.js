import specificValidators from "./specificValidators";
import validityErrors from "./validityErrors.json";

export const validateElement = (element) => {
    const validator = element.dataset["specific-validator"];

    console.log(element.validity);

    if (validator && specificValidators[validator]) {
        const [_, validErr] = specificValidators[validator]();

        if (validErr) {
            element.setCustomValidity(validErr);
            return {
                valid: false,
                message: validErr,
            };
        }
    } else if (!element.validity.valid) {
        const elementErrors = element.validity;

        for (let error in elementErrors) {
            if (
                elementErrors[error] &&
                validityErrors[element.id] &&
                validityErrors[element.id][error]
            ) {
                return {
                    valid: false,
                    message: validityErrors[element.id][error],
                };
            }
        }
    }

    return {
        valid: true,
        message: null,
    };
};
