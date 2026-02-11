/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let arrSums = [nums[0]]; // initialize array with first element
    let intMax = nums[0]; // initialize max to first element

    for (let i = 1; i < nums.length; i++) { // iterate through the array
        const intSuma = arrSums[i - 1] + nums[i]; // calculate sum including current element

        if (intSuma > nums[i]) { // check if sum is greater than current element
            arrSums.push(intSuma); // add sum to array
            intMax = intMax > intSuma ? intMax : intSuma // update max if needed
        } else {
            arrSums.push(nums[i]); // start new subarray with current element
            intMax = intMax > nums[i] ? intMax : nums[i]; // update max if needed
        }
    }

    return intMax; // return the maximum subarray sum
};

console.log(maxSubArray([-2, 1])); // Output: 1
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5,4,-1,7,8])); // Output: 23