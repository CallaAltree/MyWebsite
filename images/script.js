const player = document.getElementById('player');
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
const obstacle3 = document.getElementById('obstacle3');

let playerPosition = 0;

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    // Move the player left
    if (event.key === 'ArrowLeft' && playerPosition > -75) {
        playerPosition -= 25;
    }

    // Move the player right
    if (event.key === 'ArrowRight' && playerPosition < 75) {
        playerPosition += 25;
    }

    // Update the player's position
    player.style.left = `calc(50% + ${playerPosition}px)`;

    // Check for collisions with obstacles
    checkCollision(player, obstacle1);
    checkCollision(player, obstacle2);
    checkCollision(player, obstacle3);
}

function checkCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    if (
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top &&
        rect1.left < rect2.right &&
        rect1.right > rect2.left
    ) {
        // Collision detected, reset the game
        alert('Game Over! You hit an obstacle.');
        resetGame();
    }
}

function resetGame() {
    playerPosition = 0;
    player.style.left = `calc(50% + ${playerPosition}px)`;
}

