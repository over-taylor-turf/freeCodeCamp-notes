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
