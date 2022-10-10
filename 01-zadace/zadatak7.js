function visekratnik(x) {
    let umnozak = 7;
    if (x <= 1000 && x >= 0) {
        for (let i = 14; i < x; i += 7) {
            umnozak *= i;
        }
        console.log(umnozak);

    } else {
        console.log(x + ' nije izmedu 0 i 1000')
    }
}

const x = 23;
visekratnik(x);