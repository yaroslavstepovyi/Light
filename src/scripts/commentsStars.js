const commentsStarsItem = document.querySelectorAll(".comments__stars-item");

const handleStarClicked = (star) =>{
    console.log("star", star);
}

commentsStarsItem.forEach((star) =>{
    star.addEventListener("click", () => handleStarClicked(star));
})