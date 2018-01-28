function matchWords(string) {
    console.log(string.match(/\w+/g).join('|'))
}

matchWords('_(Underscores) are also word characters')