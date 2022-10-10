function djeljivi(array) {
    process.stdout.write('Brojevi djelivi s 3: ')
    array.forEach(el => {
        if (el % 3 == 0) {
            process.stdout.write(el + ',');
        }
    });
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
djeljivi(array);