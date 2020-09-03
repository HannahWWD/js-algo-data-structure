// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n, row=0, stairs=''){
    if(n === row){
        return;
    }
    if(n === stairs.length){
        // stair.length is the same as the index of the column
        console.log(stairs)
        // move to another row when reaching to the end of the row (reaching to the last column)
        // this step will change the row value to 1
        // this step also means reset stairs(Str) to ''
        steps(n, row + 1);
        return;
    }

    if(stairs.length <= row){
        stairs += '#';
    }else {
        stairs += ' ';
    }
    // move to next column in the same row
    // this will maintain the value of the row and stairs (0,"# ")
    steps(n,row,stairs)

}


steps(2)
module.exports = steps;


/* solution 1 */
// function steps(n) {
//     const symbol = "#";
//     for (let i=0; i<n;i++){
//         const eachStep = "#".repeat(i+1) + " ".repeat(n-1-i);
//         console.log(eachStep)

//     }
// }



/* solution 2 */
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let eachStep = "";
//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 eachStep = eachStep + "#";
//             } else {
//                 eachStep = eachStep + " ";
//             }
//         }
//         console.log(eachStep)
//     }
// }