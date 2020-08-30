const { logger } = require('./logger/log4js.config');

// main function that calculates no of ones and zeros in a binary value of a number
const findNoOfOnesAndZeros = number => {
    let binaryValue = 0;

    const count = {
        numberOfOnes: 0,
        numberOfZeros: 0,
    };

    if (number <= 0)
        return {
            count: {
                ...count,
                numberOfZeros: 1,
            },
            binaryValue,
        };
    else if (number > 0) {
        binaryValue = number.toString(2);
        while (number !== 0) {
            number % 2 === 0
                ? count.numberOfZeros++
                : number === 1 && count.numberOfOnes++;
            number >>= 1;
        }
    }

    return { count, binaryValue };
};

// Main function call
logger.info(findNoOfOnesAndZeros(-2));
