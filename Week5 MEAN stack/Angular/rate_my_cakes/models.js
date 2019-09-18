const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_API', {useNewUrlParser: true});

const ReviewSchema = new mongoose.Schema({
  comment:{type: String, required: [true, "Product title is required!"], minlength: [10, "Title must be a minimum of 4 characters!"]},
  rating: {type:Number,required:[true, "Need Rating"],min:1},
},{timestamps:true},)

const CakeSchema = new mongoose.Schema({
  url:{type:String,required:[true, "You need to put more than 0 symbols"]},
  bakerName: {type:String,required:[true, "Need more than 0 symbols"]},
  reviews: [ReviewSchema]
},{timestamps:true})
const Cake = mongoose.model('Cake',CakeSchema);
module.exports = Cake;