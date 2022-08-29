class Person {
     constructor( name, age, city, state){
         this.name = name
         this.age = age
         this.city = city
         this.state = state
        //  this.showNameAndAge = this.showNameAndAge.bind(this)
     }
     
     showNameAndAge(){
         return `Name = ${this.name}, Age = ${this.age}`         
     }
}

// class Student extends Person {

// }

let p1 = new Person('Sachin',31,'hubballi','KA')
let p2 = new Person('Dilip',28,'Dharwad','MH')

console.log(p1.showNameAndAge())
console.log(p2.showNameAndAge())

console.log(p1)
console.log(p2)