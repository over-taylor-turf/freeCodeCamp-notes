# Regular Expressions

Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

## ✨ Using the Test Method

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); 
    // true
```

If you want to ignore the case sensitivity append `i` to the end, like so: `/Code/i`. 

## ✨ Extract Matches

Extract the actual matches you found with the `.match()` method.

The `.match` syntax is the "opposite" of the `.test`:
```js
'string'.match(/regex/);
/regex/.test('string');
```

For example:
```js
"Hello, World!".match(/Hello/);
    // ["Hello"]
```