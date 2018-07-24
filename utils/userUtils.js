const User = require("../models/user")
const {InvalidParamsError} = require("./errorHandlers")
validateEmail = (email, res) =>{
    const  emailPattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(!emailPattern.test(email)){
        const error = new InvalidParamsError("Invalid Email address")
        res.json({error: error.message})
    }
    return email
}

 validatePasswordLength = (password, res) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if(!passwordRegex.test(password)){
        const error  = new InvalidParamsError("The password must be 8 characters long and must contain small, uppercase, digits and special characters")
        res.json({error: error.message})
    }

 }
 checkUserExists = (email) = () =>{
    const userExists =  User.findOne({email})
    return userExists
 }

module.exports = {
    validateEmail,
    validatePasswordLength,
    checkUserExists
}
