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