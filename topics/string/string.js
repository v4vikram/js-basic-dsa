function reverseString(str) {
    // Start from the last charcter of the given string.
    // Loop backward untill the first charcter.
    // Append new charcter in new string.
    // Return the reverse string.


    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr

}
// console.log(reverseString("vikram"))

function countVowels(str) {
    // 1st put all vowels  in array
    // 2nd  iterate all character of vowels
    // 3nd iterate all character of str
    // 4th matched all vowel char with string and increase count every time
    // return it
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let i = 0; i < vowels.length; i++) {

        for (let v = 0; v <= str.length; v++) {

            if (str[v] === vowels[i]) {
                count += 1
            }


        }
    }
    return count
}
console.log(countVowels("vikramaee"))