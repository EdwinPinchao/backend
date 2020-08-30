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

 async function getMessage(filterUser) {
  //  return list;
  let filter ={};
  if(filterUser !== null){
    filter= {user: filterUser};
  }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message){
    console.log(message);
    //buscar en al base de datos
    const foundMessage = await Model.findOne({
        _id: id
        
    });

    foundMessage.message= message; 
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
 return Model.deleteOne({
    _id: id
});
    
}
module.exports={
    add:addMessage,
    list: getMessage, 
    updateText: updateText,
    remove: removeMessage,
    //get 
    //update
    //delete
}