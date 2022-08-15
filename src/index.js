const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const{default:mongoose}=require("mongoose")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://omkar077:BeEHI8wSohCTOfTl@cluster0.tyx7riv.mongodb.net/omkar077?retryWrites=true&w=majority",{
    useNewurlparser:true
}) 
.then( ()=> console.log("Mongodb is connected"))
.catch(  err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
