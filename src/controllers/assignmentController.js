const AssignmentModel= require("../models/assignmentModel")

const createBook1= async function(req,res){
    let data=req.body
    let savedData =await AssignmentModel.create(data)
    res.send({msg:savedData})
}

const bookList = async function(req,res){
    let allBooks =await AssignmentModel.find({},{bookName:1, authorName:1})
    res.send({msg:allBooks})
}

const getBooksInYear= async function (req,res){
    let year =req.body.year 
    let yearPublished = await AssignmentModelModel.Find({year:year})
    res.send({msg:yearPublished})
}


const getParticularData = async function(req,res){
    const data = req.body
    let particularData = await AssignmentModel.find(data)
    res.send({msg:particularData})
}

const getXINRBooks =async function(req,res){
    let INRPrice = await AssignmentModel.find({
        $in:["100INR","200INR","500INR"]
    })
    res.send({msg:INRPrice})
}

const getRandomBooks = async function (req,res){
    let booksReturn =await AssignmentModel.find({
        $or:[{stockAvailable:true},{totalPages:{$gt:500}}]
    })
    res.send({msg:booksReturn})
}





module.exports.createBook1=createBook1;
module.exports.bookList=bookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getParticularData=getParticularData;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;