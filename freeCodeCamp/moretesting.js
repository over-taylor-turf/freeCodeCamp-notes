function confirmEnding(str, target) {
  let stringLength = str.length; 
  let lastLetterIndex = [stringLength-1]; 
  return str[lastLetterIndex] === target;
}

console.log(confirmEnding("Bastian", "n"));