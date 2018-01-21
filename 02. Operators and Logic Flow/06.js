function cone(r, h) {
    let v = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + Math.sqrt(h ** 2 + r ** 2))
    console.log(`volume = ${v}`);
    console.log(`area = ${area}`);
}