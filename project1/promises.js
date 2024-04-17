const promiseOne = new Promise( function(resolve,reject){
    setTimeout(() => {
      console.log('Async Task Completed')
      resolve() // this is for connect resolve with .then()
    }, 1000);
} )
promiseOne.then( ()=>{
    console.log("promeise consumed")
} )

new Promise(function ( resolve ,reject){
    setTimeout(() => {
        console.log("promise 2 resolved")
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise 2 resolved")
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:'hashim',password:'123'})
        }else{
            reject('ERROR : Something went wrong')
        }
    }, 1000);
})

promiseFour.then( (user)=>{
    console.log(user)
    return user.username
} ).then((username)=>{ 
    // this is called chaining when we use two or more times then()
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('runed')
})


// another way 
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({name:'hashim',lastname:'noor'})
        }
        else{
            reject('something went wrong')
        }
    },1000)
})
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data  = await response.json()
//     console.log(typeof data)
//     console.log(data.id)
    
//    } catch (error) {
//     console.log("Error",error)
    
//    }
    
// }
// getAllUsers()


//  same can be done with then() and cathch()
fetch('https://jsonplaceholder.typicode.com/users')
// fetch aik promise return krta ha , is ma 2 parts hotay hein aik data section jis ma onfulfiled and on Rejection hota ha just like reject and resole in promise and other part is web Browser network request ya to reject ho ge ya resolve hogi 

.then((response)=>{
   return response.json()
}).then((response)=>{
console.log(response)
})