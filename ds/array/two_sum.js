/*
* Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* You can return the answer in any order.
* Example 1:
* Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
* Example 2:
* Input: nums = [3,2,4], target = 6
* Output: [1,2]
* Example 3:
* Input: nums = [3,3], target = 6
* Output: [0,1]
* Constraints:
* 2 <= nums.length <= 10^4
* -10^9 <= nums[i] <= 10^9
* -10^9 <= target <= 10^9
* Only one valid answer exists.
*/
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // the number we need to find
        if (numMap.has(complement)) { // check if we have seen the complement before
            return [numMap.get(complement), i]; // return indices
        }
        numMap.set(nums[i], i); // store the number and its index
    }
    return []; // return empty array if no solution found
}

var twoSumBruteForce = function(nums, target) {
    for (let i = 0; i < nums.length; i++) { // outer loop
        for (let j = i + 1; j < nums.length; j++) { // inner loop
            if (nums[i] + nums[j] === target) { // check if sum equals target
                return [i, j]; // return indices
            }
        }
    }
    return []; // return empty array if no solution found
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]

console.log(twoSumBruteForce([2,7,11,15], 9)); // [0,1]
console.log(twoSumBruteForce([3,2,4], 6)); // [1,2]
console.log(twoSumBruteForce([3,3], 6)); // [0,1]