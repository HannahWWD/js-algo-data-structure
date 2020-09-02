// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


/* solution 2 */
function reverseInt(n) {
   const reversedStr = n.toString().split('').reverse().join('');
   const reversedInt = parseInt(reversedStr);
   //debugger;
   return reversedInt * Math.sign(n)

}

console.log(reverseInt(500));

module.exports = reverseInt;

/* solution 1 */
// function reverseInt(n) {
//     const reversedStr = n.toString().split('').reduce((prevChar,currentChar)=>prevChar = currentChar + prevChar,'');
//     const reversedInt = parseInt(Math.sign(n)=== -1? "-" + reversedStr : reversedStr);
//     // debugger;
//     return reversedInt;
    

// }