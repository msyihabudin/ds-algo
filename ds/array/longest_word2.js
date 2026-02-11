function LongestWord(sen) {
    const arrWords = sen.split(" "); // convert string to array
    const regularExpression = /^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$/u; // regex to match alphanumeric characters including accented letters

    let strLonger = "";

    for (let stringSen of arrWords) { // iterate through each word
        if (regularExpression.test(stringSen) && stringSen.length > strLonger.length) { // check if word matches regex and is longer than current longest
            strLonger = stringSen; // update longest word
        }
    }

    // code goes here  
    return strLonger;
}

// keep this function call here 
console.log(LongestWord(readline()));