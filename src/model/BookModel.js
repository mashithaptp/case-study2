const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ptpm:mascot@cluster0.0jw4qon.mongodb.net/casestudy2?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;