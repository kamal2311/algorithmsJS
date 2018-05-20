describe('Symbol table', () => {

    let symbolTable = new SymbolTable();

    beforeEach(() => {
        symbolTable.put("s", 0);
        symbolTable.put("e", 1);
        symbolTable.put("a", 2);
        symbolTable.put("r", 3);
        symbolTable.put("c", 4);
        symbolTable.put("h", 5);
        symbolTable.put("e", 6);
        symbolTable.put("x", 7);
        symbolTable.put("a", 8);
        symbolTable.put("m", 9);
        symbolTable.put("p", 10);
        symbolTable.put("l", 11);
        symbolTable.put("e", 12);
    });

    it('should retrieve 8 for a', () => {
        expect(symbolTable.get("a")).toBe(8);
    });

    it('should be 7 for x', () => {
        expect(symbolTable.get('x')).toBe(7);
    });

    it('should be null for b', () => {
        expect(symbolTable.get('b')).toBe(null);
    });

    it('should delete a key', () => {
        expect(symbolTable.get('p')).toBe(10);
        let deletedValue = symbolTable.delete('p');
        expect(deletedValue).toBe(10);
        expect(symbolTable.get('p')).toBe(null);
    });

    it('should have a size of 10', () => {
        expect(symbolTable.size()).toBe(10);
    });

    it('should have a keys collection', () => {

        const actual = symbolTable.keys();
        const expected = ['s', 'e', 'a', 'r', 'c', 'h', 'x', 'm', 'p', 'l'];

        expect(actual.sort()).toEqual(expected.sort());
    });

});