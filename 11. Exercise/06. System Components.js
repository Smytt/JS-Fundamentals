function systemComponents(input) {
    let catalogue = {}
    input.forEach(row => {
        let [system, component, subComponent] = row.split(' | ')

        if (!catalogue.hasOwnProperty(system))
            catalogue[system] = {}

        if (!catalogue[system].hasOwnProperty(component))
            catalogue[system][component] = []

        catalogue[system][component].push(subComponent)
    })

    let sortSystems = (a, b) => {
        if (Object.keys(catalogue[b]).length === Object.keys(catalogue[a]).length) {
            if (a > b) return 1
            if (a < b) return -1
            if (a === b) return 0
        }
        return Object.keys(catalogue[b]).length - Object.keys(catalogue[a]).length
    }

    Object.keys(catalogue).sort(sortSystems).forEach(system => {
        console.log(system)
        Object.keys(catalogue[system]).sort((a, b) => {
            return Object.keys(catalogue[system][b]).length -
                Object.keys(catalogue[system][a]).length
        }).forEach(Component => {
            console.log(`|||${Component}`)
            catalogue[system][Component].forEach(subC => {
                console.log(`||||||${subC}`)

            })
        })
    })
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])