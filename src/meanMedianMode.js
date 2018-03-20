function mean(inputArray) {

    if (inputArray === undefined) {
        throw new Error('InvalidInput');
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

function mode(inputArray) {

    if (inputArray === undefined) {
        throw new Error("InvalidInput");
    }

    const counts = {};
    let maxOccuringVal = inputArray[0];
    let maxFrequency = 1;
    inputArray.forEach(val => {
        if (counts.hasOwnProperty(val)) {
            counts[val]++;
        }
        else {
            counts[val] = 1;
        }

        if (counts[val] >= maxFrequency) {
            maxFrequency = counts[val];
            maxOccuringVal = val;
        }
    });

    return maxOccuringVal;
}


function meanMedianMode(inputArray) {
    const answer = {};

    answer.mean = mean(inputArray);
    answer.median = median(inputArray);
    answer.mode = mode(inputArray);

    return answer;
}
