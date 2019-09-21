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

// ################################

app.get("/", (req, res) => {
  if (!req.session.count){
    req.session.count = 0;
  }
  var count = req.session.count += 1

  res.render('index',{count:count});
});


app.post('/UP_two', (req,res) => {
  req.session.count = req.session.count + 1;
  res.redirect('/')
});

app.post('/reset', (req,res)=>{
  req.session.count = 0;
  res.redirect('/')
})




app.listen(5000, () => console.log("listening on port 8000"));