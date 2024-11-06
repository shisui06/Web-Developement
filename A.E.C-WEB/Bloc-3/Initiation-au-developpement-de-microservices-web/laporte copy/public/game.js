
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


const GRID_SIZE = 8;
let playerPos = { x: 0, y: 0 };
let keyPos = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
let doorPos = { x: GRID_SIZE - 1, y: GRID_SIZE - 1 };
let enemies = [{ x: 3, y: 3 }, { x: 5, y: 5 }];
let hasKey = false;

function createBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const square = document.createElement('div');
      square.classList.add('square');

      if (x === playerPos.x && y === playerPos.y) square.classList.add('player');
      else if (x === keyPos.x && y === keyPos.y && !hasKey) square.classList.add('key');
      else if (x === doorPos.x && y === doorPos.y) square.classList.add('door');
      else if (enemies.some(enemy => enemy.x === x && enemy.y === y)) square.classList.add('enemy');

      gameBoard.appendChild(square);
    }
  }
}

window.addEventListener('keydown', (e) => {
  const dx = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
  const dy = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;

  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
    playerPos = { x: newX, y: newY };

    if (newX === keyPos.x && newY === keyPos.y) hasKey = true;

    if (hasKey && newX === doorPos.x && newY === doorPos.y) {
      alert('You won!');
      window.location.reload();
    }

    createBoard();
  }
});

createBoard();

function initializeGame() {
  const gameBoard = document.getElementById('game-board');
  
}