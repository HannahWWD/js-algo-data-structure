// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* solution 2 */

function anagrams(stringA,stringB){
    // make sure to include the g in the regex
    const cleanA = stringA.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('');
    const cleanB = stringB.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('');
    return cleanA === cleanB;

}

//console.log(anagrams("RAIL! SAFETY!","fairy tales"))

module.exports = anagrams;

/* solution 1 */

// /* helper function */
// function getStringMap (str){
//     const strMap ={};
//     const cleanStr = str.toLowerCase().replace(/[^\w]/g,'');
//     for (const char of cleanStr){
//         if(!strMap[char]){
//             strMap[char] = 1
//         }else{
//             strMap[char] ++;
//         }
//     }
//     return strMap;
// }

// /* main function */
// function anagrams(stringA, stringB) {
   

//     const stringAMap = getStringMap(stringA);
//     const stringBMap = getStringMap(stringB);

//     const mapAKeys = Object.keys(stringAMap);
//     const mapBKeys = Object.keys(stringBMap);

//     if(mapAKeys.length === mapBKeys.length){
//         for (const key of mapAKeys){
//             if(stringAMap[key] !== stringBMap[key]){
//                 return false
//             }
//         }
//     }else{
//         return false;
//     }

//     return true;



// }