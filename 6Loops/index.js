console.log('for loop with index')
for (let i = 0; i < 5; i++) {
  console.log(i); // prints 0 to 4
}

console.log('while true loop')
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log('iterate over an array - for of loop')
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}