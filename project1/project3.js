const clock = document.querySelector('#clock')
//setInterval method take two parameters one function and other is time 1000 means 1 second
setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000)


