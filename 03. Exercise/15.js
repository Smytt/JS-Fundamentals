function isInside(input) {
    let [x, y, xmin, xmax, ymin, ymax] = input

    if (x >= xmin && x <= xmax && y >= ymin && y <= ymax)
        return 'inside'
    return 'outside'
}

console.log(isInside([8, -1, 2, 12, -3, 3]))