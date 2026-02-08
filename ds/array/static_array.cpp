int a[20];
int b[5] {1, 2, 3, 4, 5};

// Function to demonstrate static array usage
// and print the elements of the arrays
#include <iostream>
void printArrays() {
    std::cout << "Array a elements: ";
    for (int i = 0; i < 20; ++i) {
        std::cout << a[i] << " ";
    }
    std::cout << std::endl;

    std::cout << "Array b elements: ";
    for (int i = 0; i < 5; ++i) {
        std::cout << b[i] << " ";
    }
    std::cout << std::endl;
}