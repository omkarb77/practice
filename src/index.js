const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
 
mongoose.connect("mongodb+srv://Salman:g0Yrkp0tTQ2sVPBP@cluster0.eekagxa.mongodb.net/SA-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
 
 
app.use('/', route)
 
 
 
