function reverse(str){
    // check for valid input
    // if the string is empty, not a string, or a single character, return the string
    if (!str || typeof str != 'string' || str.length < 2 ) return str;
    
    // create an array to hold the characters in reverse order
    const backwards = [];

    // loop through the string in reverse order and push each character to the backwards array
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        // push the character at index i to the backwards array
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str){
    // check for valid input
    // if the string is empty, not a string, or a single character, return the string
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse2('Timbits Hi')
reverse3('Timbits Hi')