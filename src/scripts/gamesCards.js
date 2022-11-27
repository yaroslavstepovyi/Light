import { CARDS } from '../mocks/cards.js';

const initialCards = [...CARDS];
const cardsList = document.querySelector(".content__grid__list");
const filterSearchBoxView = document.querySelector(".filter__search-box-view");
const resetButton = document.querySelector(".reset-button");
const selectId = document.getElementById("select");


//render cards:

const renderItem = (card) =>{
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
            <h3 class="user-name">${card["user"]["userName"]}</h3>
            <span class="user-review">${card["user"]["userReview"]}</span>
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

//default cards:

const handleBtnReset = () =>{
    cardsList.innerHTML = "";
    resetButton.style.display = "none";
    selectId.value = "default";

    renderList(cardsList, initialCards, "content__grid");
}

//sort cards:

const handleSortCards = (e) =>{
    cardsList.innerHTML = "";
    const sortType = e.target.value;
    let sortedGames = null;

//sort:

    switch (sortType) {
        case "new-first": 
            resetButton.style.display = "block";
            sortedGames = CARDS.sort((a, b) => a.date - b.date);
            break;
        case "new-second":
            resetButton.style.display = "block";
            sortedGames = CARDS.sort((a, b) => b.date - a.date);
            break;        
        }

        renderList(cardsList, sortedGames, "content__grid");
        resetButton.addEventListener("click", handleBtnReset);
    }

filterSearchBoxView.addEventListener("change", handleSortCards);

