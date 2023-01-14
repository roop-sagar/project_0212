const Registered = require('../models/register-model');

module.exports.getFriends = async (req,res) =>{
    try {
        let {userId} = req.body;
        const user = await Registered.findOne({_id: userId});
        const friends = await Registered.find({_id:user.friends},{"username":1});
        return res.json({ status: 'ok',friends: friends});
    } catch (error) {
        return res.json({ status: 'fail', message: "error in addfrnd controller", error: error });
    }
}

module.exports.getNonFriends = async (req, res) => {
    try{
        let {userId} = req.body;
        const user = await Registered.findOne({_id: userId});
        user.friends.push(userId);
        const nonFriends = await Registered.find({_id:{$nin:user.friends}},{"username":1});
        return res.json({ status: 'ok', nonFriends: nonFriends})
    }
    catch (error) {
        return res.json({ status: 'fail', message: "error in addfrnd controller", error: error });
    }
}

module.exports.addFriend = async(req,res) => {
    try {
        let {userId, friendId} = req.body;
        await Registered.updateOne({_id: userId},{$push:{ friends: friendId}});
        const user = await Registered.findOne({ _id: userId });
        return res.json({status:'ok', message:'friend added successfully', user: user})
    } catch (error) {
        return res.json({ status: 'fail', message: "error in addfrnd controller", error: error });
    }
}