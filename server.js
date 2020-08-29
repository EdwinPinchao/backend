const express = require('express');
const bodyParser = require('body-parser');

const response= require('./network/response')

const router= express.Router();

let app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);

// ayadir una peticion 
router.get('/message', function(req,res){
   console.log( req.headers);
   res.header({
       "custom-headder" : "nuetro valor personalizado",
   });
    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de Mensajes');
});

//router.post('/message', function(req,res){
  //  res.send('Mensaje anadido');
//});

router.post('/message', function(req,res){
  console.log(req.query);
  if(req.query.error == "ok"){
      response.error(req, res, 'Error inesperado', 500, 'es solo una simulacion de los errores');
  }
  else{
    response.success(req, res, 'creado correctamente', 201);
  }
    console.log(req.body);
    //res.send('Mensaje '+ req.body.text + 'anadido correctamente');
  //  res.status(201).send({
    //    err:'',
       // body:' Creado correctamente'
  //  });


});
//app.use('/', function (req,res){
  //  res.send('hola');
//});

// escuchar en un puerto

app.use('/app', express.static('public'));

app.listen(3000);
console.log(`LA aplicacion está escuchando en 
http://localhost:3000`);