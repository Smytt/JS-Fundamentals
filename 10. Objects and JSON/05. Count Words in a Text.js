function countWords(input) {
    let wordCount = {}
    let words = []
    input.forEach(text => {
        words = words.concat(
            text
                .split(/[^\w]+/)
                .map(x => x.trim())
                .filter(x => x !== ''))
    })

    words.forEach(word => {
        if (!(word in wordCount)) {
            wordCount[word] = 0
        }

        wordCount[word]++
    })

    console.log(JSON.stringify(wordCount))

}

countWords(['Far too slow, you\'re far too slow.'])