function storeCatalogue(input) {
    let catalogue = {}

    input.forEach(row => {

        let key = row[0]
        if (!catalogue.hasOwnProperty(key)) {
            catalogue[key] = []
        }
        catalogue[key].push(row.replace(' : ', ': '))
    })

    Object.keys(catalogue).sort().forEach(key => {
        console.log(key)
        catalogue[key].sort().forEach( product => {
            console.log(` ${product}`)
        })
    })
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])