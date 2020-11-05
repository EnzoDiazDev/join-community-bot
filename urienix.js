/**
 * substr() return a piece of string
 * starts on specified index and extending
 * for a given number of characters afterwards
 */


/**
 * take the string and return a piece 
 * with spicified parameters
 *
 * @param {string} text - The string to cut
 * @param {int} start - The start where we are going to cut the string
 * @param {cant} cant - The amount of characters that we are going to return
 */
function getStringPiece(text, start, cant){
	return text.substr(start, cant);
}

let sentence = "Iron in the fire"; //string for example

console.log("The sentence is: " + sentence) //print sentence
console.log("A piece of sentence is: "+getStringPiece(sentence, 12, 4)); //print piece of sentence 
