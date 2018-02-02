function lowestPrices(input) {
    let products = {}

    input.forEach(row => {
        let [town, product, price] = row.split(' | ')
        let found = false;
        if (!(product in products)) {
            products[product] = []
        }
        products[product].forEach(x => {
            if (x[0] === town) {
                x[1] = Number(price)
                found = true
            }
        })
        if (!found) {
            products[product].push([town, Number(price)])
        }

    })

    for (let x in products) {
        let towns = products[x].sort((a, b) => a[1] - b[1])
        let town = towns[0][0]
        let price = towns[0][1]
        console.log(`${x} -> ${price} (${town})`)
    }
}

lowestPrices([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])