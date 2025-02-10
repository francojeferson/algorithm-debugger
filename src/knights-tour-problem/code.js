/*
For N>3 the time taken by this algorithm is sufficiently high
Also it is not possible to visualise for N>6 due to stack overflow
caused by large number of recursive calls
*/
const BOARD_SIZE = Math.floor(Math.random() * 4) + 3; // This gives us 3,4,5 or 6
console.log(`Generated board size: ${BOARD_SIZE}x${BOARD_SIZE}`);
const chessBoard = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(-1));

// Knight's possible moves (8 different L-shaped moves)
const KNIGHT_MOVE_X = [2, 1, -1, -2, -2, -1, 1, 2];
const KNIGHT_MOVE_Y = [1, 2, 2, 1, -1, -2, -2, -1];

// Get random starting position
const randomStartX = Math.floor(Math.random() * BOARD_SIZE);
const randomStartY = Math.floor(Math.random() * BOARD_SIZE);

function knightTour(currentX, currentY, moveNumber) {
    debugger;
    console.log(`\nCurrent Position: (${currentX}, ${currentY})`);
    console.log(`Move Number: ${moveNumber}`);
    console.log('Current Board State:');
    console.table(chessBoard);

    if (moveNumber === BOARD_SIZE * BOARD_SIZE) {
        return true;
    }

    // Try all possible moves from current position
    for (let moveIndex = 0; moveIndex < 8; moveIndex++) {
        const nextPositionX = currentX + KNIGHT_MOVE_X[moveIndex];
        const nextPositionY = currentY + KNIGHT_MOVE_Y[moveIndex];

        console.log(`\nTrying move ${moveIndex + 1}: (${nextPositionX}, ${nextPositionY})`);

        // Check if move is valid and square hasn't been visited
        const isValidMove = nextPositionX >= 0 &&
                           nextPositionX < BOARD_SIZE &&
                           nextPositionY >= 0 &&
                           nextPositionY < BOARD_SIZE &&
                           chessBoard[nextPositionX][nextPositionY] === -1;

        if (isValidMove) {
            chessBoard[nextPositionX][nextPositionY] = moveNumber;
            console.log(`Valid move! Placing ${moveNumber} at (${nextPositionX}, ${nextPositionY})`);

            if (knightTour(nextPositionX, nextPositionY, moveNumber + 1)) {
                return true;
            }

            // Backtrack if the move doesn't lead to a solution
            console.log(`Backtracking from (${nextPositionX}, ${nextPositionY})`);
            chessBoard[nextPositionX][nextPositionY] = -1;
        } else {
            console.log(`Invalid move: (${nextPositionX}, ${nextPositionY})`);
        }
    }
    return false;
}

// Initialize starting position
console.log(`Starting at random position: (${randomStartX}, ${randomStartY})`);
chessBoard[randomStartX][randomStartY] = 0;

// Start the knight's tour
const isSolutionFound = knightTour(randomStartX, randomStartY, 1);

// Print final result
if (isSolutionFound) {
    console.log('\nSolution found! Final board configuration:');
    console.table(chessBoard);
} else {
    console.log('\nNo solution exists from the starting position.');
}
