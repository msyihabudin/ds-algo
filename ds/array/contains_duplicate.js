var containsDuplicate = function(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true; // duplicate found
        }
        numSet.add(num);
    }
    return false; // no duplicates
}

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true