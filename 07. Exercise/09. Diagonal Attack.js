function diagonalAttack(input) {
    let arr = input.map(x => x.split(' ').map(Number));
    let leftDiag = 0;
    let rightDiag = 0;

    for (let i = 0; i < arr.length; i++) {
        leftDiag += arr[i][i];
        rightDiag += arr[i][arr.length - 1 - i];
    }
    if (leftDiag === rightDiag) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (j !== i && j !== arr.length - 1 - i) {
                    arr[i][j] = leftDiag;
                }
            }
        }

    }

    arr.forEach(x=> console.log(x.join(' ')))


}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)