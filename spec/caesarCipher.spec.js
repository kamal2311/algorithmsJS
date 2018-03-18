describe('Caesar cipher', () => {

    it('abc should become efg when shiftCount is 4', () => {
        expect(caesarCipher('abc', 4)).toBe('efg');
    });

    it('xyz should become bcd when shiftCount is 4', () => {
        expect(caesarCipher('xyz', 4)).toBe('bcd');
    });

    it('abc should become yza when shiftCount is -2', () => {
        expect(caesarCipher('abc', -2)).toBe('yza');
    });

    it('xyz should become pqr when shiftCount is -8', () => {
        expect(caesarCipher('xyz', -8)).toBe('pqr');
    });

    it('should shift by 1 when shiftNum is 27', () => {
        expect(caesarCipher('abc', 27)).toBe('bcd');
    });

    it('should shift by -1 when shiftCount is -27', () => {
        expect(caesarCipher('abc', -27)).toBe('zab');
    });

    it('zoo keeper should become bqq mggrgt when shiftCount is 2', () => {
        expect(caesarCipher('zoo keeper', 2)).toBe('bqq mggrgt');
    });
});