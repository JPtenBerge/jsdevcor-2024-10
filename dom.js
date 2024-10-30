// DOM manipulatie
// - Document Object Model
// - elementen aanmaken/verwijderen
// - attributen instellen/verwijderen
// - classes instellen

// const addTosti = () => {
// 	console.time();

//     // 1. oude, heel snel is, maar heel lomp in code
//     let newTr = document.createElement('tr');

//     let newTdDescription = document.createElement('td');
//     let descriptionTextNode = document.createTextNode('Oude kaas, pesto');
//     newTdDescription.appendChild(descriptionTextNode);
//     newTr.appendChild(newTdDescription);

//     let newTdPrice = document.createElement('td');
//     let priceTextNode = document.createTextNode('€ 5,20');
//     newTdPrice.appendChild(priceTextNode);
//     newTr.appendChild(newTdPrice);

//     let newTdPhoto = document.createElement('td');
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', 'https://www.chaupain.nl/wp-content/uploads/2018/12/Website-1240x500-zomerse-tosti-1.jpg');
//     newTdPhoto.appendChild(newImg);
//     newTr.appendChild(newTdPhoto);

//     document.querySelector('#tostis tbody').appendChild(newTr);
// 	console.timeEnd();
// };

// 2. oude, best wel traag is, behoorlijk lomp, security is mwoa, maar wel een stuk korter. alles wat niet in HTML staat, gaat verloren (event listeners)
// const addTosti = () => {
//     console.time();
// 	let tbody = document.querySelector('#tostis tbody');
// 	tbody.innerHTML += `<tr>
//             <td>Oude kaas, pesto</td>
//             <td>&euro; 5,30</td>
//             <td><img src="https://www.chaupain.nl/wp-content/uploads/2018/12/Website-1240x500-zomerse-tosti-1.jpg"></td>
//         </tr>
//     `;
//     console.timeEnd();
// };

// 3. nieuwe manier, behoorlijk snel, vrij elegant, iets langer dan #2
const addTosti = () => {
    console.time();
    let template = document.querySelector('#tosti-template').content;
    let clone = template.cloneNode(true);

    clone.querySelector('.description').textContent = 'Oude kaas, pesto';
    clone.querySelector('.prijs').textContent = '5,40';
    clone.querySelector('.photo').setAttribute('src', 'https://www.chaupain.nl/wp-content/uploads/2018/12/Website-1240x500-zomerse-tosti-1.jpg');

    document.querySelector('#tostis tbody').appendChild(clone);
    console.timeEnd();
};

// leesbaarheid/onderhoudbaar/unittestbaarheid

// document.querySelector('form').addEventListener('submit', event => {
// 	event.preventDefault();
// 	event.stopPropagation();

// });