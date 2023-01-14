const {Router} = require('express');
const router = Router();
const middleware = require('../middleware/middleware');

const AddFriendController = require('../controllers/addFriendsControllers');

router.post('/getFriends',middleware.authMiddleware,AddFriendController.getFriends);
router.post('/addFriend',middleware.authMiddleware,AddFriendController.addFriend)
router.post('/getNonFriends',middleware.authMiddleware,AddFriendController.getNonFriends)

module.exports = router;