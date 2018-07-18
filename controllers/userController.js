const user = require("../models/user");
const {validateEmail, validatePasswordLength} = require("../utils/userUtils")
const {splitObjects} = require("../utils/GeneralUtils")

class UserController{

    static registerUser(req, res){
        try {
            splitObjects(req.body)
            const {email, password} = req.body
            validateEmail(email);
            validatePasswordLength(password)
            const data = new user(req.body)
            -data.save();
            res.json({})
        } catch(error){
            res.json(error.message);
        }


    }
}
module.exports = UserController;