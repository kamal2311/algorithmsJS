describe('Ransom note', () => {
    it('should be true when all words of note are present in magazine', () => {
        const noteMade = ransomNote('hello kamal', 'kamal has been saying hello');
        expect(noteMade).toBe(true);
    });

    it('should be false when a word in note is missing in magazine', () => {
        const noteMade = ransomNote('hello niriha', 'kamal has been saying hello');
        expect(noteMade).toBe(false);
    });

    it('should be true when number of words required in note are present in magazine but in insufficient quantity', () => {
        const noteMade = ransomNote('hello kamal hello', 'kamal has been saying hello');
        expect(noteMade).toBe(false);
    });
})