## ✨ Arrays

In an array, each array item has an **index**. This index doubles as the position of that item in the array, and how you reference it.

Arrays are **mutable**. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time.

## ✨ Array Methods 

➕ `myArraysName.push(itemName)` ➡️ will **add** an item to the **end** of the array. 

➖ `myArraysName.pop()` ➡️ will **remove** an item at the **end** of the array. No parameters! Also returns the deleted item if assigned to a variable. 

➕ `myArraysName.unshift(itemName)` ➡️ will **add** an item to the **beginning** of the array. 

➖ `myArraysName.shift()` ➡️ will **remove** an item at the **beginning** of the array. No parameters! Also returns the deleted item if assigned to a variable. 

➖ / ➕ `myArraysName.splice(parameter1, parameter2, parameter3)` allows us to **remove** any number of consecutive elements from **anywhere** in an array. Three parameters are possible! Also returns the deleted items if assigned to a variable.
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

