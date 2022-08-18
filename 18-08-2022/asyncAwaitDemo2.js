let a = 2
let b = 3

function getEvenSq(num){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            if(num % 2 === 0) resolve(num * num)
            else reject('Even Error')
        },2000)
    })
}

function getOddSq(num){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            if( num % 2 !== 0) resolve(num * num)
            else reject("Odd Error")
        },3000)
    })
}

async function showVals(){
    let evenSq
    let oddSq
    try{
        evenSq = await getEvenSq(2)
        console.log(evenSq)
    }catch(err){
        console.log(err)
    }
    finally{
        console.log("Finally of Even")
    }

    try{
        oddSq = await getOddSq(evenSq)
        console.log(oddSq)
    }catch(err){
        console.log(err)
    }
    finally{
        console.log("Finally of Odd")
    }
}

showVals()