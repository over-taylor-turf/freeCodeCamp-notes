# Regular Expressions

Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

➡️ `/g` at the end of your Regex search will return more than one match. 
➡️ `/i` at the end of your Regex search will ignore case sensitivity.
➡️ `/gi`at the end will return multiples *and* ignore case sensitivity. 
➡️ `/x|y|z/` will test for multiple Regex matches. 

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

## ✨ Wildcard Period

The wildcard character `.` will match any one character. 
```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // hum
huRegex.test(hugStr); // hug
```

## ✨ Character Classes & Character Sets

We how to match literal patterns (`/literal/`) and wildcard character (`/./`). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes: character classes. 

⬇️ For example: `/b[aiu]g/`: 
```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // ["big"]
bagStr.match(bgRegex); // ["bag"]
bugStr.match(bgRegex); // ["bug"]
bogStr.match(bgRegex); // null
```

Inside a character set, you can define a range of characters to match using a hyphen character: `-`.

⬇️ For example, to match lowercase letters a through e you would use `[a-e]`.
```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // ["cat"]
batStr.match(bgRegex); // ["bat"]
matStr.match(bgRegex); // null
```
**Note**: Using the hyphen (`-`) to match a range of characters is not limited to letters. It also works to match a range of numbers.

## ✨ Negated Character Sets

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.

⬇️ To create a single regex that matches all characters that are *not* a number or a vowel. 
```js
/[^aeiou^0-9]/
```

algorithms, hashmaps, binary trees, lists/arrays, string manipulation, for loops & while loops.