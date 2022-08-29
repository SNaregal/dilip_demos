/*
    bind is a method of Function object in JS
    it creates and returns a new function with binding the 'this' property of the object that has been passed as its argument
*/

let obj2 = {
    num1: 100,
    num2: 200
}

let obj1 = {
    num1: 10,
    num2: 20
}

function showNums(){
    console.log(this)
    return `${this.num1}, ${this.num2}`
}

let o1Nums = showNums.bind(obj1)
let o2Nums = showNums.bind(obj2)

showNums()
o1Nums()
o2Nums()

// console.log(showNums())
// console.log(o1Nums())
// console.log(o2Nums())

// console.log(showNums)
// console.log(o1Nums)
// console.log(o2Nums)