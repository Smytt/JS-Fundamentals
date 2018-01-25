function biggestElement(arr) {
    let biggest = Number.NEGATIVE_INFINITY

    arr.forEach(x => {
        x.forEach(y => {
            biggest = Math.max(biggest, y)
        })
    })

    console.log(biggest)
}

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])