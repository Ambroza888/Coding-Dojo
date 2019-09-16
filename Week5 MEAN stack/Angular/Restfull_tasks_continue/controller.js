const Task = require('./models')
module.exports = {

  index: function(req,res){
      Task.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: function(req,res){
    Task.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  findById: function(req,res){
    Task.findOne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  update: function(req,res){
    Task.findOneAndUpdate({_id:req.params.id},req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  delete: function(req,res){
    Task.findByIdAndRemove({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }
}
