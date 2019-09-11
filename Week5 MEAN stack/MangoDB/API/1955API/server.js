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
const flash = require('express-flash');
app.use(flash());
var moment = require('moment')
app.use(express.json());
// ============== !!!! ======================= 

require('./routes')(app);

//===============server listen ================
app.listen(8000, () => console.log("listening on port 8000"));