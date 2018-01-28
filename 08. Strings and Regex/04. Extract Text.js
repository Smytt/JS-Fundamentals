function extractText(text) {
    let regex = /\((.+?)\)/g
    let result = [];
    let match = [];
    while (match = regex.exec(text)) {
        result.push(match[1])
    }
    console.log(result.join(', '))
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')