function restHouse(rooms, guests) {
    let withoutRoom = 0;

    guests.forEach(pair => {
        if (pair.first.gender !== pair.second.gender) {
            let index = rooms.findIndex(x => x.type === "double-bedded" && !x.hasOwnProperty('guests'));
            if (index > -1) {
                rooms[index].guests = [pair.first, pair.second]
            }
            else {
                withoutRoom += 2
            }
        }

        else {
            Object.keys(pair).forEach(guest => {
                let index = rooms.findIndex(
                    x => x.type === "triple" &&
                        (
                            !x.hasOwnProperty('gender') ||
                            (
                                x.gender === pair[guest].gender &&
                                (
                                    !x.hasOwnProperty('guests') ||
                                    x.guests.length < 3
                                )
                            )
                        ));
                if (index > -1) {
                    if (!rooms[index].hasOwnProperty('guests'))
                        rooms[index].guests = []
                    rooms[index].guests.push(pair[guest])
                    rooms[index].gender = pair[guest].gender
                }
                else {
                    withoutRoom++
                }
            })
        }
    })

    rooms.sort((a,b) => {
        if (a.number > b.number) return 1;
        if (a.number < b.number) return -1;
        return 0;
    }).forEach(room => {
        console.log(`Room number: ${room.number}`)
        if(!room.hasOwnProperty('guests'))
            room.guests = []
        room.guests.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }).forEach(guest => {
            console.log(`--Guest Name: ${guest.name}`)
            console.log(`--Guest Age: ${guest.age}`)
        })
        let emptyBeds = 0
        if (room.type === 'double-bedded') {
            emptyBeds = 2 - room.guests.length
        }
        else emptyBeds = 3 - room.guests.length
        console.log(`Empty beds in the room: ${emptyBeds}`)
    })
    console.log(`Guests moved to the tea house: ${withoutRoom}`)
}

restHouse([ { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } ],
    [ { first: { name: 'Ivan', gender: 'male', age: 24 },
        second: { name: 'Petar', gender: 'male', age: 23 } },
        { first: { name: 'Katerina', gender: 'female', age: 23 },
            second: { name: 'Angel', gender: 'male', age: 22 } },
        { first: { name: 'Kiro', gender: 'male', age: 23 },
            second: { name: 'Boryana', gender: 'female', age: 22 } } ])