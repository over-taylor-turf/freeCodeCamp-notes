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

console.log(chessboard(7));






// let input = [0, 1, 0, 3, 12];

// function moveZeroes(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             let zero = arr.splice(i,1)
//             arr.push(zero)
//         } 
//     }
//     return arr

// }

// console.log(moveZeroes(input));