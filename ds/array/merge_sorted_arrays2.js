function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
  
    // We need to keep track of the current index of each array and compare the current items of both arrays. We will push the smaller item into the merged array and move the index of that array forward. We will continue this process until we have gone through both arrays.
    while (array1Item || array2Item) {

        if (array2Item === undefined || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]); // Output: [0,3,3,4,4,6,30,31]