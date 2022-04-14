
# Final Projects

## 🔥 Palindrome Checker

**Directions**: Return `true` if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Solution**:
```js
function palindrome(str) {

  // get rid of punctuation, white spaces and symbols
  const regex = /[^A-Za-z0-9]/g;
	const newStr = str.replace(regex, '');
	let lowercase = newStr.toLowerCase();

  // create two variables to hold the word forwards and backwards
  let forwards = lowercase;
  let backwards = lowercase.split("").reverse().join("");

  console.log('forwards', forwards);
  console.log('backwards', backwards)

  // compare the forwards and backwards spelling, if they match, then it's a palindrome! 
  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }

}

console.log(palindrome('not a palindrome'));
```