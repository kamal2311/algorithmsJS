describe('Make change with minimum coins', () => {

    it('with coins 1,6,10 and change 12, answer should be 2', () => {

        const actual = makeChange([1, 6, 10], 12);
        expect(actual).toBe(2);

    });

    it('with coins 1,6,10 and change 10, answer should be 1', () => {

        const actual = makeChange([1, 6, 10], 10);
        expect(actual).toBe(1);

    });

    it('with coins 1,6,10 and change 18, answer should be 3', () => {

        const actual = makeChange([1, 6, 10], 18);
        expect(actual).toBe(3);

    });

});