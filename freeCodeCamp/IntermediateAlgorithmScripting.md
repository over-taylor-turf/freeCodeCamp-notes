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

**Solution**: 
```js
function diffArray(arr1, arr2) {

  let newArr = arr2.concat(arr1);

  let filtered = newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));

  return filtered; 
}

console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 5]));
  // [4, 5]
```

## 🔥 Seek and Destroy

**Directions**: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

**Solution**: 
```js
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
```

**Note**: What is `arguments`? The `arguments` object is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

For example, if a function is passed 3 arguments, you can access them as follows:
```js
arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument
```


## 🔥 Wherefore art thou

**Directions**: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

**Solution**: 
```js
function whatIsInAName(collection, source) {

  const arr = [];

  let source2 = [source]

  let filtered = collection.filter(item => !source2.includes(item))

  console.log(filtered)

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```