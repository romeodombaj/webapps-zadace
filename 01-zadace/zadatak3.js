function contains(x) {
    if (x >= 100 && x <= 150000) {
        console.log(x + ' je unutar [100, 150000]')
    } else {
        console.log(x + ' nije unutar [100, 150000]')
    }
}

let x = 53
contains(x);