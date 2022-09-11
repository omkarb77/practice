const authorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken")


const isValid = function (value) {
  if (typeof (value) === undefined || typeof (value) === null) { return false }
  if (typeof (value) === "string" && (value).trim().length > 0) { return true }
}

const createAuthor = async function (req, res) {
  try {
    let author = req.body
    if (Object.keys(author).length == 0) {
      return res.status(400).send({ status: false, msg: "Invalid request Please provide valid Author  details" });
    }

    if (!author.fname) return res.status(400).send({ msg: " First name is required " })
    if (!author.lname) return res.status(400).send({ msg: " Last name is required " })
    if (!author.email) return res.status(400).send({ msg: " email is required " })
    if (!author.password) return res.status(400).send({ msg: " password is required " })
    let titleEnum = ['Mr', 'Mrs', 'Miss']

    if (!titleEnum.includes(author.title)) {
      res.status(400).send({ status: false, msg: "title should be Mr, Mrs or Miss" })
    }

    let authorCreated = await authorModel.create(author)
    res.status(201).send({ data: authorCreated })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

/*
const authorLogin=async function(req,res){
  let authorName=req.body.email
  let password =req.body.password
  let user = await authorModel.findOne({email:authorName,password:password}) //npm i jsonwebtoken
  if(!user)return res.send({status: false,msg:"authorName and password is not correct "})
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

const login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let data = req.body 

    let user = await authorModel.find({ email: email, password: password });
    if (!user) {
      return res.status(400).send("userId or password worng");
    }
    let token = jwt.sign(
      {
        // author: user._id.toString(),
        author: "Narayana",
      },
      "this-is-secret-key"
    );

    res.status(200).send({ status: true, msg: token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
*/
const login = async function (req, res) {
  try {
      const email = req.body.email
      const password = req.body.password
      const data = req.body

      // let input = req.body
      // let isValid = mongoose.Types.ObjectId.isValid(input)

      if (Object.keys(data) == 0) return res.status(400).send({ status: false, msg: "No input provided" })
      if (!isValid(email)) { return res.status(400).send({ status: false, msg: "Email is required" }) }
      if (!isValid(password)) { return res.status(400).send({ status: false, msg: "Password is required" }) }

      const userMatch = await authorModel.findOne({ email: email, password: password })
      if (!userMatch) return res.status(400).send({ status: false, msg: "Email or Password is incorrect" })

      const token = jwt.sign({
          userId: userMatch._id.toString() , expiresIn: "1h"
      }, "Secret-Key")

      res.setHeader("x-api-key", "token");
      return res.status(200).send({ status: true, msg: "You are successfully logged in", token })

  }
  catch (error) {
      console.log(error)
      return res.status(500).send({ msg: error.message })
  }
}



module.exports.createAuthor = createAuthor
module.exports.login = login
module.exports.isValid=isValid
