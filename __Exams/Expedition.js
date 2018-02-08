function expedition(map, decoder, decoderLocation, start) {
    let steps = 0
    let currentLocation = start

    decoderLocation.forEach(location => {

        for (let row = location[0], dRow = 0; row < location[0] + decoder.length; row++, dRow++) {
            if (map[row] === void 0) break
            for (let col = location[1], dCol = 0; col < location[1] + decoder[0].length; col++, dCol++) {
                if (map[row][col] === void 0) break
                map[row][col] = (map[row][col] + decoder[dRow][dCol]) % 2

            }
        }
    })

    while (true) {
        steps++
        let [row, col] = currentLocation
        if (canGoUp(row, col)) {
            map[row][col] = 1;
            currentLocation[0]--
            continue
        }
        if (canGoRight(row, col)) {
            map[row][col] = 1;
            currentLocation[1]++
            continue
        }
        if (canGoDown(row, col)) {
            map[row][col] = 1;
            currentLocation[0]++
            continue
        }
        if (canGoLeft(row, col)) {
            map[row][col] = 1;
            currentLocation[1]--
            continue
        }

        break;
    }


    if (isAtEdge(currentLocation)) {

        console.log(steps)
        console.log(isAtEdge(currentLocation))
    }

    else {
        let row = currentLocation[0] + 1
        let col = currentLocation[1] + 1
        console.log(steps)
        let quadrant = 0;

        if (row <= map.length / 2) {
            if (col <= map[0].length / 2) quadrant = 2;
            else quadrant = 1
        }
        else {
            if (col <= map[0].length / 2) quadrant = 3
            else quadrant = 4
        }
        console.log(`Dead end ${quadrant}`)
    }

    function isAtEdge(currentLocation) {
        if (currentLocation[0] === 0) return 'Top'
        if (currentLocation[0] === map.length - 1) return 'Bottom'
        if (currentLocation[1] === 0) return 'Left'
        if (currentLocation[1] === map[0].length - 1) return 'Right'
        return false
    }

    function canGoUp(row, col) {
        return cellIsValid(row - 1, col);
    }

    function canGoRight(row, col) {
        return cellIsValid(row, col + 1);
    }

    function canGoDown(row, col) {
        return cellIsValid(row + 1, col);
    }

    function canGoLeft(row, col) {
        return cellIsValid(row, col - 1);
    }

    function cellIsValid(row, col) {
        if (map[row] === void 0) return false
        if (map[row][col] === void 0) return false
        if (map[row][col] === 1) return false
        return true
    }
}

expedition(
    [[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]

)