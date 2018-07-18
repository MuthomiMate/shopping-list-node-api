validateEmail = (email) =>{
    const  emailPattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(!emailPattern.test(email)){
        throw new Error("Invalid Email address")
    }
    return email
}

 validatePasswordLength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if(!passwordRegex.test(password)){
        throw new Error("The password must be 8 characters long and must contain small, uppercase, digits and special characters")
    }

 }

module.exports = {
    validateEmail,
    validatePasswordLength
}
