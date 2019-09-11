const People = require('./models')
module.exports = {

  index: function(req,res){
    People.find()
    .then(data =>res.json(data))
    .catch(err => res.json(err));
  },
  new: function(req,res){
    var person = People();
    person.name = req.params.name
    person.save()
    .then(data => res.redirect('/'))
    .catch(err => res.json(err));
  },
  remove: function(req,res){
    People.remove({name:req.params.name})
    .then(data => res.redirect('/'))
    .catch(err => res.json(err))
  },
  see: function(req,res){
    People.find({name:req.params.name})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  }
}