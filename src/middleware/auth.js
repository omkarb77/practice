const jwt = require("jsonwebtoken")




const authenticate = function (req, req, next) {
    //check the token in request header
    //validate this token
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
    }
    next()
}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-Auth-token"];
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
        if (!decodedToken)
            return res.send({ status: false, msg: "token is invalid" });
        else {
            if (decodedToken.userId == userId) {
                next()
            } else {
                return res.send({ status: false, msg: "'User logged is not allowed to modify the requested users data" })
            }
        }
    next()
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise