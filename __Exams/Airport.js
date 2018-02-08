function solve(input) {
    let planesAtAirport = []
    let cities = []

    input.forEach(string => {
        let [id, town, passengerCount, direction] = string.split(' ')
        if (direction === 'land') {
            if (planesAtAirport.filter(plane => plane.id === id).length === 0) {
                let plane = {}
                plane.id = id
                plane.town = town
                plane.passengerCount = Number(passengerCount)
                planesAtAirport.push(plane)

                if (cities.filter(city => city.name === town).length === 0) {
                    let city = {}
                    city.name = town
                    city.arrivals = 0
                    city.departures = 0
                    city.planes = []
                    cities.push(city)
                }

                let index = cities.findIndex(city => city.name === town)
                cities[index].arrivals += Number(passengerCount)
                if (cities[index].planes.indexOf(id) === -1) {
                    cities[index].planes.push(id)
                }
            }
        }
        if (direction === 'depart') {
            if (planesAtAirport.filter(plane => plane.id === id).length !== 0) {
                let index = planesAtAirport.findIndex(plane => plane.id === id)
                if (index !== -1) {
                    planesAtAirport.splice(index, 1)
                }

                if (cities.filter(city => city.name === town).length === 0) {

                    let city = {}
                    city.name = town
                    city.arrivals = 0
                    city.departures = 0
                    city.planes = []
                    cities.push(city)
                }

                index = cities.findIndex(city => city.name === town)
                cities[index].departures += Number(passengerCount)
                if (cities[index].planes.indexOf(id) === -1) {
                    cities[index].planes.push(id)
                }
            }
        }
    })

    planesAtAirport.sort((a, b) => {
        if (a.id.toLowerCase() < b.id.toLowerCase()) return -1
        if (a.id.toLowerCase() > b.id.toLowerCase()) return 1
        return 0
    })
    cities.sort((a, b) => {
        if (a.arrivals === b.arrivals) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
        }
        return b.arrivals - a.arrivals
    }).forEach(town => {
        town.planes.sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) return -1
            if (a.toLowerCase() > b.toLowerCase()) return 1
            return 0
        })
    })

    console.log('Planes left:')
    planesAtAirport.forEach(plane => console.log(`- ${plane.id}`))

    cities.forEach(city => {
        console.log(city.name)
        console.log(`Arrivals: ${city.arrivals}`)
        console.log(`Departures: ${city.departures}`)
        console.log('Planes:')
        city.planes.forEach(plane => console.log(`-- ${plane}`))
    })
}

solve(['Airbus0 London 150 land',
        'Airbus1 Amsterdam 350 land',
        'Airbus Bologna 350 land',
        'Airbus2 Tokyo 0 land',
        'Airbus3 AbuDhabi 350 land',
        'Airbus4 Monaco 150 land',
        'Airbus5 NewYork 0 land',
        'Airbus6 Paris 0 land',
        'Airbus7 Madrid 0 land',
        'Airbus8 Bukurest 0 land',
        'Airbus9 LasVegas 200 land',
        'Airbus1 Amsterdam 350 depart',
        'Airbus Bologna 350 depart',
        'Airbus3 AbuDhabi 350 depart',
        'Airbus0 London 150 depart',
        'Airbus4 Monaco 150 depart',
        'Airbus5 Monaco -1 depart',
        'Airbus6 Paris -10 land',
        'Airbus7 Sofia 230 depart',
        'Airbus7 Monaco 200 depart',
        'Airbus9 Sofia 340 land'
    ]
)