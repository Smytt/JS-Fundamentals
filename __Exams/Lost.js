function lost(keyword, text) {
    let matchLat = /(?:(north)|(east))[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim
    let matchKey = new RegExp(keyword + '([\\s\\S]+)' + keyword, 'gm')
    let latitude = ''
    let longitude = ''
    let message = ''
    let match
    while (match = matchLat.exec(text)) {
        if (match[1])
            latitude = match[3] + '.' + match[4] + ' N';
        else if (match[2])
            longitude = match[3] + '.' + match[4] + ' E';
    }

    while (match = matchKey.exec(text)) {
        message = 'Message: ' + match[1]
    }

    console.log(latitude)
    console.log(longitude)
    console.log(message)
}

lost('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth east 47,\n874532')