//traer mongoose
const db= require('mongoose');

// una buena práctica en ves de utilizar los callbacks es 
// usar las promesas
//global es un Objeto especifico
db.Promise = global.Promise;

// cuando crear una conexión a la base de datos funcion

//'mongodb://localhost:27017/mydb'
async function connect(url){
// realizar la coneccion mlab para la conexion de BD
await db.connect( url,{
useNewUrlParser: true,    
useUnifiedTopology:true,
});
console.log('[db] conectada con [exito');
}

module.exports= connect;