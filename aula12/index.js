let varA = "A";  // B
let varB = "B";  // C
let varC = "C";  // A

console.log(varA, varB, varC);

// Maneira clássica de resolver
// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;
// console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];  // Array
console.log(varA, varB, varC);