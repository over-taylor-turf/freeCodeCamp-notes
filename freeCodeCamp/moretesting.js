function diffArray(arr1, arr2) {
  
  arr1.sort(); 

  arr2.sort(); 

  let longest = arr1.length >= arr2.length ? arr1 : arr2
  let shortest = arr1.length < arr2.length ? arr1 : arr2

  let newArr = [];
  
  for (let i = 0; i < (longest.length); i++) {
      if (shortest.includes(longest[i])) {
          newArr;
    } else {
      newArr.push(longest[i])
    }
  }

  newArr.sort(); 

  for (let i = 0; i < (shortest.length); i++) {
    if (shortest.includes(longest[i])) {
        newArr;
  } else {
    newArr.push(longest[i])
  }
}

  return newArr; 
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));