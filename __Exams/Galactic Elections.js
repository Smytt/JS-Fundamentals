function solve(ballots) {
    let votes = {}
    let candidates = []
    let winners = {}
    let systemsByWinner = {}

    ballots.forEach(ballot => {
        if (!votes.hasOwnProperty(ballot.system)) {
            votes[ballot.system] = {}
        }
        if (!votes[ballot.system].hasOwnProperty(ballot.candidate)) {
            votes[ballot.system][ballot.candidate] = 0
        }
        if (candidates.indexOf(ballot.candidate) === -1) {
            candidates.push(ballot.candidate)
        }
        votes[ballot.system][ballot.candidate] += ballot.votes
    })

    Object.keys(votes).forEach(system => {
        let totalVotes = 0
        let max = 0
        Object.keys(votes[system]).forEach(candidate => {
            totalVotes += votes[system][candidate]
            if (votes[system][candidate] > max) {
                max = votes[system][candidate]
                votes[system].winner = [candidate, 0]
            }
            votes[system].winner[1] = totalVotes
        })
    })


    candidates.forEach(candidate => {
        let totalVotes = 0
        Object.keys(votes).forEach(system => {
            if (votes[system].winner[0] === candidate) {
                totalVotes += votes[system].winner[1]
                winners[candidate] = totalVotes
            }
        })
    })

    let onlyOneWinner = new Set()
    Object.keys(winners).forEach(winner => {
        onlyOneWinner.add(winner)
    })

    if (onlyOneWinner.size === 1) {
        console.log(`${[...onlyOneWinner][0]} wins with ${winners[[...onlyOneWinner][0]]} votes`)
        console.log(`${[...onlyOneWinner][0]} wins unopposed!`)
    }

    else {
        let totalVotes = 0
        let firstPlace = 0
        let secondPlace = 0
        let firstPlaceName = ''
        let secondPlaceName = ''
        Object.keys(winners).forEach(winner => {
            totalVotes += winners[winner]
            if (firstPlace < winners[winner]) {
                secondPlace = firstPlace
                secondPlaceName = firstPlaceName
                firstPlace = winners[winner]
                firstPlaceName = winner
            }
            else if (secondPlace < winners[winner]) {
                secondPlace = winners[winner]
                secondPlaceName = winner
            }
        })

        if (firstPlace * 2 > totalVotes) {

            candidates.forEach(candidate => {
                systemsByWinner[candidate] = []
                Object.keys(votes).forEach(system => {
                    if (votes[system].winner[0] === candidate) {
                        let thisSystemVotes = {}
                        thisSystemVotes[system] = votes[system].winner[1]
                        systemsByWinner[candidate].push(thisSystemVotes)
                    }
                })
            })

            systemsByWinner[secondPlaceName].sort((a, b) => {
                let aVotes = 0
                let bVotes = 0
                Object.keys(a).forEach(points => aVotes += a[points])
                Object.keys(b).forEach(points => bVotes += b[points])
                return bVotes - aVotes
            })

            console.log(`${firstPlaceName} wins with ${firstPlace} votes`)
            console.log(`Runner up: ${secondPlaceName}`)

            Object.keys(systemsByWinner).forEach(candidate => {
                if (candidate === secondPlaceName) {
                    systemsByWinner[candidate].forEach(system => {
                        Object.keys(system).forEach(systemName => {
                            console.log(`${systemName}: ${system[systemName]}`)
                        })
                    })
                }
            })
        }

        else {
            console.log(`Runoff between ${firstPlaceName} with ${Math.floor(firstPlace * 100 / totalVotes)}% ` +
                `and ${secondPlaceName} with ${Math.floor(secondPlace * 100 / totalVotes)}%`)
        }
    }
}

solve([
    {system: 'Theta', candidate: 'Kitler', votes: 50},
    {system: 'Theta', candidate: 'Space', votes: 45},
    {system: 'Theta', candidate: 'Huge', votes: 45},
    {system: 'Theta', candidate: 'Flying', votes: 45},
    {system: 'Tau', candidate: 'Kitler', votes: 50},
    {system: 'Tau', candidate: 'Space', votes: 45},
    {system: 'Tau', candidate: 'Huge', votes: 15},
    {system: 'Sigma', candidate: 'Kitler', votes: 50},
    {system: 'Sigma', candidate: 'Huge', votes: 45},
    {system: 'Sigma', candidate: 'Space', votes: 15},
    {system: 'Omicron', candidate: 'Kitler', votes: 50},
    {system: 'Omicron', candidate: 'Huge', votes: 20},
    {system: 'Omicron', candidate: 'Space', votes: 25},
])