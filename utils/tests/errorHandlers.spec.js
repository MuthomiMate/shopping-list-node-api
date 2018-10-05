const { InvalidLoginError, InvalidUserError, InvalidParamsError, MissingParamsError, errorHandler } = require('../errorHandlers');
describe("Error Handlers", () =>{
    test("should display default error message if invalidLoginerror is called", () =>{
        const error = new InvalidLoginError();
        const errorMessage = "Invalid login Credentials";
        expect(error.message).toEqual(errorMessage);
    })

    test("should display default error message if InvalidUserError is called", () =>{
        const error = new InvalidUserError();
        const errorMessage = "User not registered";
        expect(error.message).toEqual(errorMessage);
    })

    test("should display default error message if InvalidParamsError is called", () =>{
        const error = new InvalidParamsError();
        const errorMessage = "Wrong parameters provided";
        expect(error.message).toEqual(errorMessage);
    })

    test("should display default error message if MissingParamsError is called", () =>{
        const error = new MissingParamsError();
        const errorMessage = "Missing some parameters";
        expect(error.message).toEqual(errorMessage);
    })

})