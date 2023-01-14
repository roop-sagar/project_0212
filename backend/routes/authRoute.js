const {Router} = require('express');
const router = Router();

const authController = require('../controllers/authControllers');

router.post('/register', authController.signup);
router.post('/login', authController.login);

module.exports = router;