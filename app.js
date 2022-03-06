const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') 
const score = document.getElementById('score')
let userChoice
let computerChoice
let result
let userScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice 
    generateComputerChoice()
    getResult()
}))

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

function getResult() {

    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'You win!'
        scoreAdd()
    }
    if (computerChoice === 'rock' && userChoice ==='scissor') {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice ==='scissor') {
        result = 'You win!'
        scoreAdd()
    }
    if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'You lost!'
    }
    if (computerChoice === 'scissor' && userChoice ==='rock') {
        result = 'You win!'
        scoreAdd()
    }
    if (computerChoice === 'scissor' && userChoice ==='paper') {
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}

function scoreAdd() {
    userScore += 1
    score.innerHTML = userScore

}