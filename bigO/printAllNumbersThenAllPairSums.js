/**
 * printAllNumbersThenAllPairSums(numbers)
 *
 * Detailed Big O Analysis:
 *
 * Time Complexity:
 * 1. The first forEach loop iterates through the 'numbers' array and prints each element.
 *    - This operation is O(n), where n is the length of the input array.
 * 2. The nested forEach loops iterate through every possible pair of elements in the array.
 *    - The outer loop runs n times, and for each iteration, the inner loop also runs n times.
 *    - This results in n * n = n^2 operations, so this part is O(n^2).
 * 3. When combining both parts, O(n) + O(n^2), the dominant term is O(n^2).
 *    - Therefore, the overall time complexity is O(n^2).
 *
 * Space Complexity:
 * 1. The function does not create any new arrays or objects that grow with the input size.
 * 2. Only a constant amount of extra memory is used for function calls and loop variables.
 * 3. The output to the console does not count towards space complexity.
 *    - Therefore, the space complexity is O(1) (constant space).
 *
 * Summary:
 * - Time Complexity: O(n^2) (quadratic, due to nested loops)
 * - Space Complexity: O(1) (constant, no growing data structures)
 */
function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) {
      console.log(number);
    });
  
    console.log("and these are their sums:");
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)