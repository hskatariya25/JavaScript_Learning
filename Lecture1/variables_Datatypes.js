function example() {
  var x = 10;
  console.log(x);
}
example(); // 10
// console.log(x);  // Throws ReferenceError: x is not defined

// Re assignment using var
var x = 10;
console.log(x); // Output : 10

x = "Mayank";
console.log(x); // Output : Mayank

// Re definition using var
var x = 10;
console.log(x); // Output : 10

var x = "Mayank";
console.log(x); // Output : Mayank

let a = 10;
if (true) {
  let y = 20;
  console.log(x); // Output: 10
  console.log(y); // Output: 20
}
console.log(a); // Output: 10
// console.log(y); // Throws ReferenceError: y is not defined

// Re assignment using 'let'

let j = 10;
console.log(j); // Output : 10

j = "Mayank";
console.log(j); // Output : Mayank

const m = 20;
console.log(m); // Output : 20

// m = 30;
// console.log(m); // Output : Error!

const person = {
  name: "Mayank",
  age: 21,
};

console.log(person.name); // Output: Mayank

// Modifying object properties is allowed
person.name = "Love";
console.log(person.name); // Output: Love

// Attempting to reassign the variable will throw an error
// person = {}; // Throws TypeError: Assignment to constant variable.

const numbers = [1, 2, 3];
console.log(numbers); // Output: [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

// Attempting to reassign the variable will throw an error
// numbers = []; // Throws TypeError: Assignment to constant variable.
