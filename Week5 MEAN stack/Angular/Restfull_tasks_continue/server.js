const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// ============== !!!! ======================= 

require('./routes')(app);

//===============server listen ================
app.listen(8000, () => console.log("listening on port 8000"));