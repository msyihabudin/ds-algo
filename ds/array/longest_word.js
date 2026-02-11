function LongestWord(arr) {
    // Join the array into a single string separated by spaces
    const str = arr.join(' ');
    
    // Use regex to match words (alphanumeric characters)
    const words = str.match(/\w+/g);
    
    // Initialize the longest word variable
    let longestWord = '';
    
    // Iterate through each word to find the longest one
    if (words) {
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
    }
    
    return longestWord;
}

// Example usage:
console.log(LongestWord(["I", "love", "programming", "in", "JavaScript"])); // Output: "programming"