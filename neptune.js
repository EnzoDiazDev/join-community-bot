/*
    String.concat(); permite unir dos strings para formar uno solo. 
*/ 

/**
 * Concatena el nombre con un saludo.
 * @param {string} name Un nombre.
 * @returns {string} Retorna la bienvenida.
 */

function welcome(name){
    const welcomeMessage = name.concat(", eres bienvenido aquí");
    return welcomeMessage;
}