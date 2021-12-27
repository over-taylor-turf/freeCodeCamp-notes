## ✨ Reverse a String

**Directions**: Reverse a provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

**Solution**:
```js
function reverseString(str) {
    // initialize a variable that is a copy of the original string as an array. 
    let copy = [...str];
    
    // create a variable for the reversed string, currently empty. 
    let reversed = ''; 

    // create a for loop to work backwards through our copy array. 
    for (let i = copy.length - 1; i >= 0; i--) {
    
    // add each letter to the string variable.
      reversed += copy[i];
    }

    // set the reversed value to be the original string's value. 
    str = reversed; 
    return str;
  }
  
reverseString("hello");
```

## ✨ Factorialize a Number

**Directions**: Return the factorial of the provided integer. Factorials are often represented with the shorthand notation `n!`. For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`. Only integers greater than or equal to zero will be supplied to the function.

**Solution**:
```js
function factorialize(num) {
    // initialize a variable that will hold the product of the factorialize function. 
    let factorial = 1;  
  
    // create a for loop to multiply each number between 1 and num.
    for (let i = 1; i <= num; i++) {
      factorial = i * factorial;
    }
  
    // return the product. 
    return factorial; 
  }
  
factorialize(5);
```

## ✨ Find the Longest Word in a String

**Directions**: Return the length of the longest word in the provided sentence. Your response should be a number.

**Solution**:
```js
function findLongestWordLength(str) {

    // initialize an array that contains the individual words of variable str
    let arrayOfWords = str.trim().split(" ");

    // initialize an empty array to hold the lengths of the corresponding words 
    let arrayOfWordLengths = [];

    // use a for loop to add the length of each word to the arrayOfWordLengths variable 
    for (let i = 0; i <= (arrayOfWords.length - 1); i++) {
        let wordlength = arrayOfWords[i].length;
        arrayOfWordLengths.push(wordlength);
    }

    // return the maximum value of the arrayOfWordLengths
    return Math.max(...arrayOfWordLengths); 

  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## ✨ ____

**Directions**: ____

**Solution**: ____

## ✨ ____


**Directions**: ____

**Solution**: ____