function solve(text) {
    let matchSvg = /<svg>.*?<\/svg>/g
    let matchCat = /<cat>.*?<\/cat>/g
    let validSvg = /^[\s\S]*?<svg>[\s\S]*?<cat><text>[\s\S]*?\[([\s\S]*?)\][\s\S]*?<\/text><\/cat>[\s\S]*<cat>([\s\S]*?)<\/cat>[\s\S]*?<\/svg>[\s\S]*?$/g
    let matchTitle = /<cat><text>[\s\S]*?\[([\s\S]*?)\][\s\S]*?<\/text><\/cat>/g
    let matchVotes = /<g><val>([1-9]{1}|(?:10))<\/val>([0-9]+)<\/g>/g
    let valid = false;
    let title
    let matchTemp

    let totalVotes = 0;
    let totalScore = 0;

    if (!/<svg>[\s\S]*<\/svg>/g.test(text))
        return 'No survey found'

    let matches = text.match(matchSvg)

    matches.forEach(match => {
        if (match.match(matchCat).length === 2) {
            if (match.match(validSvg).length === 1) {

                let catMatches = match.match(matchCat)

                while (matchTemp = matchTitle.exec(match)) {
                    valid = true
                    title = matchTemp[1]
                }
                while (matchTemp = matchVotes.exec(match)) {
                    totalVotes += Number(matchTemp[2])
                    totalScore += (Number(matchTemp[2]) * Number(matchTemp[1]))
                }
            }
        }
    })

    if (!valid) {
        return 'Invalid format'
    }

    let totalPoints = Math.round(totalScore*100/totalVotes)/100
    return (`${title}: ${totalPoints}`)
}

console.log(
    solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>\n')
)