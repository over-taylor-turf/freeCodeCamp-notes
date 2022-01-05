function sumAll(arr) {

    let total = 0; 

    let sortedArray = arr.sort(function(a, b) {
        return a - b;
      });

    let start = sortedArray[0];

    let end = sortedArray[1];

    for (let i = start; i <= end; i++) {
      total += i; 
    }

    return total;
    
  }
  
  console.log(sumAll([10, 5]));