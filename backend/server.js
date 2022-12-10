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

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        let exist = await Registered.findOne({email});
        console.log(exist.email);
        if(!exist) {
            return res.send('No User Found');
        }
        if(exist.password !== password) {
            return res.send('Password is incorrect');
        }
        if(exist){
            return res.send('success');
        }
    } catch (error) {
        console.log(error);
        return res.send('error in login post');
    }
})
app.listen(PORT,()=>{
    console.log('listening on port '+ PORT);
})
