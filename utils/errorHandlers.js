class InvalidLoginError extends Error {
    constructor(message) {
        message = message || "Invalid login Credentials"
        super(message)
        this.name = "InvalidLoginError"
    }
}
class InvalidUserError extends Error {
    constructor(message) {
        message = message || "User not registered"
        super(message)
        this.name = "InvalidUserError"
    }
}

class MissingParamsError extends Error {
    constructor(message) {
        message = message || "Missing some parameters"
        super(message)
        this.name = "MissingParamsError"
    }
}

class InvalidParamsError extends Error {
    constructor(message) {
        message = message || "Wrong parameters provided"
        super(message)
        this.name = InvalidParamsError

    }
}

const errorHandler = (error) => {
    if (error instanceof InvalidLoginError) {
        return error.message
    }
    if (error instanceof InvalidUserError) {
        return error.message
    }
    if (error instanceof MissingParamsError) {
        return error.message
    }
    if (error instanceof InvalidParamsError) {
        return error.message
    }
    return "Internal Server error"
}
module.exports = {
    InvalidLoginError,
    InvalidUserError,
    InvalidParamsError,
    MissingParamsError,
    errorHandler
}