let obj = {
	toString() {
		console.log('hey ik word aangeroepen');
		return 'hoi';
	},
};

// == deze staat conversies toe
// === strict comparse doet geen conversies   type mismatch = false

console.log(2 == '2');
console.log(2 === '2'); // best practices

if (obj === 'hoi') {
	console.log('ja gelijk!');
} else {
	console.log('nope niet gelijk');
}

if (window.localStorage) {
	console.log('ja er is localStorage');
} else {
	console.log('hey geen localStorage');
}

let verdieping = 0;
if (!verdieping) {

}
if (verdieping === undefined || verdieping === '' || verdieping === null) {
    
}