// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/* solution 3 */
function reverse(str) {
    const reversed = str.split('').reduce((currentStr, newChar) => {
        currentStr = newChar + currentStr
        return currentStr;
    }, '')

    // debugger;
    // make sure to invoke the function
    // press c, and then repl

    return reversed;
}

// reverse('apple');

module.exports = reverse;

/* solution 1 */
// function reverse(str) {
//     // let str_array = str.split("");
//     // str_array.reverse();
//     // const reverseStr = str_array.join('');

//     const reverseStr = str.split("").reverse().join('')
//     return reverseStr;
// }

/* solution 2 */
// function reverse(str) {
//     // const reverseArray = [];
//     // for (const char of str){
//     //     reverseArray.unshift(char)
//     // }
//     // return reverseArray.join('')

//     let reversed = '';
//     for(const char of str){
//         reversed = char +reversed;
//     }
//     return reversed;
   
// }