function insideVolume(arr) {

    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    for (let i = 0; i < arr.length; i = i + 3) {
        if (inVolume(arr[i], arr[i + 1], arr[i + 2]))
            console.log('inside')
        else
            console.log('outside')
    }

    function inVolume(x, y, z) {
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }
        return false
    }
}