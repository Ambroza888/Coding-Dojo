const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_API', {useNewUrlParser: true});

const ReviewSchema = new mongoose.Schema({
  comment:{type:String,minlength:1},
  rating: {type:Number,required:true},
},{timestamps:true})

const CakeSchema = new mongoose.Schema({
  url:String,
  bakerName: {type:String},
  reviews: [ReviewSchema]
},{timestamps:true})
const Cake = mongoose.model('Cake',CakeSchema);
module.exports = Cake;