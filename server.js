const express = require('express');
const bodyParser = require('body-parser');


//const router = require('./components/message/network');
const router= require('./network/routes');
//const router= express.Router();

let app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//estabamos utilizando los middleware de express pasarle el servidor de ex
//express para crear las rutas
//app.use(router);
router(app);


//app.use('/', function (req,res){
  //  res.send('hola');
//});

// escuchar en un puerto

app.use('/app', express.static('public'));

app.listen(3000);
console.log(`LA aplicacion está escuchando en 
http://localhost:3000`);