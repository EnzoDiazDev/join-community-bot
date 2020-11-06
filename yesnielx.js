/*
    Array.find() este método devuelve el primer valor de un array que cumpla la funcion proporcionada.
*/

const ArrayExample = [
  {
    nombre: "Manzanas",
    cantidad: 20,
  },
  {
    nombre: "Aguacates",
    cantidad: 17,
  },
  {
    nombre: "Piña",
    cantidad: 14,
  },
  {
    nombre: "Plátano ",
    cantidad: 14,
  },
  {
    nombre: "Coco",
    cantidad: 11,
  },
  {
    nombre: "Kiwi",
    cantidad: 8,
  },
];

/**
 * Indexa un arreglo de objetos por propiedad y encuentra el objeto que contenga el valor de la propiedad.
 * @function
 * @param { Array } array Arreglo de objetos.
 * @param { String } nombre Valor de la propiedad.
 * @returns { String } El objeto encontrado.
 */

function FindObject(array, nombre) {
  return array.find((elm) => elm.nombre === nombre);
}

console.log(FindObject(ArrayExample, "Piña"));