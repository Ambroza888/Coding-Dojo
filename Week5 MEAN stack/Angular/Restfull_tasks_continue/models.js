const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_API', {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
  title:String,
  description: {type:String,default:null},
  completed:{type:Boolean,default:false}
},{timestamps:true})
const Task = mongoose.model('Tasks',TaskSchema);
module.exports = Task;