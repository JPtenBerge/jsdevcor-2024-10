


// - geen/weinig feedback als je iets fout doet
// - geen stricte eisen
// - als jij andermans code moet gaan onderhouden, dan wil je hulp hebben
//   - autocompletion, syntax errors
// - JS is te flexibel, te dynamisch voor grotere projecten

const func = (options) => {
    // options.
};

let obj = { dinges: 24, y: 'bla' };
obj.dinges = 9999;

delete obj.y;
console.log(obj);
// obj.y

let prop = 'x'; // rename/refactor
console.log(obj.dinges);
console.log(obj['dinges']);
console.log(obj[prop]);

// fetch<Product[]>('api/product')