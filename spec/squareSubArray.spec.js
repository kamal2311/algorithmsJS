describe('Largest sub square', () => {

    const input1 = [[false, false, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true]];

    it(`for this input  ${print(input1)} should be 3 `, () => {

        const actualLargestSquareSide = findLargestSquareSide(input1);

        expect(actualLargestSquareSide).toBe(3);

    });

    const input2 = [[false, false, true, true],
    [true, true, true, true],
    [true, true, false, true],
    [false, true, true, true]];

    it(`for this input  ${print(input2)} should be 2 `, () => {

        const actualLargestSquareSide = findLargestSquareSide(input2);

        expect(actualLargestSquareSide).toBe(2);

    });

    function print(arr2D) {

        let output = "";

        arr2D.forEach(row => {
            output += "//";
            row.forEach(col => {
                output += col + " ";
            });
        });

        return output;
    }

});