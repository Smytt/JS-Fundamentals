function sumFirstLast(arr) {
    arr = arr.map(Number)
    console.log(Number(arr[0]) + arr[arr.length-1])
}

sumFirstLast([1,3,4,'6'])