const {Router} = require('express');
const router = Router();
const middleware = require('../middleware/middleware');

const profileController = require('../controllers/profilecontrollers');

router.get('/profile', middleware.authMiddleware, profileController.profile);

module.exports = router;