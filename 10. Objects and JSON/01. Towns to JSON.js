function townsToJSON(input) {
    let towns = []
    let keys = input[0].split('|').filter(x => x !== '').map(x => x.trim());
    for (let i = 1; i < input.length; i++) {
        let townInfo = input[i].split('|').filter(x => x !== '').map(x => x.trim());
        let town = {}
        townInfo.forEach((info, i) => {
            if (!isNaN(info)) {
                town[keys[i]] = Number(info)
            } else {
                town[keys[i]] = info
            }
        })
        towns.push(town)
    }

    console.log(JSON.stringify(towns))
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])