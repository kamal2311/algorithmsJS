function reverseArrayInPlace(inputArray) {

    for (let i = 0; i < inputArray.length / 2; i++) {

        const currIndex = i;
        const symmtricIndex = inputArray.length - 1 - i;

        swap(inputArray, currIndex, symmtricIndex);

    }

    return inputArray;
}

function swap(inArray, i, j) {
    const temp = inArray[i];
    inArray[i] = inArray[j];
    inArray[j] = temp;
}