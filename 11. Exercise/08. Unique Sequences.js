function uniqueArrays(input) {
    let unique = new Set()

    input.forEach(array => {
        let string = JSON.parse(array).sort((a, b) => b - a).join(':')
        unique.add(string)
    })

    Array.from(unique).sort((a,b) =>
        a.split(':').length - b.split(':').length
    ).forEach(string => {
        console.log('[' + string.split(':').map(x => Number(x)).join(', ') + ']')
    })
}

uniqueArrays(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'])