const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ptpm:mascot@cluster0.0jw4qon.mongodb.net/casestudy2?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;