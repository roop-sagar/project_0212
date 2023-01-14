const {Router} = require('express');
const router = Router();
const middleware = require('../middleware/middleware');

const messageController = require('../controllers/messagesControllers');

router.post('/sendMessage', middleware.authMiddleware, messageController.sendMessage);
router.post('/getMessages', middleware.authMiddleware, messageController.getMessages);

module.exports = router;