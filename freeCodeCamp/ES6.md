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

## ✨ Array Destructuring 

Similarly, we can also destructure arrays into variables. 
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];

console.log(a, b, c);
// Output: 1, 2, 5
```

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array:
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
**Note**: The rest element only works correctly as the last variable in the list.

## ✨ Use class Syntax to Define a Constructor Function

The `class` keyword declares a new `function`, to which a `constructor` is added. This `constructor` is invoked when new is called to create a new `object`.

The `constructor` method is a special method for creating and initializing an object created with a class.

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```
**Note**: UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.

## ✨ Getters & Setters

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

⬇️ Example: 
```js
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
```
Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

## ✨ Exporting & Importing *Named* Exports to Other Files

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 

⬇️ For example: 
```js
const add = (x, y) => {
  return x + y;
}

export { add };
```
 ⬇️ You can export multiple functions by placing them all in the export statement like this: 
```js
export { add, subtract };
```

 ⬇️ In order to import, you need a statement like this: 
```js
import { add, subtract } from './math_functions.js';
```
**Note**: The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

## ✨ Exporting & Importing *Default* Exports to Other Files

Export a named function:
```js
export default function add(x, y) {
  return x + y;
}
```

Export an anonymous function: 
```js
export default function(x, y) {
  return x + y;
}
```
Usually you will use this default syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with `var`, `let`, or `const`.

⬇️ To import a default export, you need to use a different import syntax:
```js
import add from './math_functions.js';
```
⬆️ The syntax differs in one key place. The imported value, `add`, is not surrounded by curly braces (`{}`). `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use *any name* here when importing a default.

## ✨ Promises

`Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. 
⬇️ The syntax looks like this:
```js
const myPromise = new Promise((resolve, reject) => {

});
```

A promise has three states: `pending`, `fulfilled`, and `rejected`. `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail. These are methods that take an argument, as seen below. ⬇️
```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with resolve. `catch` is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. ⬇️
```js
const makeServerRequest = new Promise((resolve, reject) => {
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```