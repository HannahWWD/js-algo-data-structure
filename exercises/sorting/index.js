// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // this step is to prevent the original array being changed
    // could be skipped if the intention is to change the original array directly
    const clone = [...arr]
    for(let i=0;i<clone.length;i++){
        for(let j=0;j<clone.length-i -1 ;j++){
            // set j< clone.length - i - 1, otherwise j+1 might be out of bounce (could be skipped, see next)
            // if j+1 is out of bounce, clone[j+1] is undefined, so that it won't go into the if condition
            if(clone[j]>clone[j+1]){
                let greater = clone[j];
                let lesser = clone[j+1]
                clone[j] = lesser;
                clone[j+1] = greater;
                
            }
        }
    }
    return clone
}

function selectionSort(arr) {
    const clone = [...arr]
    for(let i=0;i<clone.length;i++){
        let indexOfMin = i
        for(let j=i+1;j<clone.length;j++){
            if(clone[j]<clone[indexOfMin]){
                indexOfMin = j
            }
        }
        if(clone[i] !== clone[indexOfMin]){
            let greater = clone[i]
            let lesser = clone[indexOfMin]
            clone[i] = lesser;
            clone[indexOfMin] = greater;
        }

    }

    return clone


}

function mergeSort(arr) {
    // try walk through these codes with an array like [97,0]
    if(arr.length === 1){
        return arr;
    }

    // get midpoint
    const center = Math.floor(arr.length / 2);
    // split arr
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(mergeSort(left),mergeSort(right))




}

function merge(left, right) {
    const result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift())
        }
    }
    // result.push(...[...left,...right])

    return [...result,...left,...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
