const express = require('express');
const message = require('../components/message/network')
//importamos todas las rutas toda la informacion
// de rutas separados 



const routes= function(server){
server.use('/message',message)
}

module.exports= routes;


/**
 * router dentro de nuestra carpeta de networ red donde
 *  realizamos la gestion de todas de red las respuesta 
 * de 
 */