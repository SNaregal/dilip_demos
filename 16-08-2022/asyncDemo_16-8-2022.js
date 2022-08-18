let a = 2
let b = 3

console.log('a = ',a)
console.log('b = ',b)

let showSqOfA = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve(a*a)
        },1000)
    })
}

let showSqOfB = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve(b*b)
        },500)
    })
}

let quadOfB = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve(b*b*b*b)
        },0)
    })
}

// setTimeout(function(){
//     console.log('Sq of a = ',a*a)
// },0)

// setTimeout(function(){
//     console.log('Sq of b = ',b*b)
// },0)

showSqOfA()
.then(data => {
    console.log('sq of a = ',data)
    return showSqOfB()
})
.then(data => {
    console.log('sql of b = ',data)
    return quadOfB()
})
.then(data => {
    console.log('quadOfB = ',data)
})

console.log('cube of a = ', a*a*a)
console.log('cube of b = ', b*b*b)