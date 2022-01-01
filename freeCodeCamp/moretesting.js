function bouncer(arr) {
  newArray = []; 
  for (let i = 0; i > arr.length; i++){
    if (typeof arr[i] === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}