const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
 
 
 
const mid2 = async function (req,res,next){
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
 
  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) {
    return res.send({ status: false, msg: "token must be present" });
  }else{
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    else{
      if(decodedToken.userId == userId){
        next()
      }else{
        return res.send({status : false, msg : "user token is invalid"})
      }
    }
}
}
 
 
// module.exports.mid1 = mid1
module.exports.mid2 = mid2
// module.exports.mid3 = mid3
