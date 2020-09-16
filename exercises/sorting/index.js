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

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
