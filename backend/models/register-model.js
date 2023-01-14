const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    friends:{
        type: [String],
        required: false
    }
}
);



module.exports = mongoose.model('ChitchatUser',RegisterSchema);