# Notes from Basic JavaScript on freeCodeCamp

## ✨ Iterate with JavaScript While Loops

A **while loop** runs *while* a specified condition is true and stops once that condition is no longer true.

⬇️ The while loop will execute 5 times and append the numbers 0 through 4 to ourArray. 
```js
const ourArray = [];

let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

// Output: [0, 1, 2, 3, 4]
```

⬇️ The while loop will execute 5 times and append the numbers 5 through 0 to myArray. 
```js
const ourArray = [];

let i = 5;

while(i >= 0) {
  myArray.push(i);
  i--;
}

// Output: [5, 4, 3, 2, 1, 0]
```


## ✨ Iterate with JavaScript For Loops

A **for loop** runs *for* a specific number of times.

For loops are declared with three optional expressions separated by semicolons: `for (a; b; c),` where `a` is the **initialization statement**, `b` is the **condition statement**, and `c` is the **final expression**.

`a` The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

`b` The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

`c` The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

```js
const ourArray = [];

for (let i = 0; i <= 5; i++) {
  ourArray.push(i);
}

// Output: [0, 1, 2, 3, 4, 5]
```


## ✨ Iterate Through an Array with a For Loop

⬇️ A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array `arr` to the console.

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

## ✨ Nesting For Loops

If you have a multi-dimensional array, you can use the same logic to loop through both the array and any sub-arrays. 

⬇️ Here is an example:
```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//  Output: 1, 2, 3, 4, 5, 6
```

## ✨ Iterate with JavaScript Do...While Loops

The next type of loop you will learn is called a `do...while loop`. It is called a `do...while loop` because it will first `do` one pass of the code inside the loop no matter what, and then continue to run the loop `while` the specified condition evaluates to `true`.

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

// Output:  [0, 1, 2, 3, 4]
```

## ✨ Replace Loops using Recursion

Recursion is the concept that a function can be expressed in terms of itself. 

To help understand this, start by thinking about the following task: multiply the first `n` elements of an array to create the product of those elements. 

⬇️ Using a for loop, you could do this:
```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```
