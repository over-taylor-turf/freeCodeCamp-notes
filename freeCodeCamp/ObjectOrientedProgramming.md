# Objects

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. 

Objects can have a special type of property, called a **method**.

Methods are properties that are functions. This adds different behavior to an object. 

Here a example with a method: ⬇️
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();
```

## Define a Constructor Function

**Constructors** are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

⬇️ Here is an example of a constructor:
```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let blueBird = new Bird('Bluey', 'light blue');
```
 Constructors follow a few conventions:
- Constructors are defined with a *capitalized name* to distinguish them from other functions that are not constructors.
- Constructors use *the keyword `this`* to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
- Constructors *define* properties and behaviors instead of *returning* a value as other functions might.
- The `new` operator is used when calling a constructor. This tells JavaScript to create a new instance of `Bird` called `blueBird`.

## Verify an Object's Constructor with `instanceof`

Anytime a constructor function creates a new object, that object is said to be an **instance** of its constructor. JavaScript gives a convenient way to verify this with the `instanceof` operator. `instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether or not that object was created with the constructor. 

⬇️ Here's an example:
```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

// true
```

## Use Prototype Properties to Reduce Duplicate Code

⬆️ Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.

A better way is to use the prototype of `Bird`. Properties in the prototype are shared among ALL instances of `Bird`. Here's how to add `numLegs` to the `Bird` prototype: `Bird.prototype.numLegs = 2;`

Think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the `Bird` constructor as `Bird.prototype`. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

There are two kinds of properties: **own** properties and **prototype** properties. **Own** properties are defined directly on the object instance itself. **Prototype** properties are defined on the prototype.
```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // ["name"]
console.log(prototypeProps); // ["numLegs"]
```

We can also: 
```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
⬆️ Whenever a prototype is manually set to a new object, remember to define the `constructor` property.

One way to create an instance of the supertype (or parent) using the `new` operator. ⬇️
```js
let animal = new Animal();
```

A better way is: ⬇️
```js
let animal = Object.create(Animal.prototype);
```

## Overview

An object can inherit its behavior (methods) from another object by referencing its prototype object. ⬇️
```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the `ChildObject` received its own methods by chaining them onto its prototype. ⬇️
```js
ChildObject.prototype.methodName = function() {...};
```

It's also possible to override an inherited method. ⬇️
```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

There are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like `Bird` and `Airplane`. They can both fly, but a `Bird` is not a type of `Airplane` and vice versa.

For unrelated objects, it's better to use **mixins**. A mixin allows other objects to use a collection of functions.
```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

flyMixin(bird);

bird.fly();
```

## Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared: ⬇️
```js
(function () {
  console.log("Chirp, chirp!");
})();
```
Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 