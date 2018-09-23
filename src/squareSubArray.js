function findLargestSquareSide(inputMatrix) {

    let maxDimension = 1;

    for (let row = 0; row < inputMatrix.length; row++) {

        for (let col = 0; col < inputMatrix[row].length; col++) {

            const currDimension = findLargestTrueSquareFrom(inputMatrix, row, col);

            if (currDimension > maxDimension) {
                maxDimension = currDimension;
            }
        }

    }

    return maxDimension;

}


function findLargestTrueSquareFrom(inputMatrix, row, col) {

    let maxSize = Math.min(inputMatrix.length - row, inputMatrix.length - col);


    for (let size = maxSize; size >= 1; size--) {

        const trueSquare = isTrueSquare(inputMatrix, row, col, size);

        if (trueSquare) {
            return size;
        }

    }


}

function isTrueSquare(inputMatrix, row, col, size) {
    for (let i = row; i < row + size; i++) {
        for (let j = col; j < col + size; j++) {
            if (inputMatrix[i][j] === false) {
                return false;
            }
        }
    }
    return true;
}
