const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookInfo");

router.post("/add-newbook", bookController.newBookAdd);

router.get("/get-booklistdata",bookController.getAllBookList);




module.exports = router;
// adding this comment for no reason