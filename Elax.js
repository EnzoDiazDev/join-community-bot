/**
 * String.prototype.replace() devuelve una cadena de texto con alguna o todas
 * las coincidencias de un dado patrón reemplazadas. No afecta a la cadena original.
 */

const blacklist = [
    'idiota',
    'tonto',
    'inteligente'
];

/**
 * Censura de un texto todas las palabras contenidas en una lista de cadenas.
 * @param {string} text - El texto a ser censurado.
 * @param {string[]} blacklist - Una lista de palabras las cuales serán censuradas.
 * @param {string} [censorSymbol=*] - El símbolo por el que será reemplazado el texto censurado.
 * @returns {string} El texto con las palabras censuradas.
 */
function censorText(text, blacklist, censorSymbol='*') {
    let cleanStr = text;
    let searchTerm;
    for (let i = 0; i < blacklist.length; i++) {
      if(cleanStr.includes(blacklist[i])) {
        searchTerm = new RegExp(`\\b${blacklist[i]}\\w*`,'gi');
        cleanStr = cleanStr.replace(searchTerm, str => {
            return censorSymbol.repeat(str.length)
        });
        }
    }
    return cleanStr;
};

var strToCensor='La sabiduria de un inteligente está en hacerse '+
                'pasar por idiota frente a un grupo de idiotas '+
                'que se creen inteligentes.';

console.log(censorText(strToCensor, blacklist));