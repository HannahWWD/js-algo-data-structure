// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// ROOT IS A NODE
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/* solution 2 */
function levelWidth(root) {
    let counters = [0];
    let arr = [root,"marker"];
   

    while(arr.length > 1){
        let node = arr.shift();
        if(node !== "marker"){
            //if node.children is null, it won't be pushed
            arr.push(...node.children);
            counters[counters.length-1]++

        }else{
            counters.push(0)
            arr.push("marker")

        }
    
    }

    return counters

    


}



module.exports = levelWidth;

/* solution 1 */

// function levelWidth(root) {
//     let count = 0
//     let counters = [];
//     let arr = [root,"marker"];
   

//     while(arr.length > 1){
//         let node = arr.shift();
//         if(node !== "marker"){
//             //if node.children is null, it won't be pushed
//             arr.push(...node.children);
//             count++

//         }else{
//             counters.push(count)
//             count = 0;
//             arr.push("marker")

//         }
    
//     }

//     // this is because the final 'marker' won't enter the loop
//     counters.push(count)

//     return counters

    


// }