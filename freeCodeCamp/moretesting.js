const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i <= s.length; i++) {
    newArray.push(s[i]);
  }
  // Only change code above this line
  console.log(newArray)
  return newArray;
};
