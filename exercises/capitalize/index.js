// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const capitalizedArray = [];
    for (let word of str.split(" ")){
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedArray.push(capitalizedWord)
    }
    return capitalizedArray.join(" ")

}


module.exports = capitalize;
