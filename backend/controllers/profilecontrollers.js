const Registered = require('../models/register-model');

module.exports.profile = async (req,res) =>{
    try {
        const user = await Registered.findOne({ _id: id });
        return res.json({ status: 'ok',user:user});
    } catch (error) {
        return res.json({ status: 'fail', message: "error in profileController", error: error });
    }
}