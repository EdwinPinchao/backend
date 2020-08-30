const express= require('express');

const controller= require('./controller');
const response= require('../../network/response')
const router = express.Router();
// ayadir una peticion 
// utilizar el archivo routes nos permite eliminar message de los endpoints
router.get('/', function(req,res){
  
 // consultas de query para sacar la peticion apra filtrar
  const filterMessages= req.query.user || null;
  controller.getMessages(filterMessages)
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


 // creamos una ruta para modificar modificaciones parciales
 //creado nuestro red, al controlador
 router.patch('/:id',function (req, res) {

  // estamos recibiendo un  ID
   //console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
      response.success(req, res,data,200);
    })
    .catch(e=>{
      response.error(req, res, 'Error Interno', 500, e);
    });

 })

 router.delete('/:id', function (req,res){
   controller.deleteMessage(req.params.id)
   .then(()=>{
     response.success(req,res, 'usuario Elminado',200);
   })
   .catch(e=>{
     response.error(req,res, 'Error Interno', 500);
   })
 })

 module.exports= router; 