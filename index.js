document.addEventListener("DOMContentLoaded", function() {
    const backgroundSound = new Audio("assets/once-in-paris-cut.mp3");
    const clickSound = new Audio("assets/game-click.wav");

    function playBackgroundSound() {
        backgroundSound.volume = 0.3; 
        backgroundSound.loop = true; 
        backgroundSound.play();
    } 

    playBackgroundSound();

    function playClickSound() {
        clickSound.volume = 0.5; 
        clickSound.play();
    }
    
    function startGame() 
    {
    
        const playerName = document.getElementById("playerName").value;
        const playerNickname = document.getElementById("playerNickname").value;

        if (playerName && playerNickname) 
        {
            const playerInfo = {
                name: playerName,
                nickname: playerNickname
            };
            
            playClickSound(); 
            localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
            window.location.href = `instruct.html?nickname=${playerNickname}`;
        }
        else {
            alert("Please enter your name and nickname to start the game.");
        }
    }

    document.getElementById("startButton").addEventListener("click", function() {
        playClickSound(); 
        setTimeout(startGame, 500); 
    });

});