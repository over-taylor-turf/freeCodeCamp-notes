# Notes from ES6 on freeCodeCamp

## ✨ Writing Functions 

Three ways to write a function: 

☝️ Anonymous Function
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

☝️ Arrow Function
```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

☝️ One-Line Function
```js
const myFunc = () => "value";
```

☝️ One-Line Function with a Parameter
```js
const doubler = (item) => item * 2;
```
or
```js
const doubler = item => item * 2;
```
⬆️ If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

☝️ One-Line Function with a *Default* Parameter
```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // "Hello John"
console.log(greeting()); // "Hello Anonymous"
```

☝️ One-Line Function with a *Rest* Parameter

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); 
    // "You have passed 3 arguments." 
console.log(howMany("string", null, [1, 2, 3], { })); 
    // "You have passed 4 arguments."
```
or
```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
sum(0,1,2) // 3
sum(1,2,3,4) // 10
```

The rest parameter eliminates the need to check the args array and allows us to apply `map()`, `filter()`, and `reduce()` on the parameters array.

## ✨ Object Destructuring 

Consider the following ES5 Code: 
```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // 'John Doe'
const age = user.age; // 34
```

With Object Destructuring in ES6, we can: 
```js
const user = { name: 'John Doe', age: 34 };

const { name, age } = user;

name // 'John Doe'
age // 34
```
⬆️ Here, the `name` and `age` variables will be created and assigned the values of their respective values from the `user` object. You can see how much cleaner this is. You can extract as many or few values from the object as you want.

⬇️ Or, if we want a unique variable name: 
```js
const user = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user;

userName // 'John Doe'
userAge // 34
```

⬇️ You can use the same principles from the previous two examples to destructure values from nested objects.

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

We can do object destructuring by: 
```js
const { johnDoe: { age, email }} = user;

age // 34
email // 'johnDoe@freeCodeCamp.com'
```
or
```js
const { johnDoe: { age: userAge, email: userEmail }} = user;

userAge // 34
userEmail // 'johnDoe@freeCodeCamp.com'
```