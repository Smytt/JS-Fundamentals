function cityMarkets(input) {
    let allTowns = {}
    input.forEach(line => {
        let sale = line.split(/ -> | : /g)
        if (!allTowns.hasOwnProperty(sale[0])) {
            allTowns[sale[0]] = {}
        }

        allTowns[sale[0]][sale[1]] = Number(sale[2])*Number(sale[3])
    })
    Object.keys(allTowns).forEach(town => {
            console.log('Town - ' + town)
            Object.keys(allTowns[town]).forEach(sale => {
                console.log(`$$$${sale} : ${allTowns[town][sale]}`)
            })
        }
    )
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])