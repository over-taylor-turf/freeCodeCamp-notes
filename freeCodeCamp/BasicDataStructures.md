# ✨ Arrays

In an array, each array item has an **index**. This index doubles as the position of that item in the array, and how you reference it.

Arrays are **mutable**. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time.

## ✨ Array Methods for Adding & Deleting

➕ `myArraysName.push(itemName)` ➡️ will **add** an item to the **end** of the array. 

➖ `myArraysName.pop()` ➡️ will **remove** an item at the **end** of the array. No parameters! Also returns the deleted item if assigned to a variable. 

➕ `myArraysName.unshift(itemName)` ➡️ will **add** an item to the **beginning** of the array. 

➖ `myArraysName.shift()` ➡️ will **remove** an item at the **beginning** of the array. No parameters! Also returns the deleted item if assigned to a variable. 

➖ / ➕ `myArraysName.splice(parameter1, parameter2, parameter3)` ➡️ allows us to **remove** any number of consecutive elements from **anywhere** in an array. Three parameters are possible! Also returns the deleted items if assigned to a variable.
☝️ The first parameter represents the index on the array from which to begin removing elements.
✌️ The second parameter indicates the number of elements to delete. 
🤞 The third parameter is used to add items to the array. 

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

//  Output: [ 10, 11, 12, 13, 14, 15 ]
```

➕ `myArraysName.slice()` ➡️ Rather than modifying an array, `slice()` copies a given number of elements to a new array, leaving the original array untouched. Two parameters are possible! 
☝️ The first parameter is the *index* at which to begin copying.
✌️ The second parameter is the *index* at which to stop copying (copying will occur up to, but not including the element at this index).
```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

// Output: ['snow', 'sleet']
```

## ✨ Copy an Array with the Spread Operator

An Example: 
```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```
⬆️ `thisArray` remains unchanged and `thatArray` contains the same elements as `thisArray`.

Another Example: 
```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```
⬆️ `thatArray` would have the value `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`. By using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

## ✨ Check For The Presence of an Element With `indexOf()`
The built-in method, `indexOf()`, allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and returns the position, or index, of that element, or `-1` if the element does not exist on the array.

For Example:
```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // -1
fruits.indexOf('oranges'); // 2
fruits.indexOf('pears'); // 1
```

## ✨ Array Methods for Iterating 

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as `every()`, `forEach()`, `map()`, etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for **loop**.

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// Output: newArr = [12, 14, 80]
```