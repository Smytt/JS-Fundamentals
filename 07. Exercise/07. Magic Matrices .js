function magicMatrices(arr) {
    let isMagic = true;
    if (arr.length === 0) return false;
    let sum = arr[0].reduce((a, b) => a + b, 0);

    arr.forEach((x, i) => {

        let colSum = 0;
        let rowSum = x.reduce((a, b) => a + b, 0);

        if (rowSum !== sum) {
            isMagic = false;
        }

        x.forEach((y, j) => {
            if (j <= arr.length - 1 && arr[j][i] !== undefined)
                colSum += arr[j][i]
        });

        if (colSum !== sum) {
            isMagic = false;
        }
    })

    if (!isMagic) return false

    return true
}

console.log(magicMatrices([[2, 0, 0],
    [0, 2, 0]]
));