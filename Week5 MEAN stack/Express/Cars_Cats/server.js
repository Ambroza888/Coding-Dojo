const express = require("express");
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/first_assigment', (request, response) => {
  response.send("Hello Express");
});



app.get('/cars', (req,res)=> {
  res.render('cars')
});


app.get('/cats', (req,res)=>{
  res.render('cats')
});

app.listen(8000, ()=> console.log("listening on port 8000"))

app.get()