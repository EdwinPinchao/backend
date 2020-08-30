// crear un mooc falsear la BD o servicio para validar 
// constantemente responsabilidad [unica de ]
// la capa de almacenamiento

//const list= [];
//traer mongoose
const db= require('mongoose');
const Model= require('./model');

// una buena práctica en ves de utilizar los callbacks es 
// usar las promesas
//global es un Objeto especifico
db.Promise = global.Promise;
// realizar la coneccion mlab para la conexion de BD
db.connect( 'mongodb://localhost:27017/mydb',{
useNewUrlParser: true,    
useUnifiedTopology:true,
});
console.log('[db] conectada con [exito');

function addMessage(message) {
    //list.push(message);

    const myMessage= new Model(message);
    myMessage.save();

}

 async function getMessage() {
  //  return list;
    const messages = await Model.find();
    return messages;
}

module.exports={
    add:addMessage,
    list: getMessage,
    //get 
    //update
    //delete
}