let array = ['item1', 'item2', 'item3', 'item4']
let string = array.join(' ');
    // string: 'item1 item2 item3 item4' 

let newArray = ['h', 'e', 'l', 'l', 'o']
let newString = newArray.join('');
    // newString: 'hello'

let capitalized = newString.charAt(0).toUpperCase() + newString.slice(1);
console.log(capitalized);
    // string: 'item1 item2 item3 item4' 