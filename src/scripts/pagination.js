let arrayPage = ["HTML", "CSS", "HTTP", "JavaScript", "Web APIs", "SVG", "WebGL", "MathML","angularj", "asp.net", "backbonejs", "bootstrap", "coffeescript", "extjs", "expressjs", "restful", "react", "redux","vue","node.js"]
const pagList = document.querySelectorAll('.pagination');
const showList = document.querySelectorAll('.pagination__list');

function paginationBtn(arr,size = 5){
	let btn = '';
	
	pagList.forEach((elem,i) => {
		for(let i = 0; i < arr.length/size;i++){
			btn += `<button class='pagination__list-btn'>${i + 1}</button>`
		}
		elem.innerHTML = btn;
	});
}

paginationBtn(arrayPage);
const btnPag = document.querySelectorAll('.pagination__list-btn');

function smartList(page,size = 5){
	let arrayList = [];
	arrayList = arrayPage.slice().splice(page*size,size);
	showList.forEach((elem,i) => {
		let item = '';
		for(let i = 0; i < arrayList.length; i++){
			item += `<div class='list__item'>${arrayList[i]}</div>`
		}
		elem.innerHTML = item;
	})
	btnPag[0].classList.add('pagination__btn-active');
}

function addClass(btnElem, prevBtn){
	prevBtn.forEach(elem => elem.classList.remove('pagination__btn-active'));
	btnElem.classList.add('pagination__btn-active');
}

btnPag.forEach((elem,i) => {
	elem.addEventListener('click', () => {smartList(i); addClass(elem,btnPag);});
});

smartList(0);