
// Given a string with all the numbers of a full Sudoku grid (81 numbers)
// It will return a Two-dimensional Array with the values (as integers).
// 0 is a valid value an represents an empty cell.
// '016002400';

function constructSudokuGrid(sudokuString) {
    var sudokuGame = [];
    var iter = 0;

    //validate sudokuString:
    // - Each character needs to be a number between 0 and 9 
    // - Needs to be 81 characters long
    const validSudokuStringRegex = /^[0-9]{81}$/;
    if (!sudokuString.match(validSudokuStringRegex)) {
        throw new TypeError('sudokuString invalid');
    }

    for (let rows = 0; rows < 9; rows++) {
        var sudokuRow = [];
        for (let cols = 0; cols < 9; cols++) {
          // push cell value
          sudokuRow.push(parseInt(sudokuString[iter])); 
          iter += 1;
        }  
        sudokuGame.push(sudokuRow);
     }

     return sudokuGame;
}

// Given a Sudoku grid, returns an object/dictionary
// containing the 9 'boxes' or 3x3 sub-grids that make up
// the whole board. This will be used for highlight and 
// validation functions, where all the cells in the same
// box as a given cell have to be considered.
function extractBoxesFromGrid(sudokuGrid) {
    let boxes = {};
    for(let iterRows = 0; iterRows < 3; iterRows++) {
        for(let iterCols = 0; iterCols < 3; iterCols++) {
            let boxKey = 'box_' + iterRows + '_' + iterCols;
            boxes[boxKey] = getBoxSubArray(iterRows, iterCols, sudokuGrid);
        }
    }

    return boxes;
}

function getBoxSubArray(boxRow, boxCol, sudokuGrid) {
    let subArray = [];

    let rowStart = boxRow * 3;
    let colStart = boxCol * 3;
    let rowEnd = rowStart + 3;
    let colEnd = colStart + 3;

    for(let iterRows = rowStart; iterRows < rowEnd; iterRows++) {
        for(let iterCols = colStart; iterCols < colEnd; iterCols++) {
            subArray.push(sudokuGrid[iterRows][iterCols]);
        }    
    }    

    return subArray;
}

module.exports = {
    constructSudokuGrid,
    extractBoxesFromGrid
 };