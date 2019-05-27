const {
    errorHandler
} = require('../utils/errorHandlers')
const {
    createShoppingList,
    getAllShoppingLists,
    getSingleShoppingList,
    updateShoppingList,
    deleteShoppingList
} = require('../lib/shoppingList')

class shoppingListController {
    static async createShoppingListController(req, res) {
        try {
            const response = await createShoppingList(req, res)
            res.json(response)
        } catch (error) {
            errorHandler(error)
        }
    }
    static async getAllShoppingListController(req, res) {
        try {
            const response = await getAllShoppingLists()
            res.json(response)
        } catch (error) {
            errorHandler(error)
        }
    }
    static async getSingleShoppingListController(req, res) {
        try {
            const response = await getSingleShoppingList(req, res)
            res.json(response)
        } catch (error) {
            errorHandler(error)
        }
    }
    static async updateShoppingListController(req, res) {
        try {
            const response = await updateShoppingList(req, res)
            res.send(response)
        } catch (error) {
            errorHandler(error)
        }
    }
    
    static async deleteShoppingListController(req, res) {
        try {
            const response = await deleteShoppingList(req, res)
            res.send(response)
        } catch (error){
            errorHandler(error)
        }
    }

}
module.exports = shoppingListController;