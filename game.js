// Game Constants
const TILE_SIZE = 20;
const CANVAS_WIDTH = 560;
const CANVAS_HEIGHT = 620;
const GRID_WIDTH = CANVAS_WIDTH / TILE_SIZE;
const GRID_HEIGHT = CANVAS_HEIGHT / TILE_SIZE;

// Game States
const GAME_STATES = {
    START: 'start',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'gameOver',
    WIN: 'win'
};

// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Game Map (1 = wall, 0 = pellet, 2 = power pellet, 3 = empty)
const gameMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,2,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,2,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,3,1,1,3,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,3,1,1,3,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,3,3,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,3,3,3,3,3,3,1,3,1,1,0,1,1,1,1,1,1],
    [3,3,3,3,3,3,0,3,3,3,1,3,3,3,3,3,3,1,3,3,3,0,3,3,3,3,3,3],
    [1,1,1,1,1,1,0,1,1,3,1,3,3,3,3,3,3,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,2,0,0,1,1,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,1,1,0,0,2,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// Game State
let gameState = GAME_STATES.START;
let score = 0;
let highScore = localStorage.getItem('pacmanHighScore') || 0;
let lives = 3;
let pelletCount = 0;
let collectedPellets = 0;

// Pac-Man
const pacman = {
    x: 14,
    y: 23,
    direction: { x: 0, y: 0 },
    nextDirection: { x: 0, y: 0 },
    speed: 0.08,  // Reduced from 0.15 for slower, more controlled movement
    mouthOpen: 0,
    mouthSpeed: 0.3
};

// Ghosts
const ghosts = [
    { x: 13, y: 14, color: '#FF0000', startX: 13, startY: 14, direction: { x: 0, y: -1 }, mode: 'chase', scatterTarget: { x: 25, y: 1 } },
    { x: 14, y: 14, color: '#FFB8FF', startX: 14, startY: 14, direction: { x: 0, y: -1 }, mode: 'chase', scatterTarget: { x: 2, y: 1 } },
    { x: 13, y: 15, color: '#00FFFF', startX: 13, startY: 15, direction: { x: 0, y: 1 }, mode: 'chase', scatterTarget: { x: 27, y: 29 } },
    { x: 14, y: 15, color: '#FFB851', startX: 14, startY: 15, direction: { x: 0, y: 1 }, mode: 'chase', scatterTarget: { x: 0, y: 29 } }
];

let powerMode = false;
let powerModeTimer = 0;
const POWER_MODE_DURATION = 7000; // 7 seconds

// Animation
let lastTime = 0;
let ghostMoveTimer = 0;
const GHOST_MOVE_INTERVAL = 200;

// Initialize
function init() {
    // Count pellets
    pelletCount = 0;
    for (let row of gameMap) {
        for (let cell of row) {
            if (cell === 0) pelletCount++;
        }
    }
    
    document.getElementById('highScore').textContent = highScore;
    updateUI();
    
    // Event Listeners
    document.addEventListener('keydown', handleKeyPress);
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    document.getElementById('restartBtn').addEventListener('click', restartGame);
}

// Handle Key Press
function handleKeyPress(e) {
    if (e.code === 'Space' && gameState === GAME_STATES.START) {
        startGame();
        return;
    }
    
    if (gameState !== GAME_STATES.PLAYING) return;
    
    switch(e.key) {
        case 'ArrowUp':
            pacman.nextDirection = { x: 0, y: -1 };
            e.preventDefault();
            break;
        case 'ArrowDown':
            pacman.nextDirection = { x: 0, y: 1 };
            e.preventDefault();
            break;
        case 'ArrowLeft':
            pacman.nextDirection = { x: -1, y: 0 };
            e.preventDefault();
            break;
        case 'ArrowRight':
            pacman.nextDirection = { x: 1, y: 0 };
            e.preventDefault();
            break;
        case ' ':
            togglePause();
            e.preventDefault();
            break;
    }
}

// Start Game
function startGame() {
    if (gameState === GAME_STATES.START || gameState === GAME_STATES.GAME_OVER || gameState === GAME_STATES.WIN) {
        resetGame();
    }
    gameState = GAME_STATES.PLAYING;
    hideOverlay();
    requestAnimationFrame(gameLoop);
}

// Toggle Pause
function togglePause() {
    if (gameState === GAME_STATES.PLAYING) {
        gameState = GAME_STATES.PAUSED;
        showOverlay('PAUSED', 'Press SPACE or click Start to continue');
    } else if (gameState === GAME_STATES.PAUSED) {
        gameState = GAME_STATES.PLAYING;
        hideOverlay();
        requestAnimationFrame(gameLoop);
    }
}

// Restart Game
function restartGame() {
    resetGame();
    startGame();
}

// Reset Game
function resetGame() {
    score = 0;
    lives = 3;
    collectedPellets = 0;
    powerMode = false;
    powerModeTimer = 0;
    
    // Reset Pac-Man
    pacman.x = 14;
    pacman.y = 23;
    pacman.direction = { x: 0, y: 0 };
    pacman.nextDirection = { x: 0, y: 0 };
    
    // Reset Ghosts
    ghosts.forEach(ghost => {
        ghost.x = ghost.startX;
        ghost.y = ghost.startY;
        ghost.direction = { x: 0, y: -1 };
        ghost.vulnerable = false;
    });
    
    // Reset map
    for (let y = 0; y < gameMap.length; y++) {
        for (let x = 0; x < gameMap[y].length; x++) {
            if (gameMap[y][x] === 3 && (x < 6 || x > 21 || y < 9 || y > 19)) {
                // Don't restore pellets in ghost house area
            } else if (gameMap[y][x] === 3) {
                // Restore regular pellets
                if ((x === 1 || x === 26) && (y === 3 || y === 23)) {
                    gameMap[y][x] = 2; // Power pellets
                } else if (y === 1 || y === 5 || y === 20 || y === 26 || y === 29) {
                    gameMap[y][x] = 0; // Regular pellets
                }
            }
        }
    }
    
    updateUI();
}

// Update UI
function updateUI() {
    document.getElementById('score').textContent = score;
    document.getElementById('highScore').textContent = highScore;
    document.getElementById('lives').textContent = '❤️'.repeat(Math.max(0, lives));
}

// Show Overlay
function showOverlay(title, message) {
    document.getElementById('overlayTitle').textContent = title;
    document.getElementById('overlayMessage').textContent = message;
    document.getElementById('gameOverlay').classList.remove('hidden');
}

// Hide Overlay
function hideOverlay() {
    document.getElementById('gameOverlay').classList.add('hidden');
}

// Check if position is valid
function isValidMove(x, y) {
    const gridX = Math.round(x);
    const gridY = Math.round(y);
    
    if (gridX < 0 || gridX >= GRID_WIDTH || gridY < 0 || gridY >= GRID_HEIGHT) {
        return false;
    }
    
    return gameMap[gridY][gridX] !== 1;
}

// Move Pac-Man
function movePacman(deltaTime) {
    // Try to change direction
    const nextX = pacman.x + pacman.nextDirection.x * pacman.speed;
    const nextY = pacman.y + pacman.nextDirection.y * pacman.speed;
    
    if (isValidMove(nextX, nextY)) {
        pacman.direction = { ...pacman.nextDirection };
    }
    
    // Move in current direction
    const newX = pacman.x + pacman.direction.x * pacman.speed;
    const newY = pacman.y + pacman.direction.y * pacman.speed;
    
    if (isValidMove(newX, newY)) {
        pacman.x = newX;
        pacman.y = newY;
        
        // Wrap around
        if (pacman.x < 0) pacman.x = GRID_WIDTH - 1;
        if (pacman.x >= GRID_WIDTH) pacman.x = 0;
        
        // Animate mouth
        pacman.mouthOpen += pacman.mouthSpeed;
        if (pacman.mouthOpen > 0.8 || pacman.mouthOpen < 0) {
            pacman.mouthSpeed *= -1;
        }
    }
    
    // Collect pellets
    const gridX = Math.round(pacman.x);
    const gridY = Math.round(pacman.y);
    
    if (gameMap[gridY][gridX] === 0) {
        gameMap[gridY][gridX] = 3;
        score += 10;
        collectedPellets++;
        
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('pacmanHighScore', highScore);
        }
        
        updateUI();
        
        // Check win condition
        if (collectedPellets >= pelletCount) {
            gameState = GAME_STATES.WIN;
            showOverlay('YOU WIN!', `Score: ${score} - Press SPACE to play again`);
        }
    } else if (gameMap[gridY][gridX] === 2) {
        gameMap[gridY][gridX] = 3;
        score += 50;
        collectedPellets++;
        
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('pacmanHighScore', highScore);
        }
        
        // Activate power mode
        powerMode = true;
        powerModeTimer = POWER_MODE_DURATION;
        ghosts.forEach(ghost => ghost.vulnerable = true);
        
        updateUI();
    }
}

// Move Ghosts
function moveGhosts(deltaTime) {
    ghostMoveTimer += deltaTime;
    
    if (ghostMoveTimer < GHOST_MOVE_INTERVAL) return;
    ghostMoveTimer = 0;
    
    ghosts.forEach(ghost => {
        const possibleDirections = [
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 }
        ];
        
        // Remove opposite direction
        const validDirections = possibleDirections.filter(dir => {
            const testX = Math.round(ghost.x + dir.x);
            const testY = Math.round(ghost.y + dir.y);
            const isValid = isValidMove(ghost.x + dir.x, ghost.y + dir.y);
            const isOpposite = dir.x === -ghost.direction.x && dir.y === -ghost.direction.y;
            return isValid && !isOpposite;
        });
        
        if (validDirections.length > 0) {
            let chosenDirection;
            
            if (ghost.vulnerable && powerMode) {
                // Run away from Pac-Man
                const distances = validDirections.map(dir => {
                    const testX = ghost.x + dir.x;
                    const testY = ghost.y + dir.y;
                    return {
                        dir,
                        dist: Math.abs(testX - pacman.x) + Math.abs(testY - pacman.y)
                    };
                });
                distances.sort((a, b) => b.dist - a.dist);
                chosenDirection = distances[0].dir;
            } else {
                // Chase Pac-Man or scatter
                const target = ghost.mode === 'chase' ? pacman : ghost.scatterTarget;
                
                const distances = validDirections.map(dir => {
                    const testX = ghost.x + dir.x;
                    const testY = ghost.y + dir.y;
                    return {
                        dir,
                        dist: Math.abs(testX - target.x) + Math.abs(testY - target.y)
                    };
                });
                distances.sort((a, b) => a.dist - b.dist);
                chosenDirection = distances[0].dir;
            }
            
            ghost.direction = chosenDirection;
        }
        
        ghost.x += ghost.direction.x;
        ghost.y += ghost.direction.y;
        
        // Wrap around
        if (ghost.x < 0) ghost.x = GRID_WIDTH - 1;
        if (ghost.x >= GRID_WIDTH) ghost.x = 0;
    });
}

// Check Collisions
function checkCollisions() {
    ghosts.forEach(ghost => {
        const distance = Math.abs(ghost.x - pacman.x) + Math.abs(ghost.y - pacman.y);
        
        if (distance < 0.5) {
            if (ghost.vulnerable && powerMode) {
                // Eat ghost
                score += 200;
                updateUI();
                ghost.x = ghost.startX;
                ghost.y = ghost.startY;
                ghost.vulnerable = false;
            } else if (!ghost.vulnerable && !powerMode) {
                // Ghost catches Pac-Man - lose a life!
                lives--;
                updateUI();
                
                if (lives <= 0) {
                    gameState = GAME_STATES.GAME_OVER;
                    showOverlay('GAME OVER', `Score: ${score} - Press SPACE to try again`);
                } else {
                    // Reset positions after losing a life
                    pacman.x = 14;
                    pacman.y = 23;
                    pacman.direction = { x: 0, y: 0 };
                    pacman.nextDirection = { x: 0, y: 0 };
                    
                    ghosts.forEach(g => {
                        g.x = g.startX;
                        g.y = g.startY;
                    });
                }
            }
        }
    });
}

// Update Power Mode
function updatePowerMode(deltaTime) {
    if (powerMode) {
        powerModeTimer -= deltaTime;
        if (powerModeTimer <= 0) {
            powerMode = false;
            ghosts.forEach(ghost => ghost.vulnerable = false);
        }
    }
}

// Draw Everything
function draw() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw map
    for (let y = 0; y < gameMap.length; y++) {
        for (let x = 0; x < gameMap[y].length; x++) {
            const tile = gameMap[y][x];
            
            if (tile === 1) {
                // Wall - Classic blue
                ctx.fillStyle = '#2121FF';
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                ctx.strokeStyle = '#4444FF';
                ctx.lineWidth = 2;
                ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            } else if (tile === 0) {
                // Pellet - Classic white/cream
                ctx.fillStyle = '#FFB897';
                ctx.beginPath();
                ctx.arc(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (tile === 2) {
                // Power pellet - Classic white/cream
                ctx.fillStyle = '#FFB897';
                ctx.beginPath();
                ctx.arc(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    // Draw Pac-Man - Classic yellow
    const pacX = pacman.x * TILE_SIZE + TILE_SIZE / 2;
    const pacY = pacman.y * TILE_SIZE + TILE_SIZE / 2;
    const radius = TILE_SIZE / 2 - 2;
    
    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    
    // Determine mouth angle based on direction
    let startAngle = 0;
    if (pacman.direction.x === 1) startAngle = 0;
    else if (pacman.direction.x === -1) startAngle = Math.PI;
    else if (pacman.direction.y === 1) startAngle = Math.PI / 2;
    else if (pacman.direction.y === -1) startAngle = -Math.PI / 2;
    
    const mouthAngle = pacman.mouthOpen * 0.5;
    
    ctx.arc(pacX, pacY, radius, startAngle + mouthAngle, startAngle + Math.PI * 2 - mouthAngle);
    ctx.lineTo(pacX, pacY);
    ctx.fill();
    
    // Draw ghosts
    ghosts.forEach(ghost => {
        const ghostX = ghost.x * TILE_SIZE + TILE_SIZE / 2;
        const ghostY = ghost.y * TILE_SIZE + TILE_SIZE / 2;
        
        if (ghost.vulnerable && powerMode) {
            ctx.fillStyle = powerModeTimer < 2000 && Math.floor(Date.now() / 200) % 2 === 0 ? '#FFF' : '#0000FF';
        } else {
            ctx.fillStyle = ghost.color;
        }
        
        // Ghost body
        ctx.beginPath();
        ctx.arc(ghostX, ghostY - 2, radius, Math.PI, 0, false);
        ctx.lineTo(ghostX + radius, ghostY + radius);
        ctx.lineTo(ghostX + radius - 4, ghostY + radius - 4);
        ctx.lineTo(ghostX + radius - 8, ghostY + radius);
        ctx.lineTo(ghostX, ghostY + radius - 4);
        ctx.lineTo(ghostX - radius + 8, ghostY + radius);
        ctx.lineTo(ghostX - radius + 4, ghostY + radius - 4);
        ctx.lineTo(ghostX - radius, ghostY + radius);
        ctx.closePath();
        ctx.fill();
        
        // Eyes
        if (!ghost.vulnerable || !powerMode) {
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(ghostX - 4, ghostY - 2, 3, 0, Math.PI * 2);
            ctx.arc(ghostX + 4, ghostY - 2, 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(ghostX - 4 + ghost.direction.x, ghostY - 2 + ghost.direction.y, 2, 0, Math.PI * 2);
            ctx.arc(ghostX + 4 + ghost.direction.x, ghostY - 2 + ghost.direction.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// Game Loop
function gameLoop(timestamp) {
    if (gameState !== GAME_STATES.PLAYING) return;
    
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    movePacman(deltaTime);
    moveGhosts(deltaTime);
    checkCollisions();
    updatePowerMode(deltaTime);
    draw();
    
    requestAnimationFrame(gameLoop);
}

// Start
init();
draw();

