// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* solution 3 */

function pyramid(n,row=0,stairs=""){
    if(n === row){
        return;
    }
    if(stairs.length === 2 * n - 1){
        // stair.length is the same as the index of the column
        console.log(stairs)
        // move to another row when reaching to the end of the row (reaching to the last column)
        // this step will change the row value to 1
        // this step also means reset stairs(Str) to ''
        pyramid(n, row + 1);
        return;
    }

    const midpoint = Math.floor(( 2*n-1)/2);

    if(midpoint - row <= stairs.length && midpoint + row >= stairs.length){
        stairs += '#';
    }else {
        stairs += ' ';
    }
    // move to next column in the same row
    // this will maintain the value of the row and stairs (0," ")
    pyramid(n,row,stairs)

}



pyramid(4)
module.exports = pyramid;

/* solution 1 */

// function pyramid(n) {
//     // think about how n is related to columns
//     for (let row = 0; row < n; row++) {
//         let eachStep = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (col < n - row - 1) {
//                 eachStep += " ";
//             } else if (col < n + row) {
//                 eachStep += "#";
//             } else {
//                 eachStep += " "
//             }

//         }
//         console.log(eachStep)

//     }



// }

/* solution 2 */

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let eachStep = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 eachStep += '#'

//             } else {
//                 eachStep += ' '
//             }
//         }
//         console.log(eachStep);
//     }
// }