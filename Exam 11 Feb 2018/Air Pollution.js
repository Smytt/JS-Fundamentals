function solve(mapStr, forcesStr) {
    let map = []
    let polluted = []

    mapStr.forEach(row => {
        map.push(row.split(' ').map(Number))
    })

    forcesStr.forEach(force => {
        let [forceType, index] = force.split(' ')

        switch (forceType) {
            case 'breeze':
                map[Number(index)] = map[Number(index)].map(cell => {
                    cell -= 15;
                    if (cell < 0) return 0;
                    return cell
                });
                break;
            case 'gale':
                map.forEach(row => {
                    row[Number(index)] -= 20;
                    if (row[Number(index)] < 0)
                        row[Number(index)] = 0
                })
                break;
            case 'smog':
                map = map.map(row =>
                    row.map(cell => cell += Number(index)))
                break;
        }
    })

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] >= 50)
                polluted.push(`[${row}-${col}]`)
        }

    }

    if (polluted.length !== 0) {
        console.log(`Polluted areas: ${polluted.join(', ')}`)
    }
    else console.log('No polluted areas')
}

solve([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)