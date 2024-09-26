let isFlying = false;
let player = {
  x: 0,
  y: 0,
  height: 50,
  speed: 5,
  direction: 0
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'f' || event.key === 'F') {
    isFlying = !isFlying;
  }
});

function updatePlayerMovement() {
  player.x += player.speed * Math.cos(player.direction);
  player.y += player.speed * Math.sin(player.direction);

  if (isFlying) {
    player.y -= 5;
  }
}

function checkCollisions() {
  let groundY = 500; // replace with actual ground y position
  if (player.y + player.height > groundY) {
    if (!isFlying) {
      player.y = groundY - player.height;
    }
  }
}

function gameLoop() {
  updatePlayerMovement();
  checkCollisions();
  requestAnimationFrame(gameLoop);
}

gameLoop();

//Made by Notch/Jackson