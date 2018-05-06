describe("Fibonnaci", () => {

    describe('recursive', () => {

        it('at n=4 should be 3', () => {
            expect(fibRecursive(4)).toBe(3);
        });

        it('at n=5 should be 5', () => {
            expect(fibRecursive(5)).toBe(5);
        });

        it('at n=6 should be 8', () => {
            expect(fibRecursive(6)).toBe(8);
        });

        it('at n=8 should be 21', () => {
            expect(fibRecursive(8)).toBe(21);
        });

        it('at n=40 should run slowly', () => {
            expect(measureTime(fibRecursive, 40)).toBeGreaterThan(1000);
        });


    });

    describe('iterative', () => {

        it('at n=4 should be 3', () => {
            expect(fibIterative(4)).toBe(3);
        });

        it('at n=5 should be 5', () => {
            expect(fibIterative(5)).toBe(5);
        });

        it('at n=6 should be 8', () => {
            expect(fibIterative(6)).toBe(8);
        });

        it('at n=8 should be 21', () => {
            expect(fibIterative(8)).toBe(21);
        });

        it('at n=40 should run super quickly', () => {
            expect(measureTime(fibIterative, 40)).toBeLessThan(1);
        });

    });

    function measureTime(toMeasure, n) {
        const start = performance.now();
        toMeasure(n);
        const end = performance.now();
        return end - start;
    }


});