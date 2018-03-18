function isPalindrome(input) {

    if (input === null || input === undefined) {
        throw new Error('InvalidInput');
    }

    if (input.length <= 1) {
        return true;
    }

    input = normalize(input);

    const middleInput = input.substring(1, input.length - 1);

    return areEndCharactersEqual(input) && isPalindrome(middleInput);

    function areEndCharactersEqual(input) {
        const first = 0;
        const last = input.length - 1;
        return input.charAt(first) === input.charAt(last);
    }

    function normalize(input) {
        return input.replace(/\W/, '').toLowerCase();
    }

}

