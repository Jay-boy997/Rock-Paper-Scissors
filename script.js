  let playerscore = 0
  let computerscore = 0
  
  const rockbutton = document.querySelector('.rock')
  const paperbutton = document.querySelector('.paper')
  const scissorsbutton = document.querySelector('.scissors')
  const outcome = document.querySelector('.outcome')
  const result = document.querySelector('.result')
  const playerscorespan = document.querySelector('.playerscore')
  const computerscorespan = document.querySelector('.computerscore')
  
  
  
  
  
  
  function getComputerChoice () {
    const computerChoice = (Math.random())
    if (computerChoice < 0.34) {
    return "rock"
    }else if (computerChoice <= 0.67) {
    return "paper"
    }else {
    return "scissors"
    }
  }
  

  function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        const p = document.createElement('p')
        p.innerText = "both choose rock, its a tie"
        outcome.appendChild(p)
        
      } else if (computerSelection === "paper") {
      const p = document.createElement('p')
      p.innerText = "you lose, computer choose paper"
      computerscore++
      outcome.appendChild(p)
      } else {
        const p = document.createElement('p')
        playerscore++
        p.innerText = "you win, computer choose scissors"
        outcome.appendChild(p)
      }
    }

    if (playerSelection === "paper") {
      if (computerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "computer choose paper, its a tie"
        outcome.appendChild(p)
      } else if (computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "you lose, computer choose scissors"
        computerscore++
        outcome.appendChild(p)
      } else {
       const p = document.createElement('p')
       p.innerText = "you win, computer choose rock"
       playerscore++
       outcome.appendChild(p)
      }
    }

    if (playerSelection === "scissors") {
      if (computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "computer choose scissors, its a tie"
        outcome.appendChild(p)
      } else if (computerSelection === "rock") {
        const p = document.createElement('p')
        p.innerText = "you lose, computer choose rock"
        computerscore++
        outcome.appendChild(p)
      } else {
        const p = document.createElement('p')
        p.innerText = "you win,computer choose paper"
        playerscore++
        outcome.appendChild(p)
      }
    }

  }
  
  const winner = (playerscore, computerscore) => {
    if (playerscore === 5) {
         const h2 = document.createElement('h2')
         h2.innerText = "You are the winner"
         result.appendChild(h2)
    } else if (computerscore === 5) {
      const h2 = document.createElement('h2')
      h2.innerText = "Computer wins!, You lose"
      result.appendChild(h2)
    }
  }

  const updateScore = (playerscore, computerscore) => {
    playerscorespan.innerText = "playerscore : " + playerscore
    computerscorespan.innerText = "computerscore : "  + computerscore

  }
  
    rockbutton.addEventListener('click', () => {
     const computerSelection = getComputerChoice()
     const playerSelection = 'rock'
     playRound(playerSelection, computerSelection)
     updateScore(playerscore, computerscore)
     winner(playerscore, computerscore)
    })

    paperbutton.addEventListener('click', () => {
      const computerSelection = getComputerChoice()
      const playerSelection = 'paper'
      playRound(playerSelection, computerSelection)
      updateScore(playerscore, computerscore)
      winner(playerscore, computerscore)
    })

    scissorsbutton.addEventListener('click', () => {
      const computerSelection = getComputerChoice()
      const playerSelection = 'scissors'
      playRound(playerSelection, computerSelection)
      updateScore(playerscore, computerscore)
      winner(playerscore, computerscore)
    })
 
  
   
   



