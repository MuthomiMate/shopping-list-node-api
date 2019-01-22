const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

const UserController = require('./controllers/userController');
const shoppingListController = require('./controllers/shoppingListController')

router.post('/Login', UserController.loginUser)
router.post('/register', UserController.registerUser);
router.get('/', (req, res) => {
    res.json({
        response: 'Welcome to the node api entrypoint'
    });
})
router.post('/shoppinglist', shoppingListController.createShoppingListController)
router.get('/shoppinglist', shoppingListController.getAllShoppingListController)
router.get('/shoppinglist/:id', shoppingListController.getSingleShoppingListController)
router.patch('/shoppinglist/:id', shoppingListController.updateShoppingListController)

module.exports = router;