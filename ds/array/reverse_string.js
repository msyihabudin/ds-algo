function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Swap characters at left and right indices
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: ["o", "l", "l", "e", "h"]