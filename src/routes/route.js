


const abcd= require('../logger/logger.js')
const a= require('../util/helper.js')
const ab= require('../validator/formatter.js')
const express = require('express');
const router = express.Router();
//router.get('/test-me', function (req, res) {
/*    res.send('My second ever api!')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})
*/
router.get('/test-assignment',function(req, res){
 abcd.message()
// console.log("12")
 a.printDate()
// console.log("====================")
 a.printMonth()
 //console.log("====================")
 a.getBatchInfo()
 //console.log("====================")
 ab.trim1()
 //console.log("====================")
 ab.lowerCase()
 //console.log("=====================")
 ab.upperCase()
 //console.log("=======================")
 res.send("This is the second routes implementation ")
})
module.exports = router;
// adding this comment for no reason