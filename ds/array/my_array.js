class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item; // add item at the end
        this.length++; // increment length
        return this.length; // return new length
    }

    pop() {
        const lastItem = this.data[this.length - 1]; // get last item
        delete this.data[this.length - 1]; // remove last item
        this.length--; // decrement length
        return lastItem; // return removed item
    }

    delete(index) {
        const item = this.data[index]; // get item to be deleted
        this.shiftItems(index); // shift items to fill the gap
        return item; // return deleted item
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; // shift item left
        }
        delete this.data[this.length - 1]; // remove last item
        this.length--; // decrement length
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
console.log(newArray.get(0));
newArray.delete(1);
console.log(newArray);