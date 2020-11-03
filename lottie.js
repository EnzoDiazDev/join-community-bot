/*
  String.toUpperCase() convierte en mayusculas una cadena de texto y la retorna sin afectar al string original.
*/

/**
 * Convierte la primer letra de un string a mayusculas y lo retorna.
 * @param {string} str Un string cualquiera.
 * @returns {string} El nuevo string capitalizado.
 */
function capitalize(str){
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
