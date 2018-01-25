function spiralMatrix(col, row) {
    let number = 1;
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = []
        for (let j = 0; j< col; j++) {
            matrix[i][j] = undefined
        }
    }
    let curCol = 0;
    let curRow = 0;

    while (number <= col * row) {
        while (isValidCell(curCol, curRow)) {
            matrix[curRow][curCol] = number;
            number++;
            curCol++;
        }
        curCol--;
        curRow++;
        while (isValidCell(curCol, curRow)) {
            matrix[curRow][curCol] = number;
            number++;
            curRow++;
        }
        curRow--;
        curCol--;
        while (isValidCell(curCol, curRow)) {
            matrix[curRow][curCol] = number;
            number++;
            curCol--;
        }
        curCol++;
        curRow--;
        while (isValidCell(curCol, curRow)) {
            matrix[curRow][curCol] = number;
            number++;
            curRow--;
        }
        curRow++;
        curCol++;
    }

    function isValidCell(curCol, curRow) {
        if(curRow in matrix &&
            curCol in matrix[curRow] &&
            matrix[curRow][curCol] === undefined &&
            curRow <= row &&
            curCol <= col)
            return true
    }

    matrix.forEach(x => console.log(x.join(' ')))
}

spiralMatrix(3,3)