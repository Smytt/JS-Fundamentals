function radioCrystals(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        console.log(`Processing chunk ${input[i]} microns`)
        processChunk(target, input[i])
        console.log(`Finished crystal ${target} microns`)
    }

    function processChunk(target, sourceChunk) {
        let cut = 0;
        while (sourceChunk / 4 >= target - 1) {
            cut++
            sourceChunk /= 4;
        }
        if (cut !== 0) {
            console.log(`Cut x${cut}`)
            console.log('Transporting and washing')
            sourceChunk = Math.floor(sourceChunk);
        }
        let lap = 0;
        while (sourceChunk * 0.8 >= target - 1) {
            lap++
            sourceChunk *= 0.8;
        }
        if (lap !== 0) {
            console.log(`Lap x${lap}`)
            console.log('Transporting and washing')
            sourceChunk = Math.floor(sourceChunk);
        }
        let grind = 0;
        while (sourceChunk -20 >= target - 1) {
            grind++
            sourceChunk -= 20;
        }
        if (grind !== 0) {
            console.log(`Grind x${grind}`)
            console.log('Transporting and washing')
            sourceChunk = Math.floor(sourceChunk);
        }
        let etch = 0;
        while (sourceChunk -2 >= target - 1) {
            etch++
            sourceChunk -= 2;
        }
        if (etch !== 0) {
            console.log(`Etch x${etch}`)
            console.log('Transporting and washing')
            sourceChunk = Math.floor(sourceChunk);
        }

        if (sourceChunk !== target) {
            sourceChunk++
            console.log(`X-ray x1`)
        }

    }
}

radioCrystals([1375, 50000])