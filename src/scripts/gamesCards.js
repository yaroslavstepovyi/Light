import { CARDS } from '../mocks/cards.js';

const cardsList = document.querySelector(".content__grid__list")
const contentGridItem = document.querySelectorAll(".content__grid-item");

const handleCardClick = (card) =>{
    console.log("id", card.dataset.id);
}

contentGridItem.forEach((card) => {
    card.addEventListener("click", () => handleCardClick(card))
});

const renderItem = (card) =>{
    // console.log("card", card);
    const liElement = document.createElement("li");
    liElement.classList.add("content__grid-item");
    liElement.setAttribute("id", card.id);
    liElement.innerHTML = `
        <img
            class="content__grid-item-img resize-photo"
            src="../../Assets/images/Games/${card.img}.png"
            alt=${card.alt}
        />
        <div class="content__grid-item-description">
            <div class="content__grid-item-description-left">
            <h3 class="game-name">${card.gameName}</h3>
            <span class="game-description">${card.gameDescription}</span>
            </div>
            <div class="content__grid-item-description-right">
            <h3 class="user-name">${card.userName}</h3>
            <span class="user-review">${card.userReview}</span>
            </div>
        </div>
    `;

    return liElement;
}

const renderList = (element, list, className) => {
    const divElement = document.createElement("div");
    divElement.classList.add(className);
    

    const completeDivElement = list.reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));

        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

renderList(cardsList, CARDS, "content__grid");

// console.log("cardsList", cardsList)