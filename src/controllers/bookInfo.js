const bookModuels = require("../moduels/bookModuels");

const newBookAdd = async function (req,res){
    let data = req.body;
    let saveData = await bookModuels.create(data);
    res.send({msg:saveData});
};

const getAllBookList = async function (req,res){
    let allBookList =await bookModuels.find();
    res.send({msg:allBookList});
};

module.exports.newBookAdd = newBookAdd;
module.exports.getAllBookList =getAllBookList;
