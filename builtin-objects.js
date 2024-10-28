// Object
// Array
// Arror

// Date
// JSON

let obj = { x: 24n };
// let objInString = JSON.stringify(obj);
// console.log(objInString);
// console.log(JSON.parse(objInString));

// clone
console.log(structuredClone(obj));
// let clone = JSON.parse(JSON.stringify(obj));
// console.log(clone);

let nu = new Date();
console.log(nu.getDate());
console.log(nu.getMonth() + 1);
console.log(nu.getFullYear());

console.log(new Date('2023-03-04'));
console.log(new Date('2023-3-4'));
