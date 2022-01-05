# Intermediate Algorithm Scripting Problems

## 🔥 Sum All Numbers in a Range

**Directions**: Given an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return 10 because sum of all the numbers between `1` and `4` (both inclusive) is `10`.

**Solution**: 
```js
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

sumAll([4, 1]);
// 10 (<- 1 + 2 + 3 + 4  = 10)

```

## 🔥 Diff Two Arrays

**Directions**: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.