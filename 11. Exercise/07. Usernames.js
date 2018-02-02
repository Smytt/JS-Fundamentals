function usernames(usernames) {

    let uniques = new Set(usernames)

    Array.from(uniques).sort((a, b) => {
        if (a.length === b.length) {
            if (a > b) return 1;
            if (a < b) return -1
        }
        return a.length - b.length
    }).forEach(x => console.log(x))
}

usernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot'])