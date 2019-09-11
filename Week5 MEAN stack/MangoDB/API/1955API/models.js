const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955API', {useNewUrlParser: true});

const PeopleSchema = new mongoose.Schema({
  name:String
},{timestamps:true})
const People = mongoose.model('People',PeopleSchema);
module.exports = People;