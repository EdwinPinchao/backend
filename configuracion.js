/***
 * npm init 
 * 
 * se crea el packaje.json
 * 
 * instalamos express el servidor 
 * 
 * npm i express
 * 
 * 
 * saber desde donde vienen las peticiones 
 * llames desde donde llames siempre nos va 
 * a venir lo mismo.
 * 
 * imsomnia o postman 
 * 
 * utilizar el router de express
 * const router= express.Router(); 
 * 
 * permitir separar cabeceras, metodos y url 
 * al maximo 
 * 
 * **devolver informacion en nuestro body 
 * 
 * recibir informacion desde el body query
 * 
 * instalar el bodyparser es una extension de 
 * express
 * 
 * npm i body-parser
 * 
 * como leer las cabeceras
 * 
 * peticion get 
 * 
 * router.get('/message', function(req,res){
   console.log( req.headers);
    res.send('Lista de mensajes');
});
*
cuales seran utiles para el desarrollo

cache control para poder guardar la imagenes
user-agent saber desde donde nos viene SO
accept-encoding 

imagina darle cabeceras especificas para el cliente
es mi servidor, no es mi servidor, cache-control 
de las cabeceras que bienen de las peticiones 

**** tipos de respuestas VAcia, plana , con datos y estructurada
codigos de estatus 
mandar un mesaje 
array o objetos para responder con una peticion

*** forma coherente para que el servidor se entiendan al 100 por 100****

/* respuestass coherentes
responder a una petici[on http de una forma diferente
cada peticion es diferente 

responder a todas las peticiones desde el mismo sitio 
creamos un archivo response.js

llamamos desde el servidor.js


mandar una respuesta personalizada

*** servir archivos estaticos 
html, css, js
js es buenisimo por que no se bloque 


creamos una carpeta publica donde contedra un 
archivo 

index.html

y en el servidor 
app.use('/app', express.static('public'));

si ya tenemos una aplicacion de fronend con 
solo ponerlo en la carpeta public y podemos 
dedicarnos a que nuestra api sea buena.

*** errores e implicaciones de seguridad
todo lo que implica crear un backend 
darle muchisima informacion
cuidadoso son la informaci[on] que entregamos 
al usuario.

peticion de denegaci[on de servicio]
- fuerza bruta para encontrar la clave 
- ingenier[ia social ]

Cuando devolvamos un error debemos ser muy concientes 
de lo que devolvemos 

Un error que sea coherente para eso tenemos los 
log.


DETAILS 



 */