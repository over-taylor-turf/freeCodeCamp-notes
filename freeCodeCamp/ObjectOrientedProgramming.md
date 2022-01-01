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

