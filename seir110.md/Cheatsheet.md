# Data Types and Javascript Basics

## Variable Syntax

- `=` ← the assignment operator, assigns a variable name to a value
- `const` ← declares a variable (❗️ use as your default: _cannot_ be reassigned)
- `let` ← declares a variable (❗️ be careful: _can_ be reassigned)
- `var` ← is an older way of declaring a variable (you should only use `let` and `const`)

## Primitive Data Types

- **number**
- **string**
- **boolean**
- **undefined**

## Other Data Types

- **array**
- **object**

## Operators

### Arithmetic

- `+` ← add
- `-` ← subtract
- `/` ← divide
- `*` ← multiply
- `++` ← increment (adds by 1)
- `--` ← decrement (subtract by 1)
- `%` ← modulus or modulo (find the remainder)
- `**` ← exponent

### Boolean

- `>` ← greater than
- `<` ← less than
- `==` ← equality, _does not check data types_
- `===` ← strict equality (❗️ use this!), _checks data types_
- `!=` ← inequality, _does not check data types_
- `!==` ← strict inequality (❗️ use this!), _checks data types_
- `>=` ← greater than or equal to
- `<=` ← less than or equal to

### Logical

- `||` ← "or", returns `true` only if **both** values given are true
- `&&` ← "and", returns `true` if **either** values given are true
- `!` ← "not", flips the value given to it `!true` returns `false` and `!false` returns `true`

## Combining Strings

- **concatenation** ← adding strings using quotations (`'` or `"`) and the `+` addition operator
  - For Example:
    Input: `console.log("hello" + " " + "friends!")`
    Output: `hello friends!`
- **interpolation** ← adding strings, expressions, or variables using backticks (`` ` ``)
