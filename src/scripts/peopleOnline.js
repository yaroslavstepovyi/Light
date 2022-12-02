import { USERS } from "../mocks/users.js"

const heroLeftIcon = document.querySelector(".hero__left-icons");

const renderItem = (user) =>{
    const liElement = document.createElement("li");
    liElement.classList.add("hero__left-icon");

    liElement.innerHTML = `
    <img
    class="hero__left-icon-img"
    src="./src/Assets/icons/${user.img}.svg"
    alt="${user.name}"/>
    `;

    return liElement;
}

const renderList = (element, list, className) =>{
    const divElement = document.createElement("div");

    const completeDivElement = list.slice(0, 4).reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));
        divElement.classList.add(className);
        divElement.style.display = "flex";
        divElement.style.marginLeft = "-5px";
        divElement.style.paddingLeft = "5px";
        

        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

renderList(heroLeftIcon, USERS, "hero__left-user-list");

