describe('reverseWords', () => {
    it('should reverse "this is a string" to "siht si a gnirts"', () => {
        const actual = reverseWords("this is a string");
        expect(actual).toBe("siht si a gnirts");
    });

    it('should reverse "Isnt this amazing?" to "tnsI siht ?gnizama"', () => {
        const actual = reverseWords("Isnt this amazing?");
        expect(actual).toBe("tnsI siht ?gnizama");
    });

    it('should reverse an empty string', () => {
        const actual = reverseWords('');
        expect(actual).toBe('');
    });

    it('should throw an error if there is no inputString', () => {

        expect(() => reverseWords()).toThrow(new Error('Invalid input'));

    });
});
