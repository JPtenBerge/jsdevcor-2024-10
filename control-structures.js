'use strict'; // voorkomt verschrikkelijk practices
// with
// this
// undefined = 'hoi'

if (4 > 8) {
}
for (let i = 0; i < 5; i++) {}

let lijstje = [2, 4, 8];
for (let item of lijstje) {
	console.log(item);
}

let obj = { x: 24, y: 'hoi' };
for (let prop in obj) {
	// reflection - liever niet meer gebruiken. houdt geen rekening met inheritance
	console.log(prop);
}
for (let prop of Object.keys(obj)) {
	// reflection
	console.log(prop);
}
// while(i > 5) {}

// const bla = 'hoi';
// bla = 'iets';
// ES3 - Internet Explorer 6
// undefined = 'hoi';
console.log(undefined);

function test() {
	'use strict';
}

let value = 'hoi';
switch (value) {
	case 42:
	case {}:
	case 'doei':
		console.log('doei!');
		break;
	case 'hoi':
		console.log('hoi!');
		break;
	default:
		console.log('ddeeaaault');
}

try {
	throw new Error('oh nee!');
} catch (err) {
	console.log('er ging iets mis:', err.message);
} finally {
	console.log('wordt altijd uitgevoerd 2');
}
// throw Error('oh nee 2!');
// throw 'oh nee 2!';
// throw { message: 'oh nee 2!' };

function bla() {}

const bla2 = function () {};
