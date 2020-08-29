const express= require('express');
const router = express.Router();
const controller= require('./controller');
const response= require('../../network/response')

// ayadir una peticion 
// utilizar el archivo routes nos permite eliminar message de los endpoints
router.get('/', function(req,res){
  controller.getMessage()
  .then((messageList)=>{
      response.success(req,res, messageList, 200)
  }).catch(e=>{
      response.error(req,res, 'Unexpected error',500, e);
  })
 });
 
 //router.post('/message', function(req,res){
   //  res.send('Mensaje anadido');
 //});
 
 router.post('/', function(req,res){
   //console.log(req.query);

   controller.addMessage(req.body.user, req.body.message)
   .then((fullMessage)=>{
       response.success(req, res, `Creada Correstamente ${fullMessage.user} y ${fullMessage.message}`, 201);
   })
   .catch(e=>{
    response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador');
   });
   //if(req.query.error == "ok"){
     //  response.error(req, res, 'Error inesperado', 500, 'es solo una simulacion de los errores');
   //}
   //else{
     //response.success(req, res, 'creado correctamente', 201);
   //}
     //console.log(req.body);
     //res.send('Mensaje '+ req.body.text + 'anadido correctamente');
   //  res.status(201).send({
     //    err:'',
        // body:' Creado correctamente'
   //  });
 
 
 });

 //exportar el router es decir llevarnos esta dos rutas del servidor

 module.exports= router; 