const form = document.querySelector('form')
//this usecase will give empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{ // submit is new event this works on forms
    e.preventDefault() // this is method to prevent form for submit

    const height = parseInt(document.querySelector('#height').value) // parseInt convert strings to int and 
    // value gets value from input
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){  // NaN(height) means if given height is not a number === true
        results.innerHTML = `Please give valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`
    }
    else{
       const bmi = (weight/((height*height)/10000)).toFixed(2)
       // show results
       results.innerHTML = `<span>${bmi}</span>`
    }
})  

