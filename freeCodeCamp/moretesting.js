function chunkArrayInGroups(arr, size) {
  let arrayLength = arr.length;
  let sortedArray = []; 
  for (let i = 0; i < arrayLength; i += size) {
    sortedArray.push(arr.slice(i, i + size));
  }
  return sortedArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));