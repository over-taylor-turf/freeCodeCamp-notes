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