const computerSelection = getComputerChoice();
const playerSelection = prompt();


function getComputerChoice() {
    const rndmChoices = ['rock', 'paper', 'scissors'];
    let randomString = rndmChoices[Math.floor(Math.random() * rndmChoices.length)];
    return randomString
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return('It\'s a tie!, better luck next time!')
}
    
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return('Its a tie!, better luck next time!')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return('It\'s a tie!, better luck next time!')
}
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return('you won, Congratulations!')
}
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return('you won, Congratulations!')
}
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return('you won, Congratulations!')
}
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return('you lost, try again!')
}
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return('you lost, try again!')
}
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return('you lost, try again!')
}
}

