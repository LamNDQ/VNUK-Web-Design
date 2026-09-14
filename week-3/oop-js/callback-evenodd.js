function checkNumber(number, callback) {
    if (number % 2 === 0) {
        callback("Số chẵn");
    } else {
        callback("Số lẻ");
    }
}

function result(message) {
    console.log(message);
}

checkNumber(10, result);
checkNumber(7, result);