function solve(text) {
    let validMatch = /[\s\S]*<svg>\s*<cat><text>[\s\S]*\[([\s\S]*)\]<\/text><\/cat>\s*<cat>(?:<g><val>([0-9]{1}|(10))<\/val>([0-9]+)<\/g>)+?<\/cat>\s*<\/svg>[\s\S]*/g
    let label = ''
    let matchLabel = /<text>[\s\S]*\[([\s\S]*)\]<\/text>/g
    let matchVotes = /<g><val>([0-9]{1}|(?:10))<\/val>([0-9]+)<\/g>/g
    let match;
    let totalVotes = 0;
    let totalScore = 0;

    while (match = matchLabel.exec(text)) {
        label = match[1]
    }
    while (match = matchVotes.exec(text)) {
        totalVotes += Number(match[2])
        totalScore += (Number(match[2])*Number(match[1]))
    }

    let totalPoints = Math.round(totalScore*100/totalVotes)/100
    console.log(`${label}: ${totalPoints}`)
}