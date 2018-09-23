describe('Symbol table as ordered arrays', () => {

    let symbolTable = new SymbolTableOrderedArray();

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

        console.log(symbolTable);


    });

    it('should find rank of a key', () => {
        expect(symbolTable.rank("c")).toBe(1);

    });

});