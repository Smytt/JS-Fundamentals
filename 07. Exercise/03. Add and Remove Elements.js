function addRemoveElements(arr) {
    let result = []

    arr.forEach((x, i) => {
        if (x === 'add') result.push(i + 1)
        else result.pop()
    })

    if (result.length === 0) console.log('Empty')
    else result.forEach(x => console.log(x))
}