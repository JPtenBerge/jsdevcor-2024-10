test();
test(14);
test(14, 28);
test(undefined, 28);
test(null, 28);
// test(14, 28, 99, 'hoi', {}, [], [], []);

function test(p1 = 'doei', p2 = echtWaar(), ...rest) {
	// console.log(arguments);
	// console.log(rest);
	console.log('hallo vanuit test met params', p1, p2, rest);
}

function echtWaar() {
	return 99;
}

let func = function() {
    console.log('gewone func');

};
func();

let arrowFunc = () => {
    console.log('arrow func');
};
arrowFunc();
console.log(arrowFunc.toString());

let arrowFunc2 = arg => {
    console.log('arrow func');
};
let arrowFunc3 = () => 14;

// waarom arrow function?
// - korter
// - geen arguments ...rest
// - new
// - this
// - geen inheritance shizzle



// overloading bestaat niet in JS.

// Angular
// route guard => route guard function
// route resolver => route resolver function
// http interceptor => http interceptor function

// React 16 => 18 functions

