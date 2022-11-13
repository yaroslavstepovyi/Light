const contentGridItem = document.querySelectorAll(".content__grid-item");

const handleCardClick = (card) =>{
    console.log("card", card.dataset.game);
}

contentGridItem.forEach((card) => {
    card.addEventListener("click", () => handleCardClick(card))
});

