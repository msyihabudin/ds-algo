function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    // Merge the two arrays until one of them is exhausted
    while (i < arr1.length && j < arr2.length) {
        // Compare the current elements of both arrays and add the smaller one to the merged array
        // If arr1's current element is smaller, add it to the merged array and move to the next element in arr1
        // If arr2's current element is smaller or equal, add it to the merged array and move to the next element in arr2
        // This ensures that the merged array remains sorted as we are always adding the smaller element first
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to the merged array
    // This happens when arr2 is exhausted before arr1
    // Since arr1 is already sorted, we can simply add the remaining elements without further comparisons
    // If there are remaining elements in arr2, add them to the merged array
    // This happens when arr1 is exhausted before arr2
    // Since arr2 is already sorted, we can simply add the remaining elements without further comparisons
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2 to the merged array
    // This loop will execute if arr1 is exhausted before arr2, ensuring that all elements from arr2 are included in the merged array
    // Since arr2 is already sorted, we can simply add the remaining elements without further comparisons
    // This loop will execute if arr1 is exhausted before arr2, ensuring that all elements from arr2 are included in the merged array
    while (j < arr2.length) {        
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 3, 5], [2, 4])); // Output: [1, 2, 3, 4, 5]
console.log(mergeSortedArrays([], [1, 2, 3])); // Output: [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], [])); // Output: [1, 2, 3]