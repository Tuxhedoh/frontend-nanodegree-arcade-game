const winModal = document.getElementById('winModal');
// Place the player object in a variable called player
const numEnemies = 8;
const player = new Player();
const allEnemies = [];
for(let i =1; i<=numEnemies; i++){
    allEnemies.push(new Enemy());
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function checkWin(player){
    if(player.y ==0){
            console.log("You Win!");
            // Display Win Modal
            winModal.style.display = "block";
    }
}