# Data Types and Javascript Basics

## Variable Syntax
- `=` ← the assignment operator
- `const` ← declares a variable (use as your default: *cannot* be reassigned)
- `let`  ← declares a variable (be careful: *can* be reassigned)
- `var` ← is an older way of declaring a variable (you should only use `let` and `const`)

## Primitive Data Types
- **number** 
- **string** 
- **boolean**
- **undefined** 

## Other Data Types
- **array** 
- **object** 

## Math Operators
- `+` ← add
- `-` ← subtract
- `/` ← divide
- `*` ← multiply
- `++` ← increment (adds by 1)
- `--` ← decrement (subtract by 1)
- `%` ← modulus or modulo (find the remainder)
- `**` ← exponent 

## Boolean Operators  
- `>` ← greater than
- `<` ← less than
- `==` ← equality, *does not check data types*
- `===` ← strict equality (use this!), *checks data types*
- `!=` ← inequality, *does not check data types*
- `!==` ← strict inequality (use this!), *checks data types*
- `>=` ← greater than or equal to
- `<=` ← less than or equal to 
- `||` ← "or"
- `&&` ← "and"

## Combining Strings
- **concatenation** ← adding strings using quotations (`'` or `"`) and the `+` addition operator
    - For Example: 
    Input: `console.log("hello" + " " + "friends!")`
    Output: `hello friends!`
- **interpolation** ← adding strings, expressions, or variables using backticks (`` ` ``)