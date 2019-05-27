const pushId = require('pushid')
const {
    splitObjects
} = require('../utils/GeneralUtils')
const shoppingList = require('../models/shoppingList')
exports.createShoppingList = async (req, res) => {
    await splitObjects(req.body, res)
    const {
        name
    } = req.body
    if (!name) res.json({
        error: 'please enter a name'
    })
    const checkIfExists = shoppingList.find({
        shopping_list: name
    })
    if (checkIfExists) res.json({
        error: 'shopping list with that name exists'
    })
    const userId = {
        _id: pushId()
    }
    Object.assign(req.body, userId, {
        shopping_list: name
    })
    const list = new shoppingList({ ...req.body
    })
    list.save()
    return req.body
}

exports.getAllShoppingLists = async () => {
    const allShoppingLists = shoppingList.find({})
    return allShoppingLists
}

exports.getSingleShoppingList = async (req, res) => {
    const singleShoppingList = await shoppingList.findById(req.params.id)
    if (!singleShoppingList) res.json({
        error: 'shopping list with that id cannot be found'
    })
    return singleShoppingList
}

exports.updateShoppingList = async (req, res) => {
    const checkName = await shoppingList.findOne({
        shopping_list: req.body.shopping_list
    })
    if (checkName) res.json({
        error: 'Another shopping list with that name exists'
    })
    const request = await shoppingList.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    if (!request) res.json({
        error: 'shopping list does not exist'
    })
    return 'shopping list updated'
}

exports.deleteShoppingList = async (req, res) => {
    const deletedShoppingList = await shoppingList.remove({
        _id: req.params.id
    })
    if (!deletedShoppingList.n) res.json({
        error: 'shopping list does not exist'
    })
    return 'shopping list deleted'
}