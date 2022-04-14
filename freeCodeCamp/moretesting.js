function palindrome(str) {

  // get rid of white space, numbers, punctuation, and uppercase letters
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