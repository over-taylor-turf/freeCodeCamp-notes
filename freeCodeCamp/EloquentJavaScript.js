// 🐤 Looping a Triangle, Page 37
// Example Output:
// #
// ##
// ##

const makeTriangle = (height) => {
	let row = '';
	for (let i = 1; i <= height; i++) {
		row += '#'.repeat(i) + '\n';
	}
	return row;
};

// console.log(makeTriangle(7));

// 🐤 FizzBuzz

for (let number = 1; number < 101; number++) {
	if (number % 3 === 0 && number % 5 === 0) {
		console.log('fizzbuzz');
	} else if (number % 3 === 0) {
		console.log('fizz');
	} else if (number % 5 === 0) {
		console.log('buzz');
	} else {
		console.log(number);
	}
}

// 🐤 Chessboard
// Example Output:
//  # # # #
// # # # #

const chessboard = (size) => {
	let row = '';
	let half = Math.round(size / 2);

	for (let i = 0; i < size; i++) {
		if (i % 2 !== 0) {
			row += ' #'.repeat(half) + '\n';
		} else {
			row += '# '.repeat(half) + '\n';
		}
	}

	return row;
};

console.log(chessboard(9));
