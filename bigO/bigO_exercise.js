// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // 1
    a = 50 + 3; // 1
  
    for (let i = 0; i < input.length; i++) { // n
      anotherFunction(); // n
      let stranger = true; // n
      a++; // n
    }

    // 4 + 4n
    // big O( n )
    return a;
}