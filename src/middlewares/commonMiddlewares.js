const mid1 = function (req, res, next) {
  if (!req.headers["isfreeappuser"]) {
      res.send({ status: false, msg: "the request is missing a mandatory header" })
      return;
  }
  else {
      let data = req.body
      if (req.headers.isfreeappuser == "false"){
          data["isFreeAppUser"] = false
          next()
      }
      else {
          data["isFreeAppUser"] = true
          next()
      }        
  }
}

module.exports.mid1 = mid1


