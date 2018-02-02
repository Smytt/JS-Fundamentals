function heroInventory(input) {
    let heroes = []

    input.forEach(line => {
        let heroData  = line.split(' / ')
        let name = heroData[0]
        let level = Number(heroData[1])
        let items = []
        if(heroData[2]) {
            items = heroData[2].split(', ')
        }

        let hero = {"name": name, "level": level, "items": items}
        heroes.push(hero)
    })

    console.log(JSON.stringify(heroes))

}

heroInventory(['Isacc / 23 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])