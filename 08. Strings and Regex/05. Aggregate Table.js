function aggregateTable(input) {
    let towns = [];
    let income = 0;
    let matchTown = /\|\s(.+?)(\s+\|)/
    let matchNum = /\|\s([-0-9.]+)/

    input.forEach(x => {
        towns.push(x.match(matchTown)[1])
        income += Number(x.match(matchNum)[1])
    })

    console.log(towns.join(', '))
    console.log(income)
}

aggregateTable(['| Sas23 23 23 r           | 300',
    '| Veliko Tarnovo  | -500',
    '| Yambol          | 275'])