describe("Mean median mode", () => {

    describe("Mean", () => {

        it("should return 3.5 for [1,2,3,3,4,4,4,7]", () => {
            const input = [1, 2, 3, 3, 4, 4, 4, 7];
            const answer = mean(input);
            expect(answer).toBe(3.5);
        });

        it("should throw an error if no argument supplied", () => {
            expect(() => { mean() }).toThrow(new Error('Must pass an array'));
        });

        it('should return 0 if the array is empty', () => {
            expect(mean([])).toBe(0);
        });
    });

    describe('Median', () => {
        it('should return 3.5 as median of [1,2,3,3,4,4,4,7]', () => {
            expect(median([1, 2, 3, 3, 4, 4, 4, 7])).toBe(3.5);
        });

        it('should return 3 as the median of [1,2,3,7,8]', () => {
            expect(median([1, 2, 3, 7, 8])).toBe(3);
        });
    });
});