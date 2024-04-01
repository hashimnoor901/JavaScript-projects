const buttons = document.querySelectorAll('#button') // to select all buttons with id button

const body = document.querySelector('body') // to select body for change background

buttons.forEach((button)=>{ // button is as parameter

button.addEventListener('click',(event)=>{ // parameter is not necessary event it can be e , event or with any name
    //apply eventListner with name click means when it will cliked and in event listner there is callback
    //fuction ()=> inside this eventListner
     

    console.log(event)    // event apply when we click 

    console.log(event.target)
    //e.target means which button is click it give complete div which is clicked

    if(event.target.className === 'grey'){
        // here is condition if targeted event className === 'grey'
        body.style.backgroundColor = 'grey'
        // then body color will be grey or we can add by event.target.className
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