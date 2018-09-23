describe('Quick union and find', () => {

    let quf = new QuickUnionFind(100000);

    beforeEach(() => {
        for (let i = 0; i < 100000; i = i + 2) {
            quf.connect(i, i + 2);
        }
    });

    it('should find 2 and 10000 connected', () => {
        expect(quf.areConnected(2, 10000)).toBe(true);
    });

    it('should find 1 and 82000 not connected', () => {
        expect(quf.areConnected(1, 82000)).toBe(false);
    });

})