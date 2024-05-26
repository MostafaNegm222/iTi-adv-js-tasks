let a = 5;
let b = 10;
console.log(a);
console.log(b);
// Swapping values using destructuring
[a, b] = [b, a];

console.log("a:", a); // Now a is 10
console.log("b:", b); // Now b is 5