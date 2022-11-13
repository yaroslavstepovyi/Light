const signIn = document.querySelector(".sign-in");
const headerNavBtn = document.querySelector(".header__nav-btn");
const backgroundBlur = document.querySelector(".background-blur");

//Background blur show/hide:

headerNavBtn.addEventListener  ("click", () => {
    signIn.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden-background-blur");
    console.log("signInClicked");
});

backgroundBlur.addEventListener ("click", () => {
    signIn.classList.add("hidden");
    backgroundBlur.classList.add("hidden-background-blur");
    console.log("blurBackgoundClicked");
});