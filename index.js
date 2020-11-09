//Importando Expres
var express = require("express");
require("dotenv").config();
var puerto =process.env.PORRT || 3001;

var app = express();
var cors = require("./controller/midleweare/cors");
var router = require("./routes/getMoves");
//Configuraciones / Midleweare
app.use(cors);

app.use("/",router);


app.listen(puerto, () => {
  console.log("Servidor andando en el puerto : "+ puerto);
});
