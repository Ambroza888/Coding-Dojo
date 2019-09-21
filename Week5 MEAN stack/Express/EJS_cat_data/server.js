const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats", (req, res) => {
  cat = {
    number : 1,
    number: 2
  }
  res.render('all_cats',{num:cat});
});


app.get('/info_cat2', (req,res)=>{
  cuddles = {
    img: "/images/cuddles(1).jpg",
    name: "Cuddles",
    favorite_food: "Spagehetti",
    age: "3",
    sleep_spots: ["Under the bed", "In a sunbeam"],
  };
  res.render('cat_info', {cat:cuddles});
});


app.get('/info_cat1', (req,res)=>{
  papi = {
    img: "/images/cuddles(2).jpg",
    name: "PapiChulio",
    favorite_food: "MEATBALLS",
    age: "101",
    sleep_spots: ["Under the bed", "In a sunbeam","under the car"],
  };
  res.render('cat_info', {cat:papi});
});



app.listen(8000, () => console.log("listening on port 8000"));

