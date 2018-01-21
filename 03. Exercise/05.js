function grad2deg(grad) {
    grad = grad % 400
    let deg = 0.9 * grad

    return deg < 0 ? deg + 360 : deg
}