function reverseWords(inputString) {

    if (inputString === undefined) {
        throw new Error('Invalid input');
    }

    const words = inputString.split(' ');
    const revWords = words.map(w => reverseWord(w));
    return revWords.join(' ');
}

function reverseWord(inputWord) {
    const output = [];
    const inputArray = inputWord.split('');
    for (let i = inputArray.length - 1; i >= 0; i--) {
        output.push(inputArray[i]);
    }
    return output.join('');
}