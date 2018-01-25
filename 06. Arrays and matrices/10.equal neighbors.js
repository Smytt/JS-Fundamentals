function equalNeighbors(arr) {
    let count = 0;
    arr.forEach((x, i) => {
        x.forEach((y, j) => {
            if (i !== arr.length - 1) {
                if (arr[i][j] === arr[i+1][j]) count++
            }

            if (j !== x.length - 1) {
                if(arr[i][j] === arr[i][j + 1]) count++
            }
        })
    })

    console.log(count)
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])