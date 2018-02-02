function populationPerTown(input) {
    let allTowns = {}
    input.forEach(line => {
        let town = line.split(' <-> ')
        if (!allTowns.hasOwnProperty(town[0])) {
            allTowns[town[0]] = 0
        }

        allTowns[town[0]] += Number(town[1])
    })

    Object.keys(allTowns).forEach(key => {
            console.log(key + ' : ' + allTowns[key])
        }
    )
}

populationPerTown(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])