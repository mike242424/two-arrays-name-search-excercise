// Using nested for loops to compare names of two different arrays

let x = [
  "mike",
  "josh",
  "karen",
  "ryan",
  "sam",
  "winston",
  "phil",
  "tim",
  "greg",
  "billy",
];
let y = [
  "megan",
  "bob",
  "ryan",
  "kevin",
  "sam",
  "bobby",
  "wilson",
  "mike",
  "tyler",
  "jeff",
];
let z = [];

for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < y.length; j++) {
    if (x[i] === y[j]) {
      // pushes any name found in both arrays to the new array z
      z.push(x[i]);
    }
  }
}

console.log(z);
