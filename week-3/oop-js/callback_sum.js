
function calculateSum(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

function displaySum(result) {
    console.log('Tổng của hai số là: ', result);
}

calculateSum(5, 3, displaySum);