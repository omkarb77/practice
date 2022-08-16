const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")

router.post("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook )
router.get("/bookList", BookController.bookList  )
router.get("/getBooksInYear", BookController.getBooksInYear  )
router.post("/getParticularBooks", BookController.getParticularBooks  )
router.get("/getXINRBooks",  BookController.getXINRBooks  )
router.get("/getRandomBooks", BookController.getRandomBooks )


module.exports = router;