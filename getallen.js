/*
string
int - number  bigint
boolean
regex



function
array
object
*/
let x = 14;

console.log('x:', x);
console.log('x * 2:', x * 2);
console.log('x ** 2:', x ** 2);

let y = 0.1;
let z = 0.2;
console.log('y - z:', y + z);

let nietAfgerond = 12.1 * 9;
console.log('12.1 * iets', nietAfgerond);
console.log('afronden:', nietAfgerond.toFixed(6));
console.log('type van afronden:', typeof nietAfgerond.toFixed(6));
console.log(
	'afronden naar getal parseFloat:',
	parseFloat(nietAfgerond.toFixed(6))
);
console.log('afronden naar getal parseInt:', parseInt(nietAfgerond.toFixed(6)));
console.log('afronden naar getal Number:', new Number(nietAfgerond.toFixed(6)));
console.log('afronden naar getal +:', +nietAfgerond.toFixed(6));
console.log('afronden naar getal * 1:', nietAfgerond.toFixed(6) * 1);

let getal1 = -123;
let getal2 = +123;

console.log('NaN:', 7 * {});
console.log('NaN:', 7 / 'bla');
console.log('NaN == NaN:', NaN == NaN);
console.log('typeof NaN:', typeof NaN);
console.log('4 == 4:', 4 == 4);

if (7 / 'bla' == 18 / 'hoi') {
	// idee van NaN
}

console.log('POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);
let getalletje = 8888;
console.log('toString 8:', getalletje.toString(8));
console.log('toString 6:', getalletje.toString(6));
console.log('toString 4:', getalletje.toString(4));
console.log('toString 2:', getalletje.toString(2));
console.log('toString 16:', getalletje.toString(16));
