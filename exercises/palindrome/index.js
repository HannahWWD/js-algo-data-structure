// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/* solution 2 */
/* not a best solution. The comparison should stop in half of string. */
function palindrome(str) {

    const isPalindrome = str.split('').every((char,i)=> char === str[str.length -1 - i])

    return isPalindrome;

   
}

module.exports = palindrome;


/* solution 1 */
// function palindrome(str) {

//     const reverseStr = str.split('').reduce((reverseStr,currentStr)=>currentStr+reverseStr,'');
//     return str === reverseStr
// }