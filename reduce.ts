/*
  Array.prototype.reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/

const rockAlbums: Object[] = [
  {
    nombre: "MTV Unplugged in New York", año: "1994", artista: "Nirvana"
  },
  {
    nombre: "Sheer Heart Attack", año: "1974", artista: "Queen"
  },
  {
    nombre: "The Dark Side Of The Moon", año: "1973", artista: "Pink Floyd"
  }
]

/**
 * Indexar un arreglo de objetos por una propiedad del objeto y buscar un objeto por el valor de una propiedad.
 * @param {Array} rockAlbums Un arreglo de objetos.
 * @param {String} artistName Nombre del artista.
 * @returns {Object} Objeto que contiene la propiedad ingresada.
 */

function reduce(rockAlbums: any[], artistName: string): object{
  const indexedAlbums = rockAlbums.reduce((acc, el) => ({
    ...acc,
    [el.artista]: el,
  }));
  return indexedAlbums[artistName];
}

console.log(reduce(rockAlbums, 'Pink Floyd'));
