const {registerUser, loginUser} = require("../lib/user")
const {errorHandler} = require("../utils/errorHandlers")

class UserController{

    static async registerUser(req, res){
        try {
            await registerUser(req,res)
            res.json({})
        } catch(error){
            res.json(error.message);
        }


    }

    static async LoginUser(req, res){
        try{
            await loginUser(req)
            res.json({res:"Logged in successfully"})
        }catch(error){
           res.json({ error:errorHandler(error)})
        }
    }
}
module.exports = UserController;