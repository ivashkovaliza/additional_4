module.exports = function multiply(first, second) {

    var result = new Array(first.length + second.length + 1).join('0');

    var firstCounter = 0;

    while (first != "") {

        var firstDigit = parseInt(first[first.length - 1]);

        first = first.substring(0, first.length - 1);

        var secondCopy = second;

        var tenFromPreviousMultiply = 0;

        var secondCounter = 0;

        while (secondCopy != "") {

            var secondDigit = parseInt(secondCopy[secondCopy.length - 1]);

            secondCopy = secondCopy.substring(0, secondCopy.length - 1);

            var multiplyResult = secondDigit * firstDigit;

            var digitResult = parseInt(result[secondCounter + firstCounter]) + (multiplyResult % 10) + tenFromPreviousMultiply;

            tenFromPreviousMultiply = Math.floor(multiplyResult /10) + Math.floor(digitResult / 10);

            var digitResultString = digitResult.toString();

            result = result.substr(0, secondCounter + firstCounter) + (digitResult % 10).toString() + result.substr(secondCounter + firstCounter + 1, result.length - secondCounter - firstCounter);

            secondCounter++;

        }

        result = result.substr(0, secondCounter + firstCounter) + tenFromPreviousMultiply.toString() + result.substr(secondCounter + firstCounter + 1, result.length - secondCounter - firstCounter);

        firstCounter++;

    }

    result = result.split("").reverse().join("");

    while (result[0] == '0')

        result = result.substring(1, result.length);

    return result;

}
