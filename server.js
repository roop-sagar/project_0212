const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Registered = require('./models/register-model');

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const db_url = process.env.DB_URL;

app.use(cors({origin:"*"}));

mongoose.connect(db_url).then(() => console.log('DB connected'));

app.post('/register', async(req,res)=>{
    const {username,email,password} = req.body;
    let newUser = new Registered({
        username,
        email,
        password
    });
    await newUser.save();
    res.send({
        message:'Registered Successfully'
    });
});
app.listen(PORT,()=>{
    console.log('listening on port '+ PORT);
})
