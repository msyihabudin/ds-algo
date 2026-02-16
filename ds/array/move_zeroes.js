var moveZeroes = function(nums) {
    let zeroCount = 0; // Initialize a counter for zeroes
    for (let i = 0; i < nums.length; i++) { // Iterate through the array
        if (nums[i] === 0) { // If the current element is zero
            zeroCount++; // Increment the zero counter
        } else if (zeroCount > 0) { // If the current element is non-zero and there are zeroes counted
            nums[i - zeroCount] = nums[i]; // Move the non-zero element to the correct position
            nums[i] = 0; // Set the current position to zero
        }
    }
}

console.log(moveZeroes([0,1,0,3,12])); // Output: [1,3,12,0,0]