function findLargestNumber(num) {


    let temp = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i + 1]) {
            temp = num[i];
            num[i] = num[i + 1];
            num[i + 1] = temp;
        }
    }
    return num[num.length - 1];
}
// console.log(findLargestNumber([20,2, 1, 5, 12]))

function mergeTwoArrayAndSort() {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];

    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    // sort
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
    console.log(arr1);
}
// mergeTwoArrayAndSort();

function findByAge(arr) {
    const find = []
    for (let i = 0; i < people.length; i++) {
        if (arr[i].age > 18) {
            find.push(arr[i])
        }
    }
    console.log(find)
}

const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 25 },
    { name: "Eve", age: 18 }
];

// findByAge(people)

function findFactorial(num) {
    let factorial = 1;
    for (let i = 0; i < num.length; i++) {
        factorial = num[i] * factorial

    }
    return factorial
}
// console.log(findFactorial([1, 2, 3, 4]))
