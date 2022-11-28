import { CARDS } from "../mocks/cards.js";

const initialCards = [...CARDS];
const addingFormBtn = document.querySelector(".adding__form-btn");
const addingName = document.getElementById("adding-name");
const addingDescription = document.getElementById("adding-description");
const addingReview = document.getElementById("adding-review");
const addingImage = document.getElementById("adding-image");
const addingModal = document.querySelector(".adding");
const backgroundBlur = document.querySelector(".background-blur");
const cardsList = document.querySelector(".content__grid__list");
const filterSearchBoxView = document.querySelector(".filter__search-box-view");
const resetButton = document.querySelector(".reset-button");
const selectId = document.getElementById("select");
const gameDialog = document.querySelector(".game-dialog");


//close game dialog:
const closeGameDialog = () =>{
    gameDialog.classList.add("hidden");
}

//render game card:
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
                <h3 class="user-name">${card.userName}</h3>
                <span class="user-review">${card.userReview}</span>
            </div>
        </div>
    `;

    console.log(card.img);

    liElement.addEventListener("click", () => handleClickCard(card));

    return liElement;
}

//render game card list:
const renderList = (element, list) => {
    const divElement = document.createElement("div");
    

    const completeDivElement = list.reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));

        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

const resetInputsField = () =>{
    addingName.value = "";
    addingDescription.value="";
    addingReview.value="";
    addingImage.value="";
}

const handleAddNewGame = (e) =>{
    e.preventDefault();
    
    const addingName = document.getElementById("adding-name").value;
    const addingDescription = document.getElementById("adding-description").value;
    const addingReview = document.getElementById("adding-review").value;
    const addingImage = document.getElementById("adding-image").value;
    
    const card = CARDS.find((card) => card.userName === addingName && card.userReview === addingReview && card.gameDescription === addingDescription && card.img === addingImage);
    
    if(card){
        addingModal.classList.add("hidden");
        backgroundBlur.classList.add("hidden-background-blur");

        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        renderList(cardsList, cards);
        if(!cards.length){
            return localStorage.setItem("cards", JSON.stringify([{name: addingName, description: addingDescription, review: addingReview, img: addingImage}]));
        }

        cards.push({name: addingName, description: addingDescription, review: addingReview, img: addingImage});
        localStorage.setItem("cards", JSON.stringify(cards));

        resetInputsField();
    }else{
        alert("Such game doesn't exist");
    }
    
}

addingFormBtn.addEventListener("click", handleAddNewGame);


const handleClickBackground = () =>{
    resetInputsField();
    closeGameDialog();
} 

backgroundBlur.addEventListener("click", handleClickBackground);

//render card dialog:
const handleClickCard = (card) =>{
    gameDialog.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden-background-blur");
  
    document.querySelector(".game-dialog__img").src = `../../Assets/images/Games/${card.img}.png`;
    document.querySelector(".game-dialog__game-name").innerHTML = card.gameName;
    document.querySelector(".game-dialog__game-description").innerHTML = card.gameDescription;
    document.querySelector(".game-dialog__user-name").innerHTML = card.userName;
    document.querySelector(".game-dialog__user-review").innerHTML = card.userReview;
}

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

const keepCardsInLocalStorage = () =>{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
   if(cards){
    renderList(cardsList, cards, "content__list-cards");
   }
} 

window.addEventListener("DOMContentLoaded", () =>{
    keepCardsInLocalStorage();
});