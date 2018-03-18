describe('Palindrome', () => {

    it('aba is a palindrome', () => {
        expect(isPalindrome('aba')).toBe(true);
    });

    it('abab is not a palindrome', () => {
        expect(isPalindrome('abab')).toBe(false);
    });

    it('race car is a palindrome', () => {
        expect(isPalindrome('race car')).toBe(true);
    });

    it('"Madam, I\'m adam" is a palindrome', () => {
        expect(isPalindrome('Madam I\'m adam')).toBe(true);
    });

    it('empty value is a palindrome', () => {
        expect(isPalindrome('')).toBe(true);
    });

    it('should throw an InvalidInput error when null input', () => {
        expect(function () { isPalindrome(null) }).toThrow(new Error('InvalidInput'));
    });

    it('should throw an InvalidInput error when no input', () => {
        expect(function () { isPalindrome() }).toThrow(new Error('InvalidInput'));
    });

});