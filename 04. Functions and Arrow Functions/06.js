function aggregateElements(input) {
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);

    function aggregate(arr, initial, func) {
        for (let i = 0; i < arr.length; i++) {
            initial = func(initial, arr[i])
        }
        console.log(initial)
    }
}