import { BENEFITS } from "../mocks/benefits.js";

const valuesRight = document.querySelector(".values__right-benefits");

const renderItem = (benefit) =>{
    const divElement = document.createElement("div");
    divElement.classList.add("values__right-benefit");

    divElement.innerHTML = `
        <img
        src="./SRC/Assets/icons/${benefit.img}.svg"
        alt="${benefit.alt}"/>
        <p>${benefit.caption}</p>
    `;
   

    return divElement;
}

const renderList = (element, list) =>{
    const divElement = document.createElement("div");

    const completeDivElement = list.reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));
        divElement.style.display = "flex";
        divElement.style.flexWrap = "wrap";
        divElement.style.justifyContent = "space-between";
        divElement.style.width = "112px";
        //divElement.style.gap = "10px";
        

       
        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

renderList(valuesRight, BENEFITS);