// function palindrome(str) {
// 	const regex = /[^A-Za-z0-9]/g;
// 	const newStr = str.replace(regex, '');
// 	let lowercase = newStr.toLowerCase();
// 	let array = lowercase.split('');
// 	let arrayLength = array.length;
// 	let result = true;

// 	console.log(array);

// 	for (let i = 0; i < arrayLength; i++) {
// 		for (let j = arrayLength - 1; j >= 0; j--) {
// 			console.log(i, j);
// 			// if (array[i] !== array[j]) {
				
// 			// 	result = false;
// 			// 	break;
// 			// }
// 		}
// 	}

// 	return result;
// }

// console.log(palindrome('12345'));

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");