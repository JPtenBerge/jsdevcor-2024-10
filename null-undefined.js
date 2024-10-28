
// null vs undefined?

// undefined = "iets niet geinitaliseerd"
// - default waarde voor iets wat er niet is
// null = "wat jij zoekt, dat is er niet"
// - er is altijd een developer geweest die er expliciet voor heeft gekozen om jou null te geven


let obj = {};
console.log(obj.nietBestaat);

function hoi() {}

let result = hoi();
console.log('result:', result);

console.log(document.getElementById('niet-bestaat'));

console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null);
