let l1 = [1,3,5,7]
let l2 = [2,4,6,8]

let l3 = [...l1,...l2]
console.log(l3)

let p1 = {
    fname:'Sachin',
    lname:'Naregal'
}

let p2 = {
    city:'Hubli',
    area:'Gandhinagar'
}

let p = {...p1,...p2}
console.log({...p1,...p2})

let name = "Dilip"
let college = 'KLE'
let city = 'Dharwad'

let student = { name, college, city }
console.log([name,college,city])
console.log(student)
