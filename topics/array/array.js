function findLargestNumber(num) {
    //  iterate all number
    //  swipe them if num[i] > num[1 + 1] / first time (2 > 1) / swipe whole like this
    //  return last one using length
  
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i + 1]) {
            temp = num[i];
            num[i] = num[i + 1]
            num[i + 1] = temp

        }

    }
    return num[num.length - 1]

}
console.log(findLargestNumber([20,2, 1, 5, 12]))

