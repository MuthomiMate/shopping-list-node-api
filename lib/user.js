const bcrypt = require("bcryptjs");
const pushId = require('pushid');
const {validateEmail, validatePasswordLength, checkUserExists, generateUserToken } = require("../utils/userUtils");
const {splitObjects} = require("../utils/GeneralUtils");
const {InvalidLoginError, InvalidUserError} = require("../utils/errorHandlers")


exports.registerUser = async (req, res) =>{
    splitObjects(req.body, res)
    const {email, password} = req.body
    validateEmail(email, res);
    const hashedPassword = bcrypt.hashSync(password)
    req.body.password = hashedPassword;
    req.body._id = pushId();
    validatePasswordLength(password, res)
    const user = await checkUserExists(email)
    if(user){
        res.json({error: "user with that email exists. Please login"})
    }
    const data = new User({...req.body})
    data.save();
}
exports.loginUser = async(req, res) =>{
    const {email, password} = req.body;
    const user = await checkUserExists(email)
    if(!user){ throw new InvalidUserError()}
    const checkPassword = bcrypt.compareSync(password, user.password)
    if(!checkPassword){ throw new InvalidLoginError()}
    return generateUserToken(user._id)
}
