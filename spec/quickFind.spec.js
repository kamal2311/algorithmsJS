describe('Quick find', () => {

    let qf = new QuickFind(10);

    beforeEach(() => {

        qf.connect(0, 1);
        qf.connect(1, 8);
        qf.connect(3, 8);

        qf.connect(4, 6);
        qf.connect(4, 7);
        qf.connect(7, 9);

        qf.connect(2, 5);

    });

    it('should show components', () => {
        spyOn(console, 'log').and.callThrough();
        qf.show();
        expect(console.log).toHaveBeenCalled();

    });

    it('should show 0 and 8 connected', () => {
        expect(qf.areConnected(0, 8)).toBe(true);
    });

    it('should show 0 and 4 as not connected', () => {
        expect(qf.areConnected(0, 4)).toBe(false);
    });

    it('should show 4 and 9 connected', () => {
        expect(qf.areConnected(4, 9)).toBe(true);
    });

});