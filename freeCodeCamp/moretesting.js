// function confirmEnding(str, target) {
//   let stringLength = str.length; 
//   let lastLetterIndex = [stringLength-1]; 
//   return str[lastLetterIndex] === target;
// }

// console.log(confirmEnding("Bastian", "n"));

const test1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let count = 0;
for (let user in usersObj) {
  if (usersObj[user]['online'] === true) {
    count++; 
  }
}
return count;
}

console.log(countOnline(test1))