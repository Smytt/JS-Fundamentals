function solve(input) {
    let totalMoney = 0
    let firstDay = 0
    let bought = false
    for (let i = 0; i < input.length; i++) {
        let minedToday = Number(input[i]) * 67.51

        if ((i + 1) % 3 === 0) {
            minedToday *= 0.7
        }

        totalMoney += minedToday

        if (totalMoney >= 11949.16 && !bought) {
            firstDay = i + 1
            bought = true
        }
    }

    let totalBTC = Math.floor(totalMoney / 11949.16);
    let moneyLLeft = totalMoney % 11949.16


    console.log(`Bought bitcoins: ${totalBTC}`)
    if (firstDay > 0)
    console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    console.log(`Left money: ${moneyLLeft.toFixed(2)} lv.`)
}

solve([3124.15,
    504.212,
    2511.124])