function extractIncreasingSubsequence(arr) {
    let biggest = Number.NEGATIVE_INFINITY;

    arr.filter((x, i, array) => {
        if( i === 0 || x >= biggest) {
            biggest = x;
            return true
        }
    }).forEach( x => console.log(x))
}

extractIncreasingSubsequence([1,5,7,3,5,9,12,55,1,3,777])