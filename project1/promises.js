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