let text = 'hallo daar!';
let text2 = 'hallo daar!';
console.log(text);
console.log(text.startsWith('hallo'));
console.log(text.endsWith('!'));
console.log(text.substring(3, 7));

// templates
let text3 = `hallo 

daar! ${text}`;
console.log(text3);

let tekstMetSpecialeKaracters = 'hoi 🎉';
console.log(tekstMetSpecialeKaracters.length);
console.log([...tekstMetSpecialeKaracters]);
console.log([...tekstMetSpecialeKaracters].length);

// regular expressions
let postcode = '9407AK';
let pattern = /^[0-9]{4} ?[a-zA-Z]{2}$/;

if (pattern.test(postcode)) {
	console.log('woehoe match:', postcode);
} else {
	console.log('NOPE geen match:', postcode);
}

console.log('blablabla'.replace('bla', 'hoi'));
console.log('blablabla'.replaceAll('bla', 'hoi'));