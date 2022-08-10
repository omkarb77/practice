const express = require('express');
//const myHelper = require('../util/helper')
//const underscore = require('underscore')

const router = express.Router();

/*
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/shoes", function(req, res){
    let queryParams = req.query
    let brand = queryParams.brand
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       //send all the films
      res.send(films) 
})

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})

module.exports = router;
// adding this comment for no reason

const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    let movies = ['Dabangg', 'Dhoom', 'Sairat']
    res.send(movies)
})
/*
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */
/*
    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
*/
/*
router.get('/get/movies/:indexNumber', function(req,res){
    let arr=['Dabangg','Dhoom','Border','Shershah']
    let indexNum = req.params.indexNumber
    let a= arr[indexNum]
    res.send(a)
    if(a>3){
        console.log("Bhoothnath")
    }else {
        console.log("use a valid index")
    }
})






router.get('/GET/films', function (req, res){
    let movies1=[{'id': 1, 'name':'Sher shivray' }, {'id': 2, 'name':'Pawankhind' }, 
    {'id': 1, 'name':'Timepass' }, {'id': 1, 'name':'De Dhakka' }]
    
    
     res.send(movies1) 
})

router.get('/GET/films/:filmId', function(req,res){
    let movies2=[{'id': 1, 'name':'Sher Shivraj' }, {'id': 2, 'name':'Pawankhind' }, 
    {'id': 3, 'name':'Timepass ' }, {'id': 4, 'name':'De dhakka' }]
    
    let value = req.params.filmId //
    
    
    // res.send(value)
    if(value > movies2.length ){
        res.send("enter valid number")
    }else{
    res.send(movies2[value-1])
    }

    
     
})
*/
// assignment 
//assignemnt 1

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
            "soccer"
        ],
    },
]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    res.send(  { data: players , status: true }  )
})
     
module.exports = router;

