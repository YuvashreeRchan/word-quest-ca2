let words = ['banana','strawberry','rhino','lion','mirror','pineapple', 'elephant',"moon",'chair','glasses','phone', 'guitar',"ocean",];
let hints = ['Sweet, Yellow fruit',"Red fruit with seeds outside",'Animal with Large horn','King of the jungle','Reflection of youself',
'Fruit with a spiky exterior','Huge Animal and grey','Natural satellite of Earth','Furniture to sit','Helps to see things', 'Communication device',
'Musical instrument with strings','Vast body of saltwater'];

let currentWordIndex = Math.floor(Math.random() * words.length); 
let currentWord = words[currentWordIndex];
let dashes = '-'.repeat(currentWord.length);
let score = 0;
let timer = 60;
let countdownInterval;
let currentRound = 1; 

updateRoundCircles()

let guessesLeft = 3; 
let lettersTried = '';

function updateGuessInfo() {
    document.getElementById('guessesLeft').textContent = guessesLeft;
    document.getElementById('lettersTried').textContent = lettersTried ;
    document.getElementById('roundInfo').textContent = `Round: ${currentRound} / 5`;
}

document.getElementById('wordDisplay').textContent = dashes;
document.getElementById('hint').textContent = `Hint: ${hints[currentWordIndex]}`;

document.getElementById('score').textContent = `Score ${score}`;

startTimer();
document.getElementById('StartGameSound').play();

function startTimer() {
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timer--;
    document.getElementById('timer').textContent = `Time ${timer}`;
    if (timer === 0) {
        clearInterval(countdownInterval); 
        alert('Time is up! Moving to next word.');
        nextWord();
    }
}

function updateRoundCircles() {
    for (let i = 1; i <= currentRound; i++) {
        let roundCircle = document.getElementById(`word${i}`);
        if (i < currentRound) {
            roundCircle.style.backgroundColor = '#e9e3a0';  
                }       
        else {
                roundCircle.style.backgroundColor = 'gray';
            }
        }
    }

function checkGuess() {
    let guess = document.getElementById('guessInput').value.toLowerCase();
    if (guess.length === 1 && currentWord.includes(guess)) {
        let newDashes = '';
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === guess) {
                newDashes += guess;
                document.getElementById('correctSound').play();
            } else {
                newDashes += dashes[i];
            }
        }
        dashes = newDashes;
        document.getElementById('wordDisplay').textContent = dashes;
        score++;
        document.getElementById('score').textContent = `Score ${score}`;
    
        if (!dashes.includes('-')) {
            document.getElementById('correctWordMessage').style.display = 'block';
            setTimeout(function() {
                document.getElementById('correctWordMessage').style.display = 'none';
            }, 1000);
            nextWord();
        }
    } else {
        guessesLeft--;
        lettersTried= lettersTried + guess + " ";
        updateGuessInfo();
        document.getElementById('incorrectSound').play();
        alert('Oops, Incorrect guess!');
        if (guessesLeft === 0) {
            
            nextWord()
        }
    }
    document.getElementById('guessInput').value = '';
}

function nextWord() {
    document.getElementById('nextRoundSound').play();
    if (currentRound < 5) {
        currentRound++;
        currentWordIndex = Math.floor(Math.random() * words.length); 
        currentWord = words[currentWordIndex];
        dashes = '-'.repeat(currentWord.length);
        document.getElementById('wordDisplay').textContent = dashes;
        document.getElementById('guessInput').value = '';
        document.getElementById('hint').textContent = `Hint: ${hints[currentWordIndex]}`;
        timer = 60; 
        startTimer(); 
        guessesLeft = 3; 
        lettersTried = ''; 
        updateGuessInfo();
        updateRoundCircles();
        
    } else {
        endGame(score); 
}
}

function endGame(finalScore) {
    localStorage.setItem('finalScore', finalScore);
    window.location.href = 'gameover.html'; 
}
