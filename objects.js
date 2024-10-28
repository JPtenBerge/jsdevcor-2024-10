'use strict';

let person = {
	name: 'Kasper',
	birthDate: new Date(1997, 10, 23),
	get age() {
		console.log('whoa!');
		return new Date().getFullYear() - this.birthDate.getFullYear();
	},
	set age(value) {
		if (value < 1950) {
			throw new Error('Dat is veul te oud');
		}
		this.birthDate.setFullYear(value);
	},
};

console.log(person.age);
console.log(person['age']);

person.age = 1994;

console.log(person.age);

// person.age = 1934;

// Object.defineProperty(person, 'age', )

// symbols

// factory function

const createPerson = function(overrides) {
    return {
        name: 'Frank',
        age: 31,
        // ...
        ...overrides
    };
};
console.log(createPerson());
console.log(createPerson({ name: 'JP' }));
console.log(createPerson({ age: 27 }));