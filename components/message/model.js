const mongoose= require('mongoose');

//sacar la clase schema 
 const Schema = mongoose.Schema;

 // todo lo que se guarde en la BD se cree con este 
 // esquema 
 const mySchema = new Schema({
user: String,
message:{ 
    type: String,
    required: true,
},
date: Date,
 });
// coleccion todo lo que tenga este esquema se guarde  en la base datos
 const model = mongoose.model('Menssage', mySchema);
 module.exports= model;




