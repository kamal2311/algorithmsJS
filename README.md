# algorithmsJS
Basic algorithms in JS based on a udemy course

This is my implementation of the algoirthms mentioned in a Udemy course
https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/

Run specRunner.html in your browser to see all the specs (Unit tests).

Algorithms implemented are

1. FizzBuzz

Implement a function which prints numbers 1 through the number argument with following rules.
 - print word "Fizz" if the number is divisible by 3,
 - print the word "Buzz" if the number is divisible by 5,
 - print the word "FizzBuzz" if the number is divisible by both 3 and 5.
 - print the number as is otherwise.

 example : fizzBuzz(16) should output
 1,2,"Fizz,4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16


2. CaesarCipher

Implement a function that takes a string and a shiftNumber and return another string according to following rules.

- Each character is replaced by the character which is shiftNum positions ahead from the current character in the alphabet "abc....z" sequence
- Alphabet sequence repeats itself before and after "abc.....z"
- shiftNum can be positive (indicates forward counting) or negative ( indicated backwards counting)
- shiftNum can be any integer like 100 or -100. 

Example: caesarCipher("abc", 2)
should output "cde"

caesarCipher("abc",-2)
should output "yza"


3. Palindrome -> Implement a function that returns true or false if the supplied string is a palindrome.

4. RansomNote ->  Implement a function that takes two parameters, a noteText and a magazineText. Returns true if all the words in the note can be built from the words in the
magazine text. returns false otherwise.

5. ReverseWords
6. Reverse array in place.
7. Find mean, median, mode.


