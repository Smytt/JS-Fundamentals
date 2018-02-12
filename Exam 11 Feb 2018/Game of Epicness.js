function solve(generals, battles) {
    let kingdoms = []
    generals.forEach(general => {
        let kingdomIndex = kingdoms.findIndex(kingdom => kingdom.kingdom === general.kingdom)
        if (kingdomIndex === -1) {
            let kingdom = {}
            kingdom.kingdom = general.kingdom
            kingdom.generals = []
            kingdoms.push(kingdom)
            kingdomIndex = kingdoms.length - 1
        }

        let generalIndex = kingdoms[kingdomIndex].generals.findIndex(thisGeneral => thisGeneral.general === general.general)
        if (generalIndex === -1) {
            let newGeneral = {}
            newGeneral.general = general.general
            newGeneral.army = 0
            newGeneral.victories = 0
            newGeneral.defeats = 0
            kingdoms[kingdomIndex].generals.push(newGeneral)
            generalIndex = kingdoms[kingdomIndex].generals.length - 1
        }
        kingdoms[kingdomIndex].generals[generalIndex].army += general.army
    })

    battles.forEach(battle => {
        if (battle[0] !== battle[2]) {
            let attackerKingdomIndex =
                kingdoms.findIndex(kingdom => kingdom.kingdom === battle[0])
            let defendingKingdomIndex =
                kingdoms.findIndex(kingdom => kingdom.kingdom === battle[2])
            let attackingGeneralIndex =
                kingdoms[attackerKingdomIndex].generals.findIndex(general => general.general === battle[1])
            let defendingGeneralIndex =
                kingdoms[defendingKingdomIndex].generals.findIndex(general => general.general === battle[3])


            if (kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army < kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army) {
                kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army *= 0.9
                kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].defeats++
                kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army *= 1.1
                kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].victories++
            }

            else if (kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army > kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army) {
                kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army *= 1.1
                kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].victories++
                kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army *= 0.9
                kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].defeats++
            }

            kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army =
                Math.floor(kingdoms[attackerKingdomIndex].generals[attackingGeneralIndex].army)
            kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army =
                Math.floor(kingdoms[defendingKingdomIndex].generals[defendingGeneralIndex].army)
        }
    })


    kingdoms.forEach(kingdom => {
        kingdom.totalVictories = 0
        kingdom.totaldefeats = 0

        kingdom.generals.forEach(general => {
            kingdom.totalVictories += general.victories
            kingdom.totaldefeats += general.defeats
        })
    })

    let sortedKingdoms = kingdoms.sort((a, b) => {
        if (b.totalVictories === a.totalVictories) {
            if (a.totaldefeats === b.totaldefeats) {
                if (a.kingdom < b.kingdom) return -1
                if (a.kingdom > b.kingdom) return 1
                if (a.kingdom === b.kingdom) return 0
            }
            return a.totaldefeats - b.totaldefeats
        }
        return b.totalVictories - a.totalVictories
    })

    console.log('Winner: ' + sortedKingdoms[0].kingdom)

    sortedKingdoms[0].generals.sort((a,b) => b.army - a.army).forEach(general => {
        console.log('/\\general: ' + general.general)
        console.log('---army: ' + general.army)
        console.log('---wins: ' + general.victories)
        console.log('---losses: ' + general.defeats)
    })
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)