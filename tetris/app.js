document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button');
    const width = 10;
    let nextRandom = 0;
    let timerId;
    let score = 0;
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue',
        'cyan', // Color for the "J" tetromino
        'magenta' // Color for the "S" tetromino
    ];

    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    // New "S" Tetromino
    const sTetromino = [
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1]
    ];

    // New "J" Tetromino
    const jTetromino = [
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width + 1, width + 2, width * 2],
        [1, width + 1, width * 2 + 1, 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, sTetromino, jTetromino];


    let currentPosition = 4;
    let currentRotation = 0;

    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
            squares[currentPosition + index].style.backgroundColor = colors[random];
        });
    }

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
            squares[currentPosition + index].style.backgroundColor = '';
        });
    }

    //assign functions to keyCodes
    function control(e) {
        if (e.keyCode === 37) {
            moveLeft();
        } else if (e.keyCode === 38) {
            rotate();
        } else if (e.keyCode === 39) {
            moveRight();
        } else if (e.keyCode === 40) {
            // Down movement is now continuous
        }
    }
    document.addEventListener('keyup', control);

    //move down function
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //freeze function
    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            //start a new tetromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    }

    //move the tetromino left, unless is at the edge or there is a blockage
    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
        if (!isAtLeftEdge) currentPosition -= 1;
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        }
        draw();
    }

    //move the tetromino right, unless is at the edge or there is a blockage
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
        if (!isAtRightEdge) currentPosition += 1;
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1;
        }
        draw();
    }

    //rotate the tetromino
    function rotate() {
        undraw();
        currentRotation++;
        if (currentRotation === current.length) {
            currentRotation = 0;
        }
        current = theTetrominoes[random][currentRotation];
        checkRotatedPosition();
        draw();
    }

    //show up-next tetromino in mini-grid display
    const displaySquares = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    const displayIndex = 0;
    const upNextTetrominoes = [
        // Existing tetromino preview shapes...
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], // lTetromino
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], // zTetromino
        [1, displayWidth, displayWidth + 1, displayWidth + 2], // tTetromino
        [0, 1, displayWidth, displayWidth + 1], // oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1], // iTetromino
        [displayWidth + 1, displayWidth + 2, displayWidth * 2, displayWidth * 2 + 1], // sTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 2] // jTetromino
    ];

    function displayShape() {
        displaySquares.forEach(square => {
            square.classList.remove('tetromino');
            square.style.backgroundColor = '';
        });
        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino');
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
        });
    }

    //add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 1000);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    })

    //add score
    function addScore() {
        for (let i = 0; i < 199; i += width) {
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]

            if (row.every(index => squares[index].classList.contains('taken'))) {
                score += 10;
                scoreDisplay.innerHTML = score;
                row.forEach(index => {
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetromino');
                    squares[index].style.backgroundColor = '';
                });
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    //game over
    function gameOver() {
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'end';
            clearInterval(timerId);
        }
    }

    // Movement control intervals
    let moveDownInterval;
    let moveLeftInterval;
    let moveRightInterval;
    let keyDownDelayTimer; // Used to add a delay before continuous movement starts

    function clearMoveIntervals() {
        clearInterval(moveDownInterval);
        clearInterval(moveLeftInterval);
        clearInterval(moveRightInterval);
        moveDownInterval = null;
        moveLeftInterval = null;
        moveRightInterval = null;
    }

    document.addEventListener('keydown', (e) => {
        if (keyDownDelayTimer) {
            // If there's already a delay timer, do nothing
            return;
        }
        // Set up a delay timer to avoid immediate repeat action
        keyDownDelayTimer = setTimeout(() => {
            if (e.keyCode === 40) {
                clearMoveIntervals();
                moveDownInterval = setInterval(moveDown, 100);
            }
            if (e.keyCode === 37) {
                clearMoveIntervals();
                moveLeftInterval = setInterval(moveLeft, 100);
            }
            if (e.keyCode === 39) {
                clearMoveIntervals();
                moveRightInterval = setInterval(moveRight, 100);
            }
            keyDownDelayTimer = null; // Clear the timer so it can be set again
        }, 150); // Set this to the delay you want before continuous movement starts
    });

    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 40) {
            clearInterval(moveDownInterval);
            moveDownInterval = null;
        }
        if (e.keyCode === 37) {
            clearInterval(moveLeftInterval);
            moveLeftInterval = null;
        }
        if (e.keyCode === 39) {
            clearInterval(moveRightInterval);
            moveRightInterval = null;
        }
        // Clear the keyDownDelayTimer on key up
        clearTimeout(keyDownDelayTimer);
        keyDownDelayTimer = null;
    });

    function checkRotatedPosition(P) {
        P = P || currentPosition;
        if ((P + 1) % width < 4) {
            if (isAtRight()) {
                currentPosition += 1;
                checkRotatedPosition(P);
            }
        } else if (P % width > 5) {
            if (isAtLeft()) {
                currentPosition -= 1;
                checkRotatedPosition(P);
            }
        }
    }

    function isAtRight() {
        return current.some(index => (currentPosition + index + 1) % width === 0);
    }

    function isAtLeft() {
        return current.some(index => (currentPosition + index) % width === 0);
    }
});
