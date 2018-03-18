function caesarCipher(input, shiftNum) {

    let output = '';

    for (let i = 0; i < input.length; i++) {

        const codeOfCurrentChar = input.charCodeAt(i);
        let newCode = codeOfCurrentChar;

        if (codeOfCurrentChar >= 'a'.charCodeAt(0) && codeOfCurrentChar <= 'z'.charCodeAt(0)) {

            shiftNum = shiftNum > 0 ? shiftNum % 26 : (shiftNum % 26 + 26);
            newCode = (codeOfCurrentChar - 'a'.charCodeAt(0) + shiftNum) % 26 + 'a'.charCodeAt(0);

        }

        output += String.fromCharCode(newCode);
    }

    return output;

}