//================Imports====================
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
const flash = require('express-flash');
app.use(flash());
//=============Schemas=======================
const UserSchema = new mongoose.Schema({
  name: {type:String, required:[true, "wassap"],minlength:6},
  age: {type: Number, min: [3, " Hey you need more than one number !"],max:150}
});
const User = mongoose.model('User', UserSchema);
// ============== !!!! ======================= 



app.get("/", (req, res) => {
  User.find()
  .then(data =>res.render('index',{users:data}))
  .catch(err => res.json(err));
});


app.post('/users', (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.save()
  .then(newUserData => res.redirect('/'))
  .catch(err =>{
    console.log("We have an error!",err);
    for (var key in err.errors){
      req.flash('registration', err.errors[key].message)
    }
    res.redirect('/');
  })
});





app.listen(8000, () => console.log("listening on port 8000"));