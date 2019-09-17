const Cake = require('./models')
module.exports = {

  index: function(req,res){
      Cake.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  create: function(req,res){
    Cake.create(req.body)
    .then(data=>res.json(data))
    .catch(err=> res.json(err));
  },
  delete: function(req,res){
    Cake.findByIdAndRemove({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  },
  update: function(req,res){
    Cake.findOneAndUpdate({_id:req.params.id},{$push:{reviews:req.body}})
    .then(data=>res.json(data))
    .catch(err=>res.json(data));
  },
  findById: function(req,res){
    Cake.findById({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err=> res.json(err))
  }
}  