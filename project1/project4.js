    let randomNumber = parseInt(Math.random()*(100+1))
    const submit = document.querySelector('#subt')
    const userInput = document.querySelector('#guessField')
    const guessSlot = document.querySelector(`.guesses`)
    const remaining = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')
    const startOver = document.querySelector('.resultParas')

    const p = document.createElement('p')
    let prevGuess = []
    let numGuess = 1
    let playGame = true


    // adding event listner

    if(playGame){
        submit.addEventListener('click',function(e){
            e.preventDefault()
            const guess = parseInt(userInput.value)
            console.log(guess)
            validateGuess(guess)
        })
    }

    function validateGuess(guess){
        if(isNaN(guess)) {
            alert('please enter valid number')
        }
        else if(guess < 1){
            alert('please enter number greater then 1')
        }
        else if(guess > 100){
            alert('please enter number less then 100')
        }
        else{
            prevGuess.push(guess)

            if(numGuess === 11){
                displayGuess(guess)
                displayMessage(`game over random number was ${randomNumber}`)
                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }

    }

    function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage(`you guess it right`)
            endGame()
        }
        else if(guess < randomNumber){
            displayMessage(`random number is less`)
        }
        else if(guess < randomNumber){
            displayMessage(`random number is greater`)
        }
    }

    function displayGuess(guess){
        userInput.value = ''
        guessSlot.innerHTML += `${guess} , `
        numGuess++
        remaining.innerHTML = `${11 - numGuess}`
    }

    function displayMessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`
    }

    //this is for game and start new game
    
    function endGame(){
        userInput.value =''
        userInput.setAttribute('disabled','')
        p.classList.add('button')
        p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
        p.style.cursor = 'pointer'
        startOver.appendChild(p)
        playGame = false
        newGame()
    }
    function newGame(){
        const newGameButton = document.querySelector(`#newGame`)
        newGameButton.addEventListener('click',(e)=>{

            randomNumber = parseInt(Math.random()*(100+1))
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            startOver.style.cursor = 'pointer'
            playGame = true

        })
    }