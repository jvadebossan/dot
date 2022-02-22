export class BaseError extends Error {
    constructor({ message, statusCode, stack }) {
        super(message);
        this.statusCode = statusCode;
        this.stack = stack || Error.captureStackTrace(this, this.constructor);
    }
}

export class InternalError extends BaseError {
    constructor({ message, statusCode, stack }) {
        super({
            message:
                message ||
                "Sorry, an unexpected internal error occurred. Try again later.",
            statusCode: statusCode || 500,
            stack: stack,
        });
    }
}

export class ServiceError extends BaseError {
    constructor({ message, statusCode, stack }) {
        super({
            message:
                message ||
                "Unexpected error when trying to run a service. Try again later.",
            statusCode: statusCode || 503,
            stack: stack,
        });
    }
}
