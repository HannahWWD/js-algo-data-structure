// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



/* solution 2 */
function vowels(str) {
    // or str.match(/[aeiou]/gi)
    // g means not to stop at the first match, and i means case insensitive 
    const foundVowels = str.match(/a|e|i|o|u/gi)
    return foundVowels ? foundVowels.length : 0


}


module.exports = vowels;

/* solution 1 */
// function vowels(str) {
//     // string may be uppercase of lowercase
//     const vowels = ["a","e","i","o","u"];
//     let numOfVowels = 0;
//     for (const char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             numOfVowels++;
//         }
//     }

//     return numOfVowels;


// }