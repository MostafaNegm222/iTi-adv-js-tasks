// Given array
const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test that every element in the given array is a string
const areAllStrings = fruits.every(element => typeof element === 'string');
console.log("Are all elements strings?", areAllStrings);

// b. Test that some of array elements start with "a"
const someStartWithA = fruits.some(element => element.startsWith('a'));
console.log("Do some elements start with 'a'?", someStartWithA);

// c. Generate a new array filtered with elements starting with "b" or "s"
const filteredArray = fruits.filter(element => element.startsWith('b') || element.startsWith('s'));
console.log("Filtered Array:", filteredArray);

// d. Generate a new array with a string declaring that you like each fruit
const likedFruitsArray = fruits.map(fruit => `I like ${fruit}`);
console.log("Liked Fruits Array:", likedFruitsArray);

// e. Use forEach to display all elements of the new array from the previous point
likedFruitsArray.forEach(likedFruit => console.log(likedFruit));