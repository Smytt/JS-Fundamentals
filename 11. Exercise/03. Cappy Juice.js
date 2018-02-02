function cappyJuice(input) {
    let juices = {}
    let bottles = {}

    input.forEach(line => {
            let juice = line.split(' => ')
            if (!juices.hasOwnProperty(juice[0])) {
                juices[juice[0]] = 0
            }
            juices[juice[0]] += Number(juice[1])
            if (juices[juice[0]] >= 1000) {
                if (!bottles.hasOwnProperty(juice[0])) {
                    bottles[juice[0]] = 0
                }
                bottles[juice[0]] += Math.floor(juices[juice[0]] / 1000)
                juices[juice[0]] = juices[juice[0]] % 1000
            }
        }
    )

    Object.keys(bottles).forEach(bottle => {
        console.log(bottle + ' => ' + bottles[bottle])

    })
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])