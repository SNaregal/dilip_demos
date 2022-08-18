let isLoading = false
let loadingMsg = ''
function getUsers(pageNo){
    isLoading = true
    loadingMsg = 'Loading...'
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
    isLoading = false
    loadingMsg = ''
    console.log(data)
}

display()