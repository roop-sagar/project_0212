const mongoose = require('mongoose');

const RegisteredUser = mongoose.Schema({
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
    }
});

const Registered = mongoose.model('Registered',RegisteredUser);

module.exports = {
    Registered
}