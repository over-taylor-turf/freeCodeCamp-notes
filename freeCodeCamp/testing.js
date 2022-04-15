function convertToRoman(num) {

	let number = num.toString().split("")

    let sum = [];

    for (let i = 0; i < num.length; i++) {

        switch(num[i]) {
            case num[i] === "1":
                sum.push('I');
                break;
            case "2":
                sum.push("II");
                break;
            case "3":
                sum.push("III");
                break;
            case "4":
                sum.push("IV");
                break;
            case "5":
                sum.push("V");
                break;
            case "6":
                sum.push("VI");
                break;
            case "7":    
                sum.push("VII");
                break;
			case "8":    
                sum.push("VIII");
                break;
			case "9":    
                sum.push("IX");
                break;
        }

    }

	return sum;
//   return sum.reduce((a, b) => a + b, 0)

};

console.log('2: ', convertToRoman(1));

// function convertToRoman(num) {

// let roman = [];
// let total = num;

// 	// if (total < 4) {
// 	// 	for (let i = 1; i <= total; i++) {
// 	// 		roman.push('I')
// 	// 	}
// 	// } else if (total === 4) {
// 	// 	roman.push('IV')
// 	// } else if (total === 5) {
// 	// 	roman.push('V')
// 	// } else if (total === 6) {
// 	// 	roman.push('VI')
// 	// } else if (total === 7) {
// 	// 	roman.push('VII')
// 	// } else if (total === 8) {
// 	// 	roman.push('VIII')
// 	// } else if (total === 9) {
// 	// 	roman.push('IX')
// 	// }

// // Adding any M's for 1000's 
// 		if (total > 1000) {
// 			console.log('I run for over 1000')
// 			let result = total / 1000;
// 			for (let i = 1; i <= result; i++) {
// 				total = total - 1000; 
// 				roman.push('M');  
// 			} 
// 		}
 
// //  Adding any D's for 500's
// 		if (1000 > total > 500) {
// 			console.log('I run for under 1000 but over 500')
// 				total = total - 500; 
// 				roman.push('D'); 
// 			} 

// // Adding C's for 100's
// 		if (500 > total > 100) {
// 			console.log('I run for over under 500 but over 100')
// 			let result = total / 100; 
// 			for(let i = 1; i <= result; i++) {
// 				total = total - 100; 
// 				roman.push('C')
// 			}
// 		}

// // Adding L's for 50's 
// 		if (100 > total > 50) {
// 			console.log('I run for over under 100 but over 50')
// 				total = total - 50; 
// 				roman.push('L'); 
// 			} 

// // Adding X's for 10's 
// 		if (50 > total > 10) {
// 			console.log('I run for under 50 but over 10')
// 			let result = (total / 10).floor(); 
// 			for(let i = 1; i <= result; i++) {
// 				total = total - 10; 
// 				roman.push('X')
// 			}
// 		}

// return roman.join("").toString("");

// }

// // console.log('2: ', convertToRoman(2));
// // console.log('3: ', convertToRoman(3));
// // console.log('4: ', convertToRoman(4));
// // console.log('5: ', convertToRoman(5));
// // console.log('9: ', convertToRoman(9));

// // console.log('12: ', convertToRoman(12));
// // console.log('16: ', convertToRoman(16));
// // console.log('29: ', convertToRoman(29));
// // console.log('44: ', convertToRoman(44));
// // console.log('45: ', convertToRoman(45));

// console.log('45: ', convertToRoman(1450));


// // function convert(num) { 
// //   if(num < 1){ return "";}
// //   if(num >= 40){ return "XL" + convert(num - 40);}
// //   if(num >= 10){ return "X" + convert(num - 10);}
// //   if(num >= 9){ return "IX" + convert(num - 9);}
// //   if(num >= 5){ return "V" + convert(num - 5);}
// //   if(num >= 4){ return "IV" + convert(num - 4);}
// //   if(num >= 1){ return "I" + convert(num - 1);}  
// // }