function truncateString(str, num) {
  let stringArray = str.trim().split('');
  let truncatedArray = []; 
  let truncatedWord = ''; 
  
  if (str.length > num) { 
  for (let i = 0; i < num; i++) {
    truncatedArray.push(stringArray[i])
  }
  truncatedWord = truncatedArray.join('')
  return truncatedWord + '...'
} else {
  return str; 
}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));