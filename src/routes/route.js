const express = require("express")
const router  = express.Router()
const collageController = require("../controller/collegeController")
const internscontroller = require("../controller/internController")

router.post("/functionup/colleges",collageController.createcollage)
router.post ("/functionup/interns",internscontroller.createinterns)
router.get("/functionup/collegeDetails",collageController.getcollegeDetails)
module.exports = router;