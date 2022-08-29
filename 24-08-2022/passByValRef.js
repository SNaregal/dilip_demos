let obj = {
    name:'sachin',
    city:'hubballi'
}

function demo(person,str,arr){
    person.name = "Somethingelse"
    str = "new string"
    arr.push(100)
    console.log(str)
}

let s = 'abcd'
let list = [1,2,3,4,5,6,7]

console.log(obj,s,list)
demo(obj,s,list)
console.log(obj,s,list)


