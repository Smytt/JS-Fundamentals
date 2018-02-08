function solve(base, increment) {
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let height = 0

    while (base > 0) {
        height++
        stone += (base - 2) > 0 ? ((base - 2) ** 2) * increment : 0
        if (height % 5 !== 0) {
            marble += (base - 2) > 0 ? (base ** 2 - (base - 2) ** 2) * increment : 0
        }
        else {
            lapisLazuli += (base - 2) > 0 ? (base ** 2 - (base - 2) ** 2) * increment : 0
        }
        if (base <= 2) {
            gold += (base ** 2) * increment
        }
        base -= 2
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`)
}

solve(11, 0.75)