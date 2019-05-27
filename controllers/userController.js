const {
    registerUser,
    loginUser
} = require("../lib/user")
const {
    errorHandler
} = require("../utils/errorHandlers")

class UserController {

    static async registerUser(req, res) {
        try {
            await registerUser(req, res)
            res.json({})
        } catch (error) {
            res.json(error.message);
        }


    }

    static async loginUser(req, res) {
        try {
            const user = await loginUser(req)
            res.json({
                res: "Logged in successfully",
                token: user
            })
        } catch (error) {
            res.json({
                error: errorHandler(error)
            })
        }
    }
}
module.exports = UserController;