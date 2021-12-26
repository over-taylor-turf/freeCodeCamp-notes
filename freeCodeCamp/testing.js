var arr = [6, 89, 3, 45];

console.log('The arr is: ', arr)
    // Output: [ 6, 89, 3, 45 ]

    console.log('The maximum value of arr is: ', Math.max.apply(null, arr));     

console.log('The ...arr is: ', ...arr)
        // Output: 6 89 3 45

console.log('The maximum value of ...arr is: ', Math.max(...arr)); 

arrCopy = [...arr]

console.log('Here is a copy of the array: ', arrCopy)


const user = { name: 'John Doe', age: 34 };

const { age } = user;

console.log(age);
