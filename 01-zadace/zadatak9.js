function usporedbaObjekata(obj1, obj2) {
    const obK1 = Object.keys(obj1);
    const obK2 = Object.keys(obj2);

    if (obK1.lenght == obK2.lenght && obK1.every(function (i, j) {
        return i === obK2[j]
    })) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { a: 321, b: 3, c: 1 }

usporedbaObjekata(obj1, obj2);