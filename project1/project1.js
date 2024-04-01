const buttons = document.querySelectorAll('#button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
button.addEventListener('click',(event)=>{
    console.log(event)
    console.log(event.target)

    if(event.target.className === 'grey'){
        body.style.backgroundColor = 'grey'
    }
    if(event.target.className === 'white'){
        body.style.backgroundColor = event.target.className;
    }
    if(event.target.className === 'blue'){
        body.style.backgroundColor = event.target.className
    }
    if(event.target.className === 'yellow'){
        body.style.backgroundColor = event.target.className
    }
})
})