const store= require('./store');

function addMessage(user, message){
    console.log(user);
    console.log(message);

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

}

function getMessages( filterUser) {
    // se utiliza las promesas para saber si algo a fallado en bd o componente

    return new Promise ((resolve, reject)=>{
        // pasarle la informacion a nuestro list

        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
//comprobar que venga la informacion
console.log(id);
console.log(message);
        if(!id || !message)
        {
            reject ('Invalida Informacion'); 
            return false;
        }
        // vamos al store
          const result=  await store.updateText(id, message);

          resolve(result);
        
    });
}

function deleteMessage(id) {
    console.log(id);
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
        .then(()=>{
            resolve();
        })
        .catch(e=>{
            reject(e);
        })
    }) ; 
}

module.exports={
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};