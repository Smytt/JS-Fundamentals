function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input;

    let distances = [
        findDistance(x1, y1, x2, y2),
        findDistance(x1, y1, x3, y3),
        findDistance(x2, y2, x3, y3),
    ];

    distances.sort((a, b) => b-a).shift();


    if (distances.includes(findDistance(x1, y1, x2, y2))) {
        if (distances.includes(findDistance(x2, y2, x3, y3))) {
            console.log('1->2->3: ' + (findDistance(x1, y1, x2, y2) + findDistance(x2, y2, x3, y3)))
        }
        else {
            console.log('2->1->3: ' + (findDistance(x1, y1, x2, y2) + findDistance(x1, y1, x3, y3)))
        }
    }

    else console.log('1->3->2: ' + (findDistance(x1, y1, x3, y3) + findDistance(x2, y2, x3, y3)))

    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
}

tripLength([0,0,2,0,4,0])