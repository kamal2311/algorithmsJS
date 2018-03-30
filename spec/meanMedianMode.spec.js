describe("Mean median mode", () => {

    it('should throw InvalidInput error if no argument', () => {

        expect(() => { meanMedianMode() }).toThrow(new Error("InvalidInput"));
    });

    it("should return mean, median and mode of an array", () => {

        const answer = meanMedianMode([1, 2, 3, 7, 4, 4, 4, 6, 9, 10]);
        const expectedMean = 5;
        const expectedMedian = 4;
        const expectedMode = 4;

        expect(answer.mean).toBe(expectedMean);
    });



    describe("Mean", () => {

        it("should return 3.5 for [1,2,3,3,4,4,4,7]", () => {
            const input = [1, 2, 3, 3, 4, 4, 4, 7];
            const answer = mean(input);
            expect(answer).toBe(3.5);
        });

        it('should throw InvalidInput error if no argument supplied', () => {
            expect(() => { mean() }).toThrow(new Error("InvalidInput"));
        });

        it('should throw InvalidInput error if empty array', () => {
            expect(() => mean([])).toThrow(new Error("InvalidInput"));
        });
    });

    describe('Median', () => {
        it('should return 3.5 as median of [1,2,3,3,4,4,4,7]', () => {
            expect(median([1, 2, 3, 3, 4, 4, 4, 7])).toBe(3.5);
        });

        it('should return 3 as the median of [1,2,3,7,8]', () => {
            expect(median([1, 2, 3, 7, 8])).toBe(3);
        });

        it('should throw InvalidInput error if no argument supplied', () => {
            expect(() => { median() }).toThrow(new Error("InvalidInput"));
        });

        it('should throw InvalidInput error if empty array', () => {
            expect(() => median([])).toThrow(new Error("InvalidInput"));
        });
    });

    describe('Mode', () => {
        it('should return 4 as the mode of [1,2,3,3,4,4,4,7]', () => {
            expect(mode([1, 2, 3, 3, 4, 4, 4, 7])).toEqual([4]);
        });

        it('should return 5 as the mode of [1,2,13,4,5]', () => {
            expect(mode([1, 2, 13, 4, 5])).toContain(1);
            expect(mode([1, 2, 13, 4, 5])).toContain(2);
            expect(mode([1, 2, 13, 4, 5])).toContain(4);
            expect(mode([1, 2, 13, 4, 5])).toContain(5);
            expect(mode([1, 2, 13, 4, 5])).toContain(13);
        });

        it('should throw InvalidInput error if no argument supplied', () => {
            expect(() => { mode() }).toThrow(new Error("InvalidInput"));
        });

        it('should throw InvalidInput error if empty array', () => {
            expect(() => mode([])).toThrow(new Error("InvalidInput"));
        });
    });

});