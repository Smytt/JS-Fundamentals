function countWords(input) {
    let wordCount = new Map()
    let words = []
    input.forEach(text => {
        words = words.concat(
            text
                .toLowerCase()
                .split(/[^\w]+/)
                .map(x => x.trim())
                .filter(x => x !== ''))
    })

    words = words.sort()
    words.forEach(word => {
        if (!wordCount.has(word)) {
            wordCount.set(word, 0)
        }

        wordCount.set(word, wordCount.get(word) + 1)
    })

    for (let [k,v] of wordCount) {
        console.log(`'${k}' -> ${v} times`)
    }

}

countWords(['The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.'])