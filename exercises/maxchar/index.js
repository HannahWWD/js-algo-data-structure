// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charObject = {}

    for (const char of str) {
        if (!charObject[char]) {
            charObject[char] = 1;
        } else {
            charObject[char]++;
        }
        // or charObject[char]=charObject[char] + 1 || 1 
    }
    
    // const keyArray = Object.keys(charObject);
    let maxVal = 0;
    let maxKey = ''

    for (const key in charObject){
        if(charObject[key] > maxVal){
            maxVal = charObject[key];
            maxKey = key
        }
    }


    return maxKey;

}

console.log(maxChar('aaaabc'))
module.exports = maxChar;
