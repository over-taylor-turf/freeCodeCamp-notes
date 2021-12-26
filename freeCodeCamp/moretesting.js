function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
    return [startNum];
    } else {
      const count = rangeOfNumbers(startNum, endNum - 1);
      count.push(endNum);
      return count;
    }
  };

  console.log(rangeOfNumbers(1, 5))