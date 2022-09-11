/*
const express = require('express');
const router = express.Router();




const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
//const commonMiddleware=require("../middleware/commonMiddleware")
//const {authenticate, authorize}= require("../middleware/commonMiddleware")
const mid=require("../middleware/commonMiddleware")



/*
router.post("/authors", authorController.createAuthor)


router.post("/login",commonMiddleware.authenticate, authorController.login)


router.post("/Blogs", blogController.createBlog)

router.get("/getBlogs",blogController.getBlogsData)

router.put("/updateBlog/:blogId",blogController.updateBlog)


router.delete("/deleteBlog/:blogId", blogController.deleteBlog)

router.delete("/deleteBlogQuery",blogController.deleteBlogQuery)

router.post("/authors", authorController.createAuthor)

router.post("/Blogs", blogController.createBlog)

router.get("/getBlogs",mid.authenticate,blogController.getBlogsData)

router.put("/updateBlog/:blogId",mid.authorize,blogController.updateBlog)


router.delete("/deleteBlog/:blogId",mid.authorize,blogController.deleteBlog)

router.delete("/deleteBlogQuery",mid.authenticate,blogController.deleteBlogQuery)


router.post("/login", authorController.login)
module.exports = router;
*/
const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const {authenticate, authorize}= require("../middleware/commonMiddleware")


router.post("/authors", authorController.createAuthor)

router.post("/Blogs", blogController.createBlog)

router.get("/getBlogs",authenticate,blogController.getBlogsData)

router.put("/updateBlog/:blogId",authorize,blogController.updateBlog)


router.delete("/deleteBlog/:blogId",authorize,blogController.deleteBlog)

router.delete("/deleteBlogQuery",authenticate,blogController.deleteBlogQuery)


router.post("/login", authorController.login)

module.exports = router;