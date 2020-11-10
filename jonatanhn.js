/*
    string.toLowerCase() este metodo devuelve lo contrario al de lottie en vez de convertir los strings a Mayusculas los convertira a Minusculas.
*/

/**
 * 
 * @function
 * @param { Array } - data es un arreglo.
 * @param { String } - nombre valor obtenido del arreglo.
 * @param { String } - pais valor obtenido del arreglo.
 */

 /*
  Mi codigo es sencillo, creo la variable let data que contiene un array, despues creo la funcion datashow en la misma llamo a los strings dentro de mi array y con el metodo toUpperCase() los vuelvo mayusculas...5 lineas de codigo exactas + este comentario.
*/
let data = {nombre: 'JonatanHN', pais: 'MEXICO 🇲🇽'}

function datashow(nombre,pais){
	console.log(`Hi my name is ${data.nombre.toLowerCase()} and i am from ${data.pais.toLowerCase()}`);
}
datashow();