describe('Binary search', () => {

    describe('Recursive', () => {        
        it('should return index of an item present in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchRecursive(inputArray, 10);
            expect(foundIndex).toBe(1);
    
        });
    
        it('should return -1 if the item is absent from the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchRecursive(inputArray, 11);
            expect(foundIndex).toBe(-1);
    
        });
    
        it('should find the item on the edge in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchRecursive(inputArray, 9);
            expect(foundIndex).toBe(0);
    
        });
    
        it('should find the item on the edge in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchRecursive(inputArray, 16);
            expect(foundIndex).toBe(4);
    
        });
    });

    describe('Iterative', () => {        
        it('should return index of an item present in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchIterative(inputArray, 10);
            expect(foundIndex).toBe(1);
    
        });
    
        it('should return -1 if the item is absent from the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchIterative(inputArray, 11);
            expect(foundIndex).toBe(-1);
    
        });
    
        it('should find the item on the edge in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchIterative(inputArray, 9);
            expect(foundIndex).toBe(0);
    
        });
    
        it('should find the item on the edge in the sorted array', () => {
    
            const inputArray = [9, 10, 12, 14, 16];
            const foundIndex = binarySearchIterative(inputArray, 16);
            expect(foundIndex).toBe(4);
    
        });
    });


});