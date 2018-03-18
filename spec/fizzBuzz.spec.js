describe('FizzBuzz', () => {

    let output = [];

    beforeEach(() => {
        output = fizzBuzz(20);
    });

    it('should have 3rd,6th,9th element as Fizz', () => {
        expect(output[2]).toBe("Fizz");
        expect(output[5]).toBe("Fizz");
        expect(output[8]).toBe("Fizz");
    });

    it('should have 5th, 10th element as Buzz', () => {
        expect(output[4]).toBe("Buzz");
        expect(output[9]).toBe("Buzz");
    });

    it('should have 2nd,4th,7th element as is', () => {
        expect(output[1]).toBe(2);
        expect(output[3]).toBe(4);
        expect(output[6]).toBe(7);
    });

    it('should have 15th element as FizzBuzz', () => {
        expect(output[14]).toBe('FizzBuzz');
    });
});
