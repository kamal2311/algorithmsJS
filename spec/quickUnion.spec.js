describe('Quick union', () => {

    let qu = new QuickUnion(10);

    beforeEach(() => {

        qu.connect(1, 3);
        qu.connect(3, 5);
        qu.connect(5, 7);
        qu.connect(7, 9);

        qu.connect(0, 2);
        qu.connect(2, 4);
        qu.connect(4, 6);
        qu.connect(6, 8);

    });

    it('should find 1 and 5 connected', () => {
        expect(qu.areConnected(1, 5)).toBe(true);
    });

    it('should find 2 and 7 are not connected', () => {
        expect(qu.areConnected(2, 7)).toBe(false);
    })

});