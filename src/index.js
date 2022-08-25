const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
app.use(
    function (req, res, next) {

        let timeAndYear = moment().format("YYYY-MM-DD  hh:mm:ss ")

        // console.log(req.url);             // relative path with query|search params
        console.log(timeAndYear + " , " + req.ip + "  , " + req.url)
        next()
    }
);

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

