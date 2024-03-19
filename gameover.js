const winMsg = ["Great job! You got it!","Congratulations! You Scored well!", "You are a word guessing master!", "You cracked the word code!", "Victory is yours!"];
const loseMsg = ["Game over! Better luck next time.","Don't give up! Try once more", "Almost there! Try again.","Sorry, you scored less. PLay again!", "You were so close! Try again."];

let finalScore = localStorage.getItem('finalScore');
document.getElementById('finalScore').textContent = finalScore;

let gameoverMessage = document.getElementById('gameoverMessage');
if (finalScore >= 15) 
{
    let randomNo = Math.floor(Math.random() * winMsg.length);
    gameoverMessage.textContent = winMsg[randomNo];
    document.getElementById('winningCheers').play();
    document.getElementById('confettiIcon').style.opacity = 1;
} else {
    let randomNo = Math.floor(Math.random() * loseMsg.length);
    gameoverMessage.textContent = loseMsg[randomNo];
    document.getElementById('losingSoundEffect').play();
    }

document.getElementById('playAgainButton').addEventListener('click', function() {
    document.getElementById('clickSound').play();
    setTimeout(function() {
        window.location.href = 'game.html';
    }, clickSound.duration * 500);
});