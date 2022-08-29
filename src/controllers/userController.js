const UserModel= require("../models/userModel")
 
const createUser= async function (req, res) {
  let data = req.body
    let savedData= await UserModel.create(data)
    res.send({data: savedData})
 
}
 
 
const getUser = async function (req, res){
    let saveData = await UserModel.find()
    res.send({data: saveData})
}
 
module.exports.createUser= createUser
module.exports.getUser = getUser
