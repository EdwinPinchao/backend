const store= require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.error(' [messageControlller] No hay usuario o mensaje');
             reject(' Los datos son incorrectos ');
             return false;
        }

        const fullMessage={

            user: user,
            message: message,
            //agregamos una fecha interna 
            date: new Date(),
        };
       // console.log(fullMessage);
       store.add(fullMessage);
        resolve(fullMessage);
    });
console.log(user);
console.log(message);

}

function getMessage() {
    // se utiliza las promesas para saber si algo a fallado en bd o componente

    return new Promise ((resolve, reject)=>{
        resolve(store.list());
    });
}
module.exports={
    addMessage,
    getMessage,
};