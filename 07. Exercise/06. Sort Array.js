function sortBy2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length === b.length) {
            if (a < b) return -1;
            if (b < a) return 1;
            return 0;
        }

        return a.length - b.length;
    })

    arr.forEach(x => console.log(x))
}

sortBy2Criteria(['alpha', 'beta', 'gamma'])