describe('twoSum', () => {
    it('should return [[1,6],[2,5],[3,4]] for [1,2,3,4,5,6,7] and pairSum 7', () => {

        const actual = twoSum([1, 2, 3, 4, 5, 6, 7], 7);

        expect(actual).toContain([1, 6]);
        expect(actual).toContain([2, 5]);
        expect(actual).toContain([3, 4]);

    });

    describe('Faster', () => {

        it('should return [[1,9],[3,7]] for [1,2,3,4,5,7,9,12] and pairSum 10', () => {

            const actual = twoSumFaster([1, 2, 3, 4, 5, 7, 9, 12], 10);
            expect(actual).toContain([1, 9]);
            expect(actual).toContain([3, 7]);

        });
    });
});