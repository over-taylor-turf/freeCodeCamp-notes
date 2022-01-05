// ## ✨ Chunky Monkey

// **Directions**: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arrayLength = arr.length;
  let sortedArray = []; 

  for (let i = 0; i < arrayLength; i += size) {
        sortedArray.push(arr.slice(i, i + size));
  }

  return sortedArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
