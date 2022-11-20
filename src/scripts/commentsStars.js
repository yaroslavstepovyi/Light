import { COMMENTS } from "../mocks/comments.js";


const commentsStarsItem = document.querySelectorAll(".comments__stars-item");
const commentsList = document.querySelector(".comments__list");

const handleStarClicked = (star) =>{
    console.log("star", star.dataset.person);
}

commentsStarsItem.forEach((star) =>{
    star.addEventListener("click", () => handleStarClicked(star));
})

const renderItem = (comment) =>{
    const liElement = document.createElement("li");
    liElement.classList.add("comments__stars-item");

    liElement.innerHTML = `
        <h3 class="comments__stars-item-headline">
        <span>${comment.genre}</span> star
        </h3>
        <p class="comments__stars-item-par">${comment.comment}</p>
        <div class="comments__stars-item-names">
        <img src="./SRC/Assets/icons/${comment.img}.svg" alt=${comment.alt} />
        <div>
            <p class="comments__stars-item-name">${comment.userName}</p>
            <a class="comments__stars-item-name">@${comment.userNickName}</a>
        </div>
        </div>
    `;

    return liElement;
}

const renderList = (element, list, className) =>{
    const divElement = document.createElement("div");

    const completeDivElement = list.reduce((divElement, item) =>{
        divElement.appendChild(renderItem(item));
        divElement.classList.add(className);

        return divElement;
    }, divElement);

    element.appendChild(completeDivElement);
}

renderList(commentsList, COMMENTS, "comments__stars-list");