/**
 * Demonstrates examples of space complexity in JavaScript functions.
 *
 * - `boooo(n)`: Example of O(1) space complexity (constant space).
 * - `arrayOfHiNTimes(n)`: Example of O(n) space complexity (linear space).
 *
 * Each function is annotated with its respective space complexity.
 */
// #5 Space complexity O(1)
// This function demonstrates constant space complexity.
// Step-by-step:
// 1. Takes an input n.
// 2. Loops n times, printing "booooo" each time.
// 3. No matter how large n is, the function only uses a fixed amount of extra memory (for i and n).
// Space Complexity Explanation:
// - The function does not create any new data structures that grow with n.
// - Only a few variables are used, regardless of input size.
// - Therefore, space complexity is O(1) (constant space).
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

// #6 Space complexity O(n)
// This function demonstrates linear space complexity.
// Step-by-step:
// 1. Takes an input n.
// 2. Creates an empty array hiArray.
// 3. Loops n times, adding the string "hi" to the array each iteration.
// 4. Returns the array containing n elements.
// Space Complexity Explanation:
// - The array hiArray grows in size as n increases.
// - For each iteration, a new string is added to the array.
// - The total memory used by hiArray is proportional to n.
// - Therefore, space complexity is O(n) (linear space).
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);