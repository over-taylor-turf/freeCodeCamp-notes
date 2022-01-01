function titleCase(str) {

  let lowercaseString = str.toLowerCase();
  let arrayOfWords = lowercaseString.trim().split(" ");
  let uppercaseString = ''; 
  let title = []; 
  
  for (let i = 0; i < arrayOfWords.length; i++) {
    let uppercaseString = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    title.push(uppercaseString);
  }
  return title.join(" "); 
}

console.log(titleCase("I'm a little tea pot"));