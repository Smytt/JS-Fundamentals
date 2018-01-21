function roadRadar(input) {
    let [speed, place] = input;

    function maxAllowed(place) {
        let max = 0;
        switch (place) {
            case 'motorway': max = 130; break;
            case 'interstate': max = 90; break;
            case 'city': max = 50; break;
            case 'residential': max = 20; break;
        }
        return max
    }

    let speeding = speed - maxAllowed(place);
    if ( speeding > 40 ) return 'reckless driving'
    else if (speeding > 20) return 'excessive speeding'
    else if (speeding > 0) return 'speeding'

}