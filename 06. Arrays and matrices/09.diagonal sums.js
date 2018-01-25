function diagonalSums(arr) {
    let res = []
    let sum = 0;
    arr.forEach((x, i) => sum += x[i])
    res.push(sum)
    sum = 0;
    arr.forEach((x, i) => sum += x[x.length - 1 - i])
    res.push(sum)
    console.log(res.join(' '))
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])