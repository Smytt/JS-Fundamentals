function findVariables(string) {
    let variables = []
    let regex = /\b_([A-Za-z0-9]+)\b/g
    let match

    while (match = regex.exec(string)) {
        variables.push(match[1])
    }

    console.log(variables.join(','))

}

findVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable')