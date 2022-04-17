function telephoneCheck(str) {

  // First, just get rid of white space and one's. 
  let regex1 = /\s/g;
  let regex2 = /[1]/g; 
  let noSpaces = str.replace(regex1, '')
  let noOnes = noSpaces.replace(regex2, '')
  let firstArray = noOnes.split("")


  if (firstArray[3] === ")") {
    return false; 
  }

  if (firstArray[0] === "(" & firstArray[4] !== ")") {
    return false;
  }

  for (let i = 5; i < firstArray.length - 5; i++) {
    if (firstArray[i] === "(" || firstArray[i] === ")") {
      return false; 
    } 
  }

  let counter = 0; 

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === "-"){
      counter++; 
    }
  }

  if (counter > 2) {
    return false; 
  }

  // Get rid of symbols and spaces for correct number count. 
  
  let originalString = str;
  let regex = /[^A-Za-z0-9]/g;
  let noDash = originalString.replace(regex, '');
  let array = noDash.split("")

  console.log('This is second array: ', array);

  if (array[0] === '1') {
    array.shift(); 
  } 

  if (array.length === 10) {
    return true; 
  } else {
    return false; 
  }

}

console.log(telephoneCheck("55 55-55-555-5"));
