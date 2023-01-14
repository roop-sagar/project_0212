const Messages = require('../models/messages-model');

module.exports.sendMessage = async (req,res) => {
    try {
        const {from,to,message,date} = req.body;
        await Messages.create({
            from,
            to,
            message,
            date
        })
        res.json({status:'ok', message: 'Message Sent'})
    } catch (error) {
        return res.json({ status: 'fail', message: "error in message controller", error: error });
    }
}

module.exports.getMessages = async (req,res) => {
    try {
        const {from , to} = req.body;
        let messages = await Messages.find({$or:[{from:from, to:to},{from:to, to:from}]})
        res.json({status: 'ok', messages: messages})
    } catch (error) {
        return res.json({ status: 'fail', message: "error in message controller", error: error });
    }
}