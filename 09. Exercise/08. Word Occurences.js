function wordOccurances(text, target) {
    let count = 0;
    let regex = new RegExp('\\b' + target.toLowerCase() + '\\b', 'g')
    text = text.toLowerCase()
    let match

    while (match = regex.exec(text)) {
        count++
    }
    console.log(count)
}


wordOccurances('The watetherfall was so high, that the child couldn’t see its peak.THE', 'the')