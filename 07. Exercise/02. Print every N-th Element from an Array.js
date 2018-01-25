function everyNthElement(arr) {
    let step = arr.pop()
    arr
        .filter((x, i) => i % step === 0)
        .forEach(element => console.log(element))
}