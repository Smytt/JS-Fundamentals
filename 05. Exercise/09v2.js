function radioCrystals(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        console.log(`Processing chunk ${input[i]} microns`)
        processChunk(target, input[i])
        console.log(`Finished crystal ${target} microns`)
    }

    function processChunk(target, sourceChunk) {
        let f;
        let level = 1;
        let operation = '';
        while (sourceChunk > target) {
            switch (level) {
                case 1: f = (sourceChunk) => sourceChunk / 4; operation = 'Cut'; break;
                case 2: f = (sourceChunk) => sourceChunk *0.8; operation = 'Lap'; break;
                case 3: f = (sourceChunk) => sourceChunk - 20; operation = 'Grind'; break;
                case 4: f = (sourceChunk) => sourceChunk - 2; operation = 'Etch'; break;
            }
            let count = 0;
            while (f(sourceChunk) >= target - 1) {
                count++
                sourceChunk = f(sourceChunk);
            }
            if (count !== 0) {
                console.log(`${operation} x${count}`)
                console.log('Transporting and washing')
                sourceChunk = Math.floor(sourceChunk);
            }
            level++;
        }

        if (sourceChunk !== target) {
            sourceChunk++
            console.log(`X-ray x1`)
        }

    }
}

radioCrystals([1000, 4000, 8100])