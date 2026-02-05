function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    // Print the first half of the items array
    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    // Print items from index 0 to middleIndex - 1
    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    // Print "hi" 100 times
    for (var i = 0; i < 100; i++) {
        console.log("hi");
    }
}