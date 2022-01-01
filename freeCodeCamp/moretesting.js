function confirmEnding(str, target) {
  // turn the original string and target into reversed arrays of the original letters
  let reversedTarget = target.split("").reverse();
  let reversedString = str.split("").reverse();

  let comparisonArray = []; 

  // use a simple for loop to iterate through the last (now first) letters as many times as the length of the target
  for (let i = 0; i < reversedTarget.length; i++) {
    comparisonArray.push(reversedString[i]); 
  }
  // comapre the last (now first) letters with the target letters
  // convert the arrays back into strings
  return comparisonArray.join("") === reversedTarget.join("") 
}

console.log(confirmEnding("Congratulation", "on")); 