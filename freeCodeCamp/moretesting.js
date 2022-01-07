function destroyer(arr) {
  
  let mainarray = arguments[0];

  let numberOfDeletions = arguments.length;

  let deletions = []; 

  for (let i = 1; i < numberOfDeletions; i++) {
    deletions.push(arguments[i])
  }

 let filtered = mainarray.filter(item => !deletions.includes(item))

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// [1, 1]