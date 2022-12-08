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
const paginationList = document.querySelector(".pagination__list");
const contentEmptyGames = document.querySelector(".content__empty-games");
const filter = document.querySelector(".filter");

const cards = JSON.parse(localStorage.getItem("cards")) || [];
const authedUser = JSON.parse(localStorage.getItem('user'));
const initialCards = [...cards];


//render game card:
const renderItem = (card) =>{
    const liElement = document.createElement("li");
    liElement.classList.add("content__grid-item");
    liElement.setAttribute("id", card.id);
    liElement.innerHTML = `
        <img
            class="content__grid-item-img resize-photo"
            src="../../Assets/images/Games/${card.img}.png"
            alt=${card.name}
        />
        <div class="content__grid-item-description">
            <div class="content__grid-item-description-left">
                <h3 class="game-name">${card.name}</h3>
                <span class="game-description">${card.description}</span>
            </div>
            <div class="content__grid-item-description-right">
                <h3 class="user-name">${authedUser.name}</h3>
                <span class="user-review">${card.review}</span>
            </div>
        </div>
    `;


    liElement.addEventListener("click", () => handleClickCard(card));

    return liElement;
}

//render game card list:
export const renderList = (element, list) => {
    const divElement = document.createElement("div");
    divElement.classList.add("content__div-item");
    divElement.style.display = "flex";
    divElement.style.justifyContent = "center";
    divElement.style.flexWrap = "wrap";
    divElement.style.gap = "40px";

    const completeDivElement = list.reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));

        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

//render card dialog:
const handleClickCard = (card) =>{
    gameDialog.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden-background-blur");
  
    document.querySelector(".game-dialog__img").src = `../../Assets/images/Games/${card.img}.png`;
    document.querySelector(".game-dialog__game-name").innerHTML = card.name;
    document.querySelector(".game-dialog__game-description").innerHTML = card.description;
    document.querySelector(".game-dialog__user-name").innerHTML = authedUser.name;
    document.querySelector(".game-dialog__user-review").innerHTML = card.review;
}

const resetInputsField = () =>{
    addingName.value = "";
    addingDescription.value="";
    addingReview.value="";
    addingImage.value="";
}

const closeGameDialog = () =>{
    addingModal.classList.add("hidden");
    gameDialog.classList.add("hidden");
    backgroundBlur.classList.add("hidden-background-blur");
    resetInputsField();
}

const handleAddNewGame = (e) =>{
    e.preventDefault();
    const contentDivItem = document.querySelector(".content__div-item");
    
    const addingName = document.getElementById("adding-name").value;
    const addingDescription = document.getElementById("adding-description").value;
    const addingReview = document.getElementById("adding-review").value;
    const addingImage = document.getElementById("adding-image").value;
    
    const addedCards = [{name: addingName, description: addingDescription, review: addingReview, img: addingImage, date: Date.now()}];

    if(addingImage === "default"){
        alert("Select game image");
        return;
    } 

    for(let i = 0; i < cards.length; i++){
        if(cards[i].img === addingImage){
            alert("such game already added");
            return;
        }
    }

    cards.push({name: addingName, description: addingDescription, review: addingReview, img: addingImage, date: Date.now()});
    localStorage.setItem("cards", JSON.stringify(cards));


    renderList(contentDivItem, addedCards);
    closeGameDialog();
}
addingFormBtn.addEventListener("click", handleAddNewGame);

// renderList(cardsList, cards);

paginationList.style.display = "none";
contentEmptyGames.style.display = "flex";
filter.style.display = "none";

const checkEmptyGames = () =>{
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    if(loggedUser != null){
        paginationList.style.display = "flex";
        contentEmptyGames.style.display = "none";
        filter.style.display = "block";
    }
}
// checkEmptyGames();


const handleClickBackground = () =>{
    resetInputsField();
    closeGameDialog();
} 

backgroundBlur.addEventListener("click", handleClickBackground);

//default cards:
const handleBtnReset = () =>{
    cardsList.innerHTML = "";
    resetButton.style.display = "none";
    selectId.value = "default";

    renderList(cardsList, initialCards, "content__grid");
}

//sort cards by date:
const handleSortCards = (e) =>{
    cardsList.innerHTML = "";
    const sortType = e.target.value;
    let sortedGames = null;

//sort:
    switch (sortType) {
        case "new-first": 
            sortedGames = cards.sort((a, b) => a.date - b.date);

            break;
        case "new-second":
            sortedGames = cards.sort((a, b) => b.date - a.date);
            break;        
        }

        renderList(cardsList, sortedGames);
        resetButton.style.display = "block";
        resetButton.addEventListener("click", handleBtnReset);
}

filterSearchBoxView.addEventListener("change", handleSortCards);

window.addEventListener("DOMContentLoaded", () =>{
    renderList(cardsList, cards, "content__grid");
    checkEmptyGames();
});