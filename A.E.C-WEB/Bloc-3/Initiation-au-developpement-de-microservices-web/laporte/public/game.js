const GRID_SIZE = 8;
let hasKey = false;

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) selectedPage.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();           
      const pageId = link.getAttribute('href').substring(1);
      showPage(pageId);
      history.pushState(null, null, `#${pageId}`);
    });
  });

  const initialPageId = location.hash.slice(1) || 'home';
  showPage(initialPageId);

  window.addEventListener('popstate', () => {
    const pageId = location.hash.slice(1) || 'home';
    showPage(pageId);
  });
});

function createBoard(positions) {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    const player = positions.find(p => p.name === 'player');
    const key = positions.find(p => p.name === 'key');
    const enemies = positions.filter(p => p.name.startsWith('enemy'));

    if (player && player.position === i) square.classList.add('player');
    if (key && key.position === i && !hasKey) square.classList.add('key');
    if (i === 63) square.classList.add('door');
    if (enemies.some(enemy => enemy.position === i)) square.classList.add('enemy');

    gameBoard.appendChild(square);
  }
}

async function startGame() {
    try {
        const response = await fetch('/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            console.error('Server error:', response.status, response.statusText);
            return;
        }
        
        const data = await response.json();
        if (data.status === 'ok') {
            hasKey = false;
            createBoard(data.positions);
        } else {
            console.error('Error in received data:', data.message);
        }
    } catch (error) {
        console.error('Error starting game:', error);
    }
}

async function movePlayer(direction) {
    try {
        const response = await fetch('/move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ direction })
        });

        if (!response.ok) {
            console.error('Server error:', response.status, response.statusText);
            return;
        }

        const data = await response.json();
        
        if (data.status === 'ok') {
            hasKey = data.hasKey;
            createBoard(data.newPositions);

            if (data.hitEnemy) {
                alert('Game Over! You hit an enemy!');
                await startGame();
            }
        } else {
            console.error('Error in received data:', data.message || 'Unexpected format');
        }
    } catch (error) {
        console.error('Error during movement:', error);
    }
}

window.addEventListener('keydown', (e) => {
  const directions = {
    'ArrowRight': 'right',
    'ArrowLeft': 'left',
    'ArrowUp': 'up',
    'ArrowDown': 'down'
  };

  const direction = directions[e.key];
  if (direction) {
    movePlayer(direction);
  }
});

function initGame() {
  console.log("Game initialized!");
  startGame();
}

initGame();