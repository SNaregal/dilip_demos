let person = {
    name:'Sachin',
    city:'hubballi',
    age: 31
}


let { name, age } = person

let colors = ['red','green','blue','black','orange']

let [ c1,c2,c3 ] = colors

console.log(name,age)
console.log(c1,c2,c3)
console.log(...colors)