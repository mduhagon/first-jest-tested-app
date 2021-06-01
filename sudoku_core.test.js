const sudoku_core = require('./sudoku_core');

test('constructSudokuGrid can parse a valid input string', () => {
    let inputString = '016002400320009000040103000005000069009050300630000800000306010000400072004900680';
    let expectedGrid = [
        [ 0, 1, 6, 0, 0, 2, 4, 0, 0 ],
        [ 3, 2, 0, 0, 0, 9, 0, 0, 0 ],
        [ 0, 4, 0, 1, 0, 3, 0, 0, 0 ],
        [ 0, 0, 5, 0, 0, 0, 0, 6, 9 ],
        [ 0, 0, 9, 0, 5, 0, 3, 0, 0 ],
        [ 6, 3, 0, 0, 0, 0, 8, 0, 0 ],
        [ 0, 0, 0, 3, 0, 6, 0, 1, 0 ],
        [ 0, 0, 0, 4, 0, 0, 0, 7, 2 ],
        [ 0, 0, 4, 9, 0, 0, 6, 8, 0 ]
    ];
    expect(sudoku_core.constructSudokuGrid(inputString)).toEqual(expectedGrid);
});


test('constructSudokuGrid gets an input that is too long and throws TypeError', () => {
    let inputString = '016002400320009000040103000005000069009050300630000800000306010000400072004900680AKHKJHKJHAKDHKJHADKHKSJDHKJDHSJHDKSDHK';
    expect(() => { sudoku_core.constructSudokuGrid(inputString) }).toThrow(TypeError);
});


test('constructSudokuGrid gets a number and throws TypeError', () => {
    let inputNumber = 13;
    expect(() => { sudoku_core.constructSudokuGrid(inputNumber) }).toThrow(TypeError);
});

test('constructSudokuGrid gets a string that is too short and throws TypeError', () => {
    let inputString = '123456'; // inputString[0] = 1 
    expect(() => { sudoku_core.constructSudokuGrid(inputString) }).toThrow(TypeError);
});

test('constructSudokuGrid gets a string with invalid characters or not a number and throws TypeError', () => {
    let inputString = 'ABC002400320009000040103000005000069009050300630000800000306010000400072004900680'; // inputString[0] = 1 
    expect(() => { sudoku_core.constructSudokuGrid(inputString) }).toThrow(TypeError);
});


test('extractBoxesFromGrid can extract boxes from a valid grid', () => {
    let validGrid = [
        [ 0, 1, 6, 0, 0, 2, 4, 0, 0 ],
        [ 3, 2, 0, 0, 0, 9, 0, 0, 0 ],
        [ 0, 4, 0, 1, 0, 3, 0, 0, 0 ],
        [ 0, 0, 5, 0, 0, 0, 0, 6, 9 ],
        [ 0, 0, 9, 0, 5, 0, 3, 0, 0 ],
        [ 6, 3, 0, 0, 0, 0, 8, 0, 0 ],
        [ 0, 0, 0, 3, 0, 6, 0, 1, 0 ],
        [ 0, 0, 0, 4, 0, 0, 0, 7, 2 ],
        [ 0, 0, 4, 9, 0, 0, 6, 8, 0 ]
    ];

    let expectedBoxes = {
        box_0_0: [ 0, 1, 6, 3, 2, 0, 0, 4, 0 ],
        box_0_1: [ 0, 0, 2, 0, 0, 9, 1, 0, 3 ],
        box_0_2: [ 4, 0, 0, 0, 0, 0, 0, 0, 0 ],
        box_1_0: [ 0, 0, 5, 0, 0, 9, 6, 3, 0 ],
        box_1_1: [ 0, 0, 0, 0, 5, 0, 0, 0, 0 ],
        box_1_2: [ 0, 6, 9, 3, 0, 0, 8, 0, 0 ],
        box_2_0: [ 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
        box_2_1: [ 3, 0, 6, 4, 0, 0, 9, 0, 0 ],
        box_2_2: [ 0, 1, 0, 0, 7, 2, 6, 8, 0 ]
    }

    expect(sudoku_core.extractBoxesFromGrid(validGrid)).toEqual(expectedBoxes);
});