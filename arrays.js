let lijstje = [1, 3, 5, 7];
// lijstje[-999] = 9;

console.log(lijstje);
console.log(lijstje.length);

// lijstje.length = 2;
// lijstje.length = 4;

for (let i = 0; i < lijstje.length; i++) {
	console.log('met index:', lijstje[i]);
}

for (let item of lijstje) {
	console.log('met of: ', item);
}

// een array in JS is niet echt een array
// - het is een object met een length prop

let obj = { x: 24 };
console.log(obj.x);
console.log('met blokhaken:', obj['x']);

obj['0'] = 1;
obj['1'] = 3;
obj['2'] = 4;
console.log(obj[0]);

let ding = {
	x: 24,
	y: 'hoi',
	z: 'bla',
};

console.log(lijstje.filter((x) => x > 3));
console.log([1, 2, 3, NaN].includes(NaN));
console.log([1, 2, 3, NaN].indexOf(NaN));

let spelers = [
	{
		name: 'JP',
		cards: [],
	},
	{
		name: 'Kasper',
		cards: []
	}
];
spelers.flatMap(x => x.cards);
spelers.push(); // voeg aan eind toe
spelers.unshift(); // voeg aan begin toe
spelers.shift(); // verwijder begin
spelers.pop(); // verwijder eind


spelers.splice();