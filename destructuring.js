let person = {
	name: 'Kasper',
	age: 27,
};
// let name = person.name;
// let age = person.age;

let { name: n, age: a = 55 } = person;

console.log(n);
console.log(a);

let lijstje = [2, 4, 6, 8, 10];

let [eerste, tweede] = lijstje;
console.log(eerste, tweede);

let dateString = '1997-10-23';
let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

// let result = dateString.match(regex);
let [, year, month, day] = dateString.match(regex);
console.log(year, month, day);

// console.log(result);

let prop = 'country.name';
let [mainProp, subProp] = prop.split('.');

// obj[mainProp][subProp];

let complexObj = {
	name: 'Kasper',
	favorieteMaaltijden: [
		{
			beschrijving: 'Tosti met ham en kaas',
			isVegan: false,
		},
		{
			beschrijving: 'Meergranenbrood',
			isVegan: false,
		},
		{
			beschrijving: 'Patat oorlog',
			isVegan: false,
		},
	],
};

let {
	favorieteMaaltijden: [, { beschrijving }],
} = complexObj;
console.log(beschrijving);

for (let { beschrijving, isVegan } of complexObj.favorieteMaaltijden) {
	console.log(beschrijving, isVegan);
}

function getLocation({ city, country } = (options = {})) {
	console.log('options:', city, country);
}
getLocation();
getLocation({ city: 'Amsterdam' });
getLocation({ country: 'Rusland' });
