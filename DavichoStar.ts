/*
 * String.prototype.replace(string_a_buscar, replazar_por) Replaza texto en un string por otro.
 * Se puede poner un regex o un string en el primer parámetro.
*/

/**
 * Agrega una coma cada tres carácteres de un texto o número dado.
 * @param {string | number} dinero Un string o número que se quiera dividir como dinero.
 * @returns {string} El string con una coma cada tres carácteres.
 */

const conv = (dinero: string | number): string => String(dinero).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
