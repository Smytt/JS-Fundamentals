function rotateArray(input) {
    let arr = input.splice(0, input.length - 1)
    let times = input[input.length - 1] % arr.length

    for (let i = 0; i < times; i++) {
        let element = arr.pop()
        arr.unshift(element);
    }

    console.log(arr.join(' '))
}

rotateArray([1,2,3,4,6])