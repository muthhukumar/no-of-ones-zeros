const { logger } = require('./logger/log4js.config');

//return binary value for a given number
const binaryValueOfGivenNumber = number => {
    const binaryValue = [];

    while (number !== 0) {
        binaryValue.push(number % 2);
        number = Math.floor(number / 2);
    }

    return binaryValue;
};

// return no of ones and zeros for a given number
const returnNoOfOnesAndZeros = numbers => {
    const count = {
        numberOfOnes: 0,
        numberOfZeros: 0,
    };
    numbers.forEach(number =>
        number === 0
            ? count.numberOfZeros++
            : number === 1 && count.numberOfOnes++
    );
    return count;
};

// main function that calculates no of ones and zeros in a binary value of a number
const findNoOfOnesAndZeros = number => {
    const binaryValue = binaryValueOfGivenNumber(number);

    const onesAndZerosCount = returnNoOfOnesAndZeros(binaryValue);

    return onesAndZerosCount;
};

// Main function call
logger.info(findNoOfOnesAndZeros(10));
