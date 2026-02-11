var maxSubArray = function(nums) {
    let maxSoFar = nums[0]; // initialize to first element
    let maxEndingHere = nums[0]; // initialize to first element
    for (let i = 1; i < nums.length; i++) { // iterate through the array
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // update maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // update maxSoFar
    }
    return maxSoFar; // return the maximum subarray sum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5,4,-1,7,8])); // Output: 23