

console.log('!', !true);
console.log('!4', !4);
console.log('!0', !0);
console.log('!!bla', !!'bla');
console.log('Boolean(bla)', Boolean('bla'));
console.log('Boolean(bla)', Boolean('bla'));

let obj = { x: 24, y: 'hoi' };
console.log(obj);
delete obj.y;
console.log(obj);

console.log('4 || 7:', 4 || 7);
console.log('falsy || 7:', 0 || 7);
console.log('null/undefined ?? 7:', undefined ?? 7);

console.log(document.querySelector('h1').textContent.length);
console.log(typeof document.querySelector('h1').textContent);
document.querySelector('h1').textContent ||= 'mijn andere kop';

let arr1 = [2,4,6];
let arr2 = [7,9,11];
let combined = [...arr1, ...arr2];
console.log('combined:', combined);

let obj1 = { x: 24, y: 'hoi 1' };
let obj2 = { y: 'hoi 2', z: [] };
let combinedObj = { ...obj1, ...obj2 };
console.log('combinedObj:', combinedObj);

// e.key === 'enter' && func();

function test(a) {
    if(a === 'iets') return;
}

if(e.key === 'enter') {
    func();
}

console.log(null && 8);

let val = -0;
console.log(+!val);