const params = new URLSearchParams(window.location.search);
const nickname = params.get('nickname');
if (nickname) {
    document.getElementById('nickname').textContent = nickname;
}
        
document.getElementById("understoodCheckbox").addEventListener("change", function() {
    document.getElementById("readyButton").disabled = !this.checked;
});
        
document.getElementById("readyButton").addEventListener("click", function() {
    document.getElementById('clickSound').play();
    setTimeout(function() {
        window.location.href = 'game.html';
    }, clickSound.duration * 500); 
});
