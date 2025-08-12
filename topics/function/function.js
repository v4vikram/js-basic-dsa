function cb() {
    console.log("printed after 2 second")
}

function execute(cb) {
    setTimeout(() => {
        cb()

    }, 2000)
}
// execute(cb)

// function customMap(values) {
//  console.log(values())
// }
// const vali = customMap(values([1,2,3]))

// function values(num){
//    for (let i = 0; i < num.length; i++) {
//         return values(num[i])
//     }
// }

Array.prototype.customMap = function(cb){

let result = []
for(let i=0; i<this.length; i++){
    result.push(cb(this[i]))
}
return result
}
let nums = [1,2,3];

const res =  nums.customMap((item)=>item*2);
console.log(res)



