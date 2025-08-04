// 1. Iterate str 
// 2. then do apposite (--) using decrement
// 3. return


function reverseString(str) {

    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr

}
// console.log(reverseString("vikram"))