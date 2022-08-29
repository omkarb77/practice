const jwt = require("jsonwebtoken");
const { trusted } = require("mongoose");
const userModel = require("../models/userModel");
 
 
const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};
 
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
 
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id,
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
 
 
const getUserData = async function (req, res) {
 
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
 
  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};
 
 
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData , {new: true});
  res.send({ status: true , data: updatedUser });
};
 
 
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set :{isDeleted : true}} , {new : true});
  res.send({ status: true , data: updatedUser });
};
 
 
 
 
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

