function mean(inputArray) {

    if (inputArray === undefined) {
        throw new Error('Must pass an array');
    }

    if (inputArray.length === 0) {
        return 0;
    }

    const total = inputArray.reduce((sum, current) => sum + current, 0);
    return total / inputArray.length;
}

function median(inputArray) {
    inputArray.sort();

    const length = inputArray.length;

    const isOdd = length % 2 === 1;

    if (isOdd) {
        return inputArray[Math.floor(length / 2)];
    }

    return (inputArray[length / 2] + inputArray[length / 2 - 1]) / 2;
}

