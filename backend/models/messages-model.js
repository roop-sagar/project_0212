const mongoose = require('mongoose');

const MessagesSchema = mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Message', MessagesSchema);