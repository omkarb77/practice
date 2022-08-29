const express = require('express');
const router = express.Router();
const middleware = require("../middleware/auth")
const userController= require("../controllers/userController")
 
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.post("/users", userController.createUser  )
 
router.post("/login", userController.loginUser)
 
//The userId is sent by front end
router.get("/users/:userId", middleware.mid2, userController.getUserData)
 
router.put("/users/:userId", middleware.mid2, userController.updateUser)
 
router.delete("/users/:userId", middleware.mid2,  userController.deleteUser)
 
module.exports = router;
