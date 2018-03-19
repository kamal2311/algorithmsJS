describe('Reverse array in place', () => {

    it('Should reverse [1,2,3,4,5] to [5,4,3,2,1]', () => {

        const original = [1, 2, 3, 4, 5];
        reverseArrayInPlace(original);
        expect(original).toEqual([5, 4, 3, 2, 1]);

    });

    it("Should reverse ['a','b','c','d'] to ['d','c','b','a']", () => {

        const original = ['a', 'b', 'c', 'd'];
        reverseArrayInPlace(original);
        expect(original).toEqual(['d', 'c', 'b', 'a']);

    });

});