/*
    Array.join() este método convierte una lista tipo Array en un string con los elementos separados por un separador . 
*/


/**
 * Convierte un array en un string con sus elementos separados por un "separator".
 * @function
 * @param {Array} arr Un array con elementos de tipo string.
 * @param {string} sep Un string que sirve como marca de separacion entre elementos
 * @returns {string} Un string con los elementos del array separados por un separador 
 */

function convertToString( arr: string[], sep: string ){
    var newString = arr.join(sep);
    return newString;
}

/* Agrego este comentario para que mi cuenta se agregue como contributor */
