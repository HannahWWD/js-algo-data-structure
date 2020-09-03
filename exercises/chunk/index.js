// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/* solution 3 */
function chunk(array, size){
    const chunks = [];
    let index = 0;
    while(index < array.length){
        chunks.push(array.slice(index, index + size));
        index += size;
    }
    return chunks;
}


console.log(chunk([1,2,3,4,5],2))
module.exports = chunk;

/* solution 1 */

// function chunk(array,size){
//     const chunks = [];
//     for (const elem of array){
//         // get the last list item of the chunks array
//         const lastChunk = chunks[chucks.length-1];
//         if(!lastChunk || lastChunk.length === size){
//             // push a new list item into chunks
//             chunks.push([elem])
//         }else{
//             // if the length of the last chunk is smaller than size
//             lastChunk.push(elem)
//         }
//     }
//     return chunks
// }


/* solution 2 */

// function chunk(array, size) {
//     const chunkedArray = [];

//     function chunkArray(inputArray,inputSize){
//         if(inputArray.length > inputSize){
//             //splice will split the original array (length shorten)
//             const fragmentArray = inputArray.splice(0,inputSize);
//             chunkedArray.push(fragmentArray);
//             chunkArray(inputArray,inputSize);
//         }else{
//             chunkedArray.push(inputArray);
//         }
//     }

//     chunkArray(array,size)

//     return chunkedArray
    
// }