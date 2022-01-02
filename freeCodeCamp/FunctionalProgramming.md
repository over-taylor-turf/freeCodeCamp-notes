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

Method Chaining
```js
const filteredList = watchList.map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  }).filter(movie => {
    return (movie.rating) >= 8.0;
  });
  ```