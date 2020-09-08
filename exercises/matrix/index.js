// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


/* solution 2 (much better solution) */

function matrix(n){
    let cellVal = 1;
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;

    let matrixArray = []
    for (let i = 0; i < n; i++) {
        matrixArray[i] = []
    }

    while(startRow <= endRow && startCol <= endCol){
        for(let col = startCol; col<=endCol; col++){
            matrixArray[startRow][col] = cellVal;
            cellVal++;
        }
        startRow++;

        for(let row=startRow; row<=endRow;row++){
            matrixArray[row][endCol] = cellVal;
            cellVal++;
        }
        endCol--;

        for(let col=endCol;col>=startCol;col--){
            matrixArray[endRow][col] = cellVal;
            cellVal++;
        }
        endRow--;

        for(let row=endRow; row>=startRow;row--){
            matrixArray[row][startCol] = cellVal;
            cellVal++;
        }
        startCol++;

    }

    return matrixArray;
    
}




console.log(matrix(4))
module.exports = matrix;

/* solution 1 (counting rotation round) */

// function matrix(n) {
//     let cellVal = 1;
//     let row = 0;
//     let col = 0;
//     let startCol = 0;
//     let startRow = 0;
//     let matrixArray = []
//     for (let i = 0; i < n; i++) {
//         matrixArray[i] = []
//     }
//     let newN = n;
//     // if row = 0 , col<= n-1,  cellVal++; matrixArray[0][0~(n-1)] = cellVal ++
//     // col = n-1, 1<=row<=n-1; matrixArray[1~(n-1)][n-1] = cellVal++
//     // row = n-1, col<=n-2,  matrixArray[n-1][(n-2)~0] = cellVal++
//     // col = 0, 1<=row<= n-2, matrixArray[(n-2)~1][0] = cellVal++
//     //row = 1, 1<=col <= (n-1) -1, cellVal++, matrixArray[1][1~(n-1)-1] cellVal++

//     for (let rotationRound = 0; rotationRound < 2 * n; rotationRound++) {
//         console.log("round:" + rotationRound)
//         if (rotationRound % 4 === 0) {
//             // row = 0; col = 0; colLimit = 0, n=4

//             while (col >= startCol && col <= newN - 1) {
//                 matrixArray[row][col] = cellVal;
//                 cellVal++;

//                 if (col === newN - 1) {
//                     break;
//                 } else {
//                     col++;
//                 }
//             }

//             startRow++; // row limit = 1
//             row = startRow; // row = 1 , col = 


//         } else if ((rotationRound - 1) % 4 === 0) {
//             while (row >= startRow && row <= newN - 1) {
//                 matrixArray[row][col] = cellVal;
//                 console.log(row)
//                 cellVal++;
//                 if (row === newN - 1) {
//                      break; 
//                     } else {
//                     row++
//                 }


//             }
//             col--; // col = 3, row = 3

//         } else if ((rotationRound - 2) % 4 === 0) {
//             while (col >= startCol) {
//                 matrixArray[row][col] = cellVal;
//                 cellVal++;
//                 if (col === startCol) { 
//                     break; 
//                 }else{
//                     col--
//                 }
//             }
//             row--;

//         } else {
//             while (row >= startRow) {
//                 matrixArray[row][col] = cellVal;
//                 cellVal++;
//                 if (row === startRow) {
//                     break;
//                 }else{
//                     row--;
//                 }
//             }

//             startCol++;
//             col = startCol;
//             newN--;
//         }

//     }

//     return matrixArray;
// }
