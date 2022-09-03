const express = require('express');
const _ = require('lodash')
const abc = require('../introduction/intro')
const ass1 = require('../logger/logger')
const ass2 = require('../util/helper')
const ass3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // ass1.Greeting()
    // ass2.printDate()
    // ass3.fun()
    let mL = ['January', 'February',
        'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October',
        'November', 'December'];
    mL = _.chunk(mL, 3)
    console.log(mL)

    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    odd = _.tail(odd)
    console.log(odd)

    const arry1 = [1, 2, 1, 3, 4, 3, 5];
    const arry2 = [1, 2, 10, 4, 311, 5];
    const arry3 = [121, 2, 1, 30, 4, 3, 521];
    const arry4 = [1, 2055, 1, 3, 4, 30, 5];
    const arry5 = [1, 20, 1, 3, 45454, 3, 5];
    const arr = _.union(arry1, arry2, arry3, arry4, arry5);
    console.log(arr);

    

    const object = _.fromPairs([['horror', 'The Shining'],
    ['drama', 'Titanic'],
    ['thriller', 'Shutter Island'],
    ['fantasy', 'Pans Labyrinth']])
    console.log(object)

    res.send('My second ever api!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/student', function (req, res) {
    let details = ['Salman', 'Imran', 'Asif']
    res.send(details)

})
router.get('/student-details/:name', function (req, res) {
    console.log('This is the request' + JSON.stringify(req.params))
    let reqParams = req.params
    let studentsName = reqParams.name
    console.log('Name of the student is ', studentsName)
    //
    let studentDetails = studentsName + " " + studentsName
    res.send(studentDetails)

})
router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason