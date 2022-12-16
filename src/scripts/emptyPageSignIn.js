const contentEmptyGamesSignInBtn = document.querySelector(".content__empty-games__sign-in-btn");
const signIn = document.querySelector(".sign-in");
const backgroundBlur = document.querySelector(".background-blur");
const elementBody = document.querySelector("body");

const handleHeaderNavBtnClick = () =>{
    signIn.classList.toggle("hidden");
    backgroundBlur.classList.toggle("hidden-background-blur");
    elementBody.style.overflow = "hidden";
}

contentEmptyGamesSignInBtn.addEventListener("click", handleHeaderNavBtnClick);
