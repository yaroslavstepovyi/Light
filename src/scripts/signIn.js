const elementBody = document.querySelector("body");
const signIn = document.querySelector(".sign-in");
const headerNavBtn = document.querySelector(".header__nav-btn");
const backgroundBlur = document.querySelector(".background-blur");

//Background blur show/hide:

headerNavBtn.addEventListener  ("click", () => {
    signIn.classList.toggle("hidden");
    backgroundBlur.classList.toggle("hidden-background-blur");
    elementBody.style.overflow = "hidden";
    console.log("signInClicked");
});

backgroundBlur.addEventListener ("click", () => {
    signIn.classList.add("hidden");
    backgroundBlur.classList.add("hidden-background-blur");
    elementBody.style.overflow = "";
    console.log("blurBackgoundClicked");
});