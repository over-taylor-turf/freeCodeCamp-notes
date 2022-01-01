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

## ✨ Shortcuts

➡️ `\s` returns whitespace. (This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters). You can think of it as similar to the character class `[ \r\t\f\n\v]`.

➡️ `\S` returns everything that is **not** whitespace. (This pattern will not match whitespace, carriage return, tab, form feed, and new line characters). You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

➡️ `\d` is the shortcut to look for digit characters. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

➡️ `\D` is the shortcut to look for non-digit characters. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

➡️ `\w` is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

➡️ `\W` searches for the opposite of the `\w`. This shortcut is the same as `[^A-Za-z0-9_]`.

➡️ `+` use the plus sign to look for one or more characters 

➡️ `*` use the asterisk to look for zero or more characters.

You can also specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets. You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between 3 and 5 times in the string `ah`, your regex would be `/a{3,5}h/`. 

To only specify the lower number of patterns, keep the first number followed by a comma: `/a{3,}h/`.

To specify a certain number of patterns, just have that one number between the curly brackets: `/a{3}h/`.

➡️ `?` You can specify the possible existence of an element with a question mark. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional: `/colou?r/`.

