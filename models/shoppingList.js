const mongoose = require('mongoose')

const shoppingListSchema = new mongoose.Schema({
    _id: String,
    shopping_list: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    }]
})

const shoppingList = mongoose.model("shoppinglists", shoppingListSchema);
module.exports = shoppingList;