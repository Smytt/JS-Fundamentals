function orbit(input) {
    let row = input[2];
    let col = input[3];
    let matrix = [];
    for (let i = 0; i < input[0]; i++) {
        matrix[i] = [];
        for (let j = 0; j < input[1]; j++) {
            matrix[i][j] = undefined
        }
    }
    let number = 1;
    matrix[row][col] = number;
    let notFull = true;
    while (notFull) {
        notFull = false;
        for (let i = row - number; i <= row + number; i++) {
            for (let j = col - number; j <= col + number; j++) {
                if (i in matrix && j in matrix[i] && matrix[i][j] === undefined) {
                    matrix[i][j] = number + 1
                    notFull = true;
                }
            }
        }
        number++

    }

    matrix.forEach(x => console.log(x.join(' ')))
}

orbit([3, 5, 2, 2])