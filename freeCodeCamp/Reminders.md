# Manipulating Data Types

You have a `string`. You want to change it to... 

## String ➡️ Array of Letters
```js
let string = 'string'
let array = [...string]
    // array: [ 's', 't', 'r', 'i', 'n', 'g' ]
let newString = array.join('')
    // newString: 'string'
```
## String ➡️ Array of Words
```js
let string = 'string one two three string end'
let arrayOfWords = string.trim().split(" ");
    // arrayOfWords: [ 'string', 'one', 'two', 'three', 'string', 'end' ]

let newNewString = arrayOfWords.join(' ')
    // newNewString: 'string one two three string end'
```

You have an `array`. You want to change it to... 

## Array ➡️ String
```js
let array = ['item1', 'item2', 'item3', 'item4']
let string = array.join(' ');
    // string: 'item1 item2 item3 item4' 

let newArray = ['h', 'e', 'l', 'l', 'o']
let newString = newArray.join('');
    // newString: 'hello'

let capitalized = newString.charAt(0).toUpperCase() + newString.slice(1);
    // capitalized: 'Hello'
```