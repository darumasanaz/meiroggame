// script.js
const mazeContainer = document.getElementById('maze');
let playerPosition = { x: 0, y: 0 };

function createMaze() {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell path';
            if (Math.random() > 0.8) {
                cell.className = 'cell wall';
            }
            if (x === 0 && y === 0) {
                cell.className = 'cell player';
            }
            if (x === 9 && y === 9) {
                cell.className = 'cell goal';
            }
            mazeContainer.appendChild(cell);
        }
    }
}

function move(direction) {
    // 動く前の位置を特定
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    // 方向による移動
    if (direction === 'up' && newY > 0) newY--;
    if (direction === 'down' && newY < 9) newY++;
    if (direction === 'left' && newX > 0) newX--;
    if (direction === 'right' && newX < 9) newX++;

    // 新しい位置のセルを取得
    const newCell = mazeContainer.children[newY * 10 + newX];
    if (newCell.className.includes('wall')) return;

    // プレイヤーを移動
    mazeContainer.children[playerPosition.y * 10 + playerPosition.x].className = 'cell path';
    newCell.className = 'cell player';
    playerPosition = { x: newX, y: newY };

    // ゴールチェック
    if (newX === 9 && newY === 9) {
        alert('ゴール！');
    }
}

createMaze();
