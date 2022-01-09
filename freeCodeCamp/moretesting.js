function palindrome(str) {
	const regex = /[^A-Za-z0-9]/g;
	const newStr = str.replace(regex, '');
	let lowercase = newStr.toLowerCase();
	let array = lowercase.split('');
	let arrayLength = array.length;
  let result = false; 

	for (let i = 0; i < arrayLength; i++) {
		for (let j = arrayLength - 1; j >= 0; j--) {
			if (array[i] === array[j]) {
            result = true;
            break;
        }
			}
		}
  
  return result;

}

console.log(palindrome('almostomla'));
