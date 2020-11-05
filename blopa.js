/*
    .slice - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice
    .slice returns a new array of the array to which the method is executed 
*/

/**
 * set a dot at the end of the string.
 * @param  {string | string[]} str a simple string or string array param
 * @return {string} return a string dotted at the end
 */

function setDot(str) {

  if (Array.isArray(str)) { 

    const setToString = str.join(" "); //set the array to a string to show it
    const Dot = setToString.slice(0, str.length - 1) + setToString.slice(1) + "."; //add a dot to the end of the string
    return Dot;

  } else if (typeof str === "string") { 

    const setToArray = str.split(" "); //set the string to an array separating each word by spaces to be able to separate the final word
    const Dot = str.slice(0, setToArray.length - 1) + str.slice(1) + "."; //add a dot to the end of the string
    return Dot;

  } else {

    return "the text sent is not valid"; //case params are not string or array will be returned this

  }

};