function getUsers(pageNo){
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
}

// getUsers(2)
// .then(data => {
//     data.json()
//     .then(data => console.log(data))
// })
// .then( data => console.log(data))

async function display(){
    let response = await getUsers()
    let data = await response.json()
    console.log(data)
}

display()