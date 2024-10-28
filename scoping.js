var i; // hoisting



let x = 'aaa'; // 2015-nu

// lexical scope
var y = 'aaa'; // 1996-nu


console.log('i voor for:', i);
for (i = 0; i < 5; i++) {
    console.log('i:', i);
}
console.log('i buiten for:', i);


const bla = 'hoi';
// bla = 'iets anders';

const config = { x: 24 };
config.x = 345678;
// config = {};

console.log(bla);
console.log(config);

function test() {
    qqq = 14;
    console.log('x in test:', qqq);
}
test();
console.log('x buiten test:', qqq);