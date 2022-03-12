const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') 
const scorePlayer = document.getElementById('score-player')
const scoreComputer = document.getElementById('score-computer')

let userChoice
let computerChoice
let result
let computerScore = 0
let userScore = 0

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice 
    generateComputerChoice()
    getResult()
}))

function scoreAddPlayer() {
    userScore += 1
    scorePlayer.innerHTML = userScore
}

function scoreAddComputer() {
    computerScore += 1
    scoreComputer.innerHTML = computerScore
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a Draw'
    }
    if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'You win!'
        scoreAddPlayer()
    }
    if (computerChoice === 'rock' && userChoice ==='scissor') {
        result = 'You lost!'
        scoreAddComputer()
    }
    if (computerChoice === 'paper' && userChoice ==='scissor') {
        result = 'You win!'
        scoreAddPlayer()
    }
    if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'You lost!'
        scoreAddComputer()
    }
    if (computerChoice === 'scissor' && userChoice ==='rock') {
        result = 'You win!'
        scoreAddPlayer()
    }
    if (computerChoice === 'scissor' && userChoice ==='paper') {
        result = 'You lost!'
        scoreAddComputer()
    }
    resultDisplay.innerHTML = result
}

