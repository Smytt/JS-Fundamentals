function distance3D(input) {
    let distance = Math.sqrt(
        (input[0]-input[3])**2 +
        (input[1]-input[4])**2 +
        (input[2]-input[5])**2
    )

    console.log(distance)
}