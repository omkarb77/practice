const mongoose= require("mongoose");

const bookSchema =new mongoose.Schema({
    bookName: String,
    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    tags: [String],
    authorName: String,    
    totalPages: Number,
    stockAvailable: Boolean
}, {timeStamps:true});



module.exports = mongoose.model('book',bookSchema);