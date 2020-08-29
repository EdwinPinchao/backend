// crear un mooc falsear la BD o servicio para validar 
// constantemente responsabilidad [unica de ]
// la capa de almacenamiento

const list= [];

function addMessage(message) {
    list.push(message);

}

function getMessage() {
    return list;
}

module.exports={
    add:addMessage,
    list: getMessage,
    //get 
    //update
    //delete
}