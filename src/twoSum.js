function twoSum(intArray, pairSum) {

    const answer = [];

    for (let i = 0; i < intArray.length; i++) {
        for (let j = i + 1; j < intArray.length; j++) {
            if (intArray[i] + intArray[j] === pairSum) {
                answer.push([intArray[i], intArray[j]]);
            }
        }
    }

    return answer;
}

function twoSumFaster(intArray, pairSum) {

    const answer = [];
    const numsAsSet = new Set(intArray);

    intArray.forEach(num => {
        if (numsAsSet.has(pairSum - num))
            answer.push([num, pairSum - num]);
    });

    return answer;
}