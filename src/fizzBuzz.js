function fizzBuzz(num) {

    const output = [];

    for (let i = 1; i <= num; i++) {

        if (isXDivisibleByY(i, 15)) {
            output.push("FizzBuzz");
        }
        else if (isXDivisibleByY(i, 3)) {
            output.push("Fizz");
        }
        else if (isXDivisibleByY(i, 5)) {
            output.push("Buzz");
        }
        else {
            output.push(i);
        }

    }

    return output;
}

function isXDivisibleByY(x, y) {
    return x % y === 0;
}

fizzBuzz(20);