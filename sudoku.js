const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [1, 2, 0, 0],
    [3, 4, 0, 0],
    [0, 0, 1, 2],
    [0, 0, 3, 4]
];



//to clone the board
function cloneBoard(b) { //parameter
    let newBoard = []; //this will be the new board

    for(let i = 0; i < b.length; i++) {
        newBoard[i] = b[i].slice();
    }
    return newBoard; //pass out the value of the duplicated-board version instead of the original board version
}

//to display the board
function displayboard(b) {
    for(let row of b) {
        console.log(row.join(" | "));
    }
}

//to check for winning condition
function checkWin() {
    for(let row of board) {
        for (let cell of row) {
            if (cell === 0) return false; //as long as the cell value equals to zero, it will return false
        }
    }

    return true;
}

// Here we clone from the initial state of the board to the duplicate copy called initialBoar
const initialBoard = cloneBoard(board); 

//to get the user input
function getUserInput() {
    // to check if the game is completed or not if not it will ignore this if construct
    if (checkWin(board)) {
        console.log("Congratulations, you solved the Sudoku!");
        rl.close(); //disable the input function so it will not as for any input anymore
        return; // Exit the function if the game is over
    }
    rl.question('Enter row, column, and value (r c v): ', (answer) => {
        const parts = answer.split(' '); //it will split the string after every space e.g. "3 2 1"
        const r = parseInt(parts[0]) //3 
        const c = parseInt(parts[1]) //2
        const v = parseInt(parts[2]) //1

        if(initialBoard[r][c] !== 0) {
            console.log("This cell is pre-filled. Choose another cell");
            getUserInput(); //it will call itself to prompt the user u enter the r c v
            return;
        }
        board[r][c] = v; //so if the cell is not pre-filled only then it will update the value of that cell
        displayboard(board);
        getUserInput();
    });
}

 displayboard(board);
 getUserInput();