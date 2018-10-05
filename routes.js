
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
  }));
router.use(bodyParser.json());

const UserController = require('./controllers/userController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser)
router.get('/', (req, res) =>{
    res.json({response: 'Welcome to the node api entrypoint'});
})
module.exports = router;
