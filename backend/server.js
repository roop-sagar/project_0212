const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
// const expressWs = require('express-ws')(app);

const authRoutes = require('./routes/authRoute');
const profileRoutes = require('./routes/profileRoute');
const addFriendRoute = require('./routes/addFriendRoute');
const messagesRoute = require('./routes/messagesRoute');

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const db_url = process.env.DB_URL;

app.use(cors({ origin: "*" }));


app.use('/',authRoutes);
app.use('/',profileRoutes);
app.use('/',addFriendRoute);
app.use('/',messagesRoute);

mongoose.connect(db_url).then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
});

// app.ws('/', function(ws, req){
//     ws.on('message', (msg)=>{
//         console.log(msg);
//     })
//     ws.on('close'), (msg)=>{
//         console.log(msg);
//     }
// })