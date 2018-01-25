function smallestTwo(arr) {

    let unique = []

    arr.forEach(x => {
        if (unique.indexOf(x) === -1) unique.push(x)
    })

    unique.sort((a, b) => a - b)
    let smallest = unique.splice(0,2)
    console.log(smallest.join(' '))
}

function smallestTwo2(arr) {

    console.log(arr.sort((a,b) => a-b).slice(0,2).join(' '))

}

smallestTwo2([30, 15, 50, 5])