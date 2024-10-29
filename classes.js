// prototypes

class LivingBeing {
	constructor() {
		if (new.target === LivingBeing) {
            throw new Error('LivingBeing kan niet rechtstreeks worden aangemaakt, abstract class enzo');
		}
	}

	talk() {
		console.log('hallo vanuit LB! ik ben ' + this.age);
	}
}
class Person extends LivingBeing {
	name;
	age;

	static nrOfPersons = 0;

	constructor(name, age) {
		super();
		this.name = name;
		this.age = age;

		Person.nrOfPersons++;
		console.log(`nu ${Person.nrOfPersons} personen aangemaakt`);
	}
}
let p = new Person('JP', 38);
console.log(p);
p.talk();

new Person();
new Person();
new Person();
new Person();
new LivingBeing();

class MijnElement extends HTMLElement {}

// customElements.define('mijn-custom-element', class extends HTMLElement {});
// customElements.define('mijn-custom-element', MijnElement);
