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

# ✨ Objects

At their most basic, objects are just collections of `key`-`value` pairs. In other words, they are pieces of data (`values`) mapped to unique identifiers called properties (`keys`). 

For Example:
```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

## ✨ Adding to & Modifying Information to Objects 

If you want to add an additional property, such as "origin", it can be done by assigning origin to the object using dot notation:
`tekkenCharacter.origin = 'South Korea';`

You can also add a property with bracket notation. Bracket notation is required if your property has a space in it or if you want to use a variable to name the property.
`tekkenCharacter['hair color'] = 'dyed orange';`
or
```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

The original object has now been modified to look like: 
```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

## ✨ Removing Information from Objects 

To remove a key, we can delete it by using the `delete` keyword like this:
`delete foods.apples;`

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

```

## ✨ Check if an Object has a Property

JavaScript provides us with two different ways to check if an object has a specific property. 

☝️ The `hasOwnProperty()` method
`users.hasOwnProperty('Alan');`

✌️ The `in` keyword
`'Alan' in users;`

Both would return `true` if There was a user value of `Alan`.

Practice Problem: Finish writing the function so that it returns `true` if the object passed to it contains all four names, `Alan`, `Jeff`, `Sarah` and `Ryan` and returns `false` otherwise.

Object:
```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
```

Answer 1: 
```js
function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
```

Answer 2:
```js
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
```

## ✨ Iterate Through the Keys of an Object with a for...in Statement

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement.

⬆️ For our users object, this could look like:
```js
for (let user in users) {
  console.log(user);
}
// This would log Alan, Jeff, Sarah, and Ryan - each value on its own line.
```
In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.

