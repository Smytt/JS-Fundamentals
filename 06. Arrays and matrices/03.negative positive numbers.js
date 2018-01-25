function negPos(arr) {
    let res = []
    arr.forEach(x => x >= 0 ? res.push(x) : res.unshift(x))
    res.forEach(x => console.log(x))
}

negPos([3, -2, 0, -1])