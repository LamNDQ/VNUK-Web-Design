function sumNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('hai số không phải kiểu number');
        } else {
            resolve(a + b);
        }
    });
}

const a = 5;
const b = 3;
sumNumbers(a, b)
    .then(sum => {
        console.log('Tổng của', a, 'và', b, 'là:', sum);
    })
    .catch(error => {
        console.error(error);
    });