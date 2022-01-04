# Functional Programming
In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs. Functional Programming includes: 
- Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
- Pure functions - the same input always gives the same output
- Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

Vocabulary:
- **Callback functions** are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
- **First class functions** are functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
- **Higher order functions**  take a function as an argument, or return a function as a return value.
- When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a **lambda**.

Another principle of functional programming is to always declare your dependencies explicitly. This means *if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument*.

# Array Functions (Methods)

## `.map()`
The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

The first argument is the current element being processed. 
The second is the index of that element.
The third is the array upon which the map method was called.

Example:
```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
```

Map achieves the same goal as a for loop:

For Loop -> 
```js
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}
```
Map ->
```js
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));
```


## `.filter()`

Filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The first argument is the current element being processed. 
The second is the index of that element. 
The third is the array upon which the filter method was called.

## `.slice()`

The slice method returns a copy of certain elements of an array.

The first argument gives the index of where to begin the slice.
The second is the index for where to end the slice (and it's non-inclusive). 

If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

<!-- Method Chaining
```js
const filteredList = watchList.map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  }).filter(movie => {
    return (movie.rating) >= 8.0;
  });
  ``` -->


## `.splice()`

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example:
```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```
Here splice returns the string London and deletes it from the cities array. cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

## `.concat()`

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

`[1, 2, 3].concat([4, 5, 6]);`

The returned array would be [1, 2, 3, 4, 5, 6].

Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:
```js
const arr = [1, 2, 3];
arr.push([4, 5, 6]);
```
arr would have a modified value of `[1, 2, 3, [4, 5, 6]]`, which is not the functional programming way.

## `.reduce()`

The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments: 
- The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration. 
- The second is the current element being processed. 
- The third is the index of that element.
- The fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.


## `.sort()`

The sort method sorts the elements of an array according to the callback function.

The sort methods mutates the original array. ⬇️
```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
// [1, 2, 3, 4, 5]
```

If you do not want to mutate the original array, you must. ⬇️
```js
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

nonMutatingSort([1, 5, 2, 3, 4]);
// [1, 2, 3, 4, 5]
```

## `.split()` "String" => [Array, of, Words] / [L, e, t, t, e, r, s]

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

```js
const str = "Hello World";
const str2 = "Hello World,I-am code";

const byWord = str.split(" ");
  // byWord returns [ 'Hello', 'World' ]

const byLetter = str.split("")
  // byLetter returns [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

const onlyLetters = str2.split(/\W/);
  // onlyLetters returns [ 'Hello', 'World', 'I', 'am', 'code' ]

```
⬆️ Note: `/\W/` Matches any non-word character. This includes spaces and punctuation, but not underscores.


## `.join()` [Array] => "String"

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string. ⬇️
```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
  // str = "Hello World"
```

## `.every()` => true / false

The `every` method works with arrays to check if every element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

// false
```

```js
function checkPositive(arr) {
  return arr.every(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);

// false
```

## `.some()` => true / false

The `some` method works with arrays to check if **any** element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.

```js
function checkPositive(arr) {
  return arr.some(value => value > 0)
}

checkPositive([1, 2, 3, -4, 5]);
// true 
```

## Currying and Partial Application

The *arity* of a function is the number of arguments it requires. Currying a function means to convert a function of `N` arity into `N` functions of arity `1`.

In other words, it restructures a function so it takes **one** argument, then returns another function that takes the next argument, and so on.

Here's an example: ⬇️
```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 