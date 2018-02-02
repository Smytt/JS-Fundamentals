function carCatalogue(input) {
    let cars = {}
    input.forEach(row => {
        let [make, model, qty] = row.split(' | ')

        if (!cars.hasOwnProperty(make))
            cars[make] = {}

        if (!cars[make].hasOwnProperty(model))
            cars[make][model] = 0

        cars[make][model] += Number(qty)
    })

    Object.keys(cars).forEach(make => {
        console.log(make)
        Object.keys(cars[make]).forEach(model => {
            console.log(`###${model} -> ${cars[make][model]}`)
        })
    })
}

carCatalogue(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])