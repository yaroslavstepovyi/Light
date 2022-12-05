const elementBody = document.querySelector("body");
const signIn = document.querySelector(".sign-in");
const backgroundBlur = document.querySelector(".background-blur");
const headerNavBtn = document.querySelector(".header__nav-btn");

const handleHeaderNavBtnClick = () =>{
    signIn.classList.toggle("hidden");
    backgroundBlur.classList.toggle("hidden-background-blur");
    elementBody.style.overflow = "hidden";
}

headerNavBtn.addEventListener("click", handleHeaderNavBtnClick);

backgroundBlur.addEventListener ("click", () => {
    signIn.classList.add("hidden");
    backgroundBlur.classList.add("hidden");
    elementBody.style.overflow = "";
});

