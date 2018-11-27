require('dotenv').config({
    path: __dirname + '/../.env'
})
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const {
    InvalidParamsError
} = require("./errorHandlers")
validateEmail = (email, res) => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!emailPattern.test(email)) {
        const error = new InvalidParamsError("Invalid Email address")
        res.json({
            error: error.message
        })
    }
    return email
}

validatePasswordLength = (password, res) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (!passwordRegex.test(password)) {
        const error = new InvalidParamsError("The password must be 8 characters long and must contain small, uppercase, digits and special characters")
        res.json({
            error: error.message
        })
    }

}
checkUserExists = async (email) => {
    return await User.findOne({
        email
    })
}
generateUserToken = (id) => {
    return jwt.sign({
        id: id
    }, process.env.SECRET_KEY, {
        expiresIn: 5000
    });
}
verifyToken = (req, res) => {
    const token = req.headers['authorization']
    if (!token) {
        res.json({
            error: "No token provided"
        })
    }
    jwt.verify(token, process.env.SECRET_KEY, function (error, user) {
        if (error) throw error
        console.log(user.id);
    })

}

module.exports = {
    validateEmail,
    validatePasswordLength,
    checkUserExists,
    generateUserToken
}