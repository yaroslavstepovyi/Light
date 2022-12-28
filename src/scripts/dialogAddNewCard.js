//TODO: handleNotesOnPageWith change notesOnPage = 12, test version
import { DEFAULTGAMES } from "../mocks/defaultGames.js";

const body = document.querySelector("body");
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
const authedUser = JSON.parse(localStorage.getItem('user')) || {name: "user name"};

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
    body.style.overflow = "hidden";

    document.querySelector(".game-dialog__img").src = `../../Assets/images/Games/${card.img}.png`;
    document.querySelector(".game-dialog__game-name").innerHTML = card.name;
    document.querySelector(".game-dialog__game-description").innerHTML = card.description;
    document.querySelector(".game-dialog__user-name").innerHTML = authedUser.name;
    document.querySelector(".game-dialog__user-review").innerHTML = card.review;

    document.querySelector(".game-dialog__game-name").style.fontSize = "18px";
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

const contentGridList = document.querySelector(".content__grid__list");
const paginationListBtns = document.querySelector(".pagination__list-btns");
let state = {
    "notesOnPage": 2,
    "page": 1,
    "displayPages": 5,
}

const handleNotesOnPageWith = () =>{
    if(body.clientWidth <= 1312){
        state.notesOnPage = 12;
    }
    if(body.clientWidth <= 1200){
        state.notesOnPage = 9;
    }
    if(body.clientWidth <= 921){
        state.notesOnPage = 6;
    }
    if(body.clientWidth < 576){
        state.notesOnPage = 4;
    }
}

//TODO: add < > buttons 
const pagination = () =>{
    
    // handleNotesOnPageWith();
    
    let active;    
    let items = [];
    const amountElementOnPage = Math.ceil(JSON.parse(localStorage.getItem('cards')).length / state.notesOnPage);

    let maxLeft = state.page - Math.floor(state.displayPages / 2);
    let maxRight = state.page + Math.floor(state.displayPages / 2);
    
    if(maxLeft < 1){
        maxLeft = 1;
        maxRight = state.displayPages;
    }
    
    if(maxRight > amountElementOnPage){
        maxLeft = amountElementOnPage - (state.displayPages - 1);
        maxRight = amountElementOnPage;
        
        if(maxLeft < 1){
            maxLeft = 1;
        }
    }
    
    console.log("maxleft", maxLeft);
    console.log("maxright", maxRight);

    for(let i = maxLeft; i <= maxRight; i++ ){
        const li = document.createElement("li");
        li.classList.add("pagination__list-btn");
        li.classList.add("hidden");

        if(JSON.parse(localStorage.getItem('cards')).length > state.notesOnPage){
            li.classList.remove("hidden");
        }

        const button = document.createElement("button");
        button.classList.add("pagination__list-btn-page");

        li.appendChild(button);
        button.innerHTML = i;
        paginationListBtns.appendChild(li);
        items.push(button);
    }

    function showPage(elem) {
        if(active){
            active.classList.remove("active");
        }
        
        active = elem;
        elem.classList.add("active");
        
        let pageNum = +elem.innerHTML;
        let start = (pageNum - 1) * state.notesOnPage;
        let end = start + state.notesOnPage;
        let notes = JSON.parse(localStorage.getItem('cards')).slice(start, end);
        
        contentGridList.innerHTML = "";
        
        renderList(cardsList, notes); 
    } 

    showPage(items[0]);

    for(let item of items){
        item.addEventListener("click", function(){
            state.page = +this.innerHTML;
            console.log("state.page=", state.page);
            showPage(this);
        })
    }       
}

const handleAddNewGame = (e) =>{
    e.preventDefault();

    const paginationListBtn = document.querySelectorAll(".pagination__list-btn");
    const contentDivItem = document.querySelector(".content__div-item");
    const addingName = document.getElementById("adding-name").value;
    const addingDescription = document.getElementById("adding-description").value;
    const addingReview = document.getElementById("adding-review").value;
    const addingImage = document.getElementById("adding-image").value;

    if(addingImage === "default"){
        alert("choose the image from the list");
        return;
    }
    
    const addedCards = [{name: addingName, description: addingDescription, review: addingReview, img: addingImage, date: Date.now()}];

    for(let i = 0; i < cards.length; i++){
        if(cards[i].img === addingImage){
            alert("such game already exist");
            return;
        }
    }

    cards.push({name: addingName, description: addingDescription, review: addingReview, img: addingImage, date: Date.now()});
    localStorage.setItem("cards", JSON.stringify(cards));
    
    renderList(contentDivItem, addedCards);
    closeGameDialog();

    pagination();

    for(let i = 0; i <= paginationListBtn.length; i++){
        paginationListBtn[i].remove();
    }
}
addingFormBtn.addEventListener("click", handleAddNewGame);


paginationList.style.display = "none";
contentEmptyGames.style.display = "flex";
filter.style.display = "none";

const checkEmptyGames = () =>{
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if(loggedUser){
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

    renderList(cardsList, JSON.parse(localStorage.getItem("cards")).slice(0, notesOnPage));
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
        renderList(cardsList, sortedGames.slice(0, notesOnPage));

        resetButton.style.display = "block";
        resetButton.addEventListener("click", handleBtnReset);
}

filterSearchBoxView.addEventListener("change", handleSortCards);

function displayDefaultGames () {
    if(cards.length === 0){
        cards.push(DEFAULTGAMES);
        localStorage.setItem("cards", JSON.stringify(cards));
    }
}

window.addEventListener('load', function() {
    displayDefaultGames();
});

window.addEventListener("DOMContentLoaded", () =>{
    displayDefaultGames();
    checkEmptyGames();
    pagination();
});

