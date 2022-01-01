## ✨ Reverse a String

**Directions**: Reverse a provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

**Solution**:
```js
function reverseString(str) {
    // initialize a variable that is a copy of the original string as an array. 
    let copy = [...str];
    console.log(copy)
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

## ✨ Return Largest Numbers in Arrays

**Directions**: Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

**Solution**:
```js
function largestOfFour(arr) {

    // initialize an empty array to hold the biggest values of the subarray 
    let maxValuesArray = []; 

    // loop 4 times through subarray 
    for (let i = 0; i <= 3; i++){

      // initialize a subarray variable
      let subarray = arr[i]; 

      // push the max values of the subarrays into the maxValuesArray
      maxValuesArray.push((Math.max(...subarray)));
  }

   // return the maxValuesArray
    return maxValuesArray;
  }
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

## ✨ Confirm the Ending

**Directions**: Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

**Solution**:
```js
function confirmEnding(str, target) {
  // turn the original string and target into reversed arrays of the original letters
  let reversedTarget = target.split("").reverse();
  let reversedString = str.split("").reverse();

  let comparisonArray = []; 

  // use a simple for loop to iterate through the last (now first) letters as many times as the length of the target
  for (let i = 0; i < reversedTarget.length; i++) {
    comparisonArray.push(reversedString[i]); 
  }
  // compare the last (now first) letters with the target letters
  // convert the arrays back into strings
  return comparisonArray.join("") === reversedTarget.join("") 
}

console.log(confirmEnding("Congratulation", "on")); 
```

## ✨ Repeat a String Repeat a String

**Directions**: Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number.

**Solution**:
```js
function repeatStringNumTimes(str, num) {
  
  // initialize two variables, one empty and one to be filled with the repeating value
  let emptyString = '';
  let repeatedString = ''; 

  // if the number is positive add the string to the repeatedString variable
  if (num > 0 ) {

    // loop as many times as num indicates
    for (let i = 0; i < num; i++) {
    repeatedString = repeatedString + str;
    } 

    // at the end of the loop, return the repeatedString 
    return repeatedString; 

    // if the number is negative return the emptyString
  } else {
    return emptyString; 
  }
}

console.log(repeatStringNumTimes("*", 3));
```

## ✨ Truncate a String

**Directions**: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

**Solution**:
```js
function truncateString(str, num) {
  let stringArray = str.trim().split('');
  let truncatedArray = []; 
  let truncatedWord = ''; 
  
  if (str.length > num) { 
  for (let i = 0; i < num; i++) {
    truncatedArray.push(stringArray[i])
  }
    truncatedWord = truncatedArray.join('')
    return truncatedWord + '...'
    } else {
      return str; 
    }
  }
```

## ✨ Finders Keepers

**Directions**: Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if func(`x`) is true. If no element passes the test, return undefined.

**Solution**:
```js
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]; 
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
```

## ✨ Boo Who

**Directions**: Check if a value is classified as a boolean primitive. Return true or false.

**Solution**:
```js
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true; 
  } else {
    return false;
  }
}
```

## ✨ Title Case a Sentence

**Directions**:Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like the and of.

**Solution**:
```js
function titleCase(str) {

  let lowercaseString = str.toLowerCase();
  let arrayOfWords = lowercaseString.trim().split(" ");
  let uppercaseString = ''; 
  let title = []; 
  
  for (let i = 0; i < arrayOfWords.length; i++) {
    let uppercaseString = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    title.push(uppercaseString);
  }
  return title.join(" "); 
}

console.log(titleCase("I'm a little tea pot"));
```
