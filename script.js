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
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "rock") {
        return "Its a tie"
      } else if (computerSelection === "paper") {
        computerScore++
        return "Computer wins"
      } else {
        playerScore++
        return "Player wins"
      }
    }

    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
        return "Its a tie"
      } else if (computerSelection === "scissors") {
        computerScore++
        return "Computer wins"
      } else {
        playerScore++
        return "Player wins"
      }
    }

    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "scissors") {
        return "Its a tie"
      } else if (computerSelection === "rock") {
        computerScore++
        return "Computer wins"
      } else {
        playerScore++
        return "Player wins"
      }
    }

  }
  playerScore = parseInt(0)
  computerScore = parseInt(0)  
  function game () {
    for (let i = 0; i < 5; i++) {
        let  playerSelection = prompt("please choose rock or paper or scissors")
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log('player Score = ' + playerScore)
        console.log('computer Score = ' + computerScore)
    }
  }

  game()
  
   
   



