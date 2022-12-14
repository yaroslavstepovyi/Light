import { USERS } from "../mocks/users.js";

const elementBody = document.querySelector("body");
const signIn = document.querySelector(".sign-in");
const signInFormBtn = document.querySelector(".sign-in__form-btn");
const authedHeader = document.querySelector(".authed__header");
const headerNavBtn = document.querySelector(".header__nav-btn");
const backgroundBlur = document.querySelector(".background-blur");
const logOutBtn = document.querySelector(".log-out-btn");
const userMenu = document.querySelector(".authed__header__nav-menu-wrap");
const signInEmail = document.getElementById("sign-in-email");
const signInPassword = document.getElementById("sign-in-password");
const paginationList = document.querySelector(".pagination__list");
const contentEmptyGames = document.querySelector(".content__empty-games");
const filter = document.querySelector(".filter");
const contentGridList = document.querySelector(".content__grid__list");
const headerNavBtnMobile = document.querySelector(".header__nav-btn-mobile");
const headerNavBtnMobileLogOut = document.querySelector(".header__nav-btn-mobile__log-out");


//show and hide empty games, filter and pagination
const checkEmptyGames = () =>{
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    const gamesInLocalStorage = JSON.parse(localStorage.getItem("cards"));

    if(loggedUser != null){
        paginationList.style.display = "flex";
        contentEmptyGames.style.display = "none";
        filter.style.display = "block";
        contentGridList.style.display = "flex";
    }

    if(!loggedUser || loggedUser === null && gamesInLocalStorage != null){
        paginationList.style.display = "none";
        contentEmptyGames.style.display = "flex";
        filter.style.display = "none";
        contentGridList.style.display = "none";
    } 
}

const changeHeader = () =>{
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
        headerNavBtnMobileLogOut.classList.remove("hidden");
        authedHeader.style.display = "flex";
        headerNavBtn.style.display = "none";          
        headerNavBtnMobile.style.display = "none";          
    }
    else{
        headerNavBtnMobileLogOut.classList.add("hidden");
        authedHeader.style.display = "none";
        headerNavBtn.style.display = "flex"; 
        headerNavBtnMobile.style.display = "flex"; 
    }
}

const resetInputsField = () =>{
    signInEmail.value = "";
    signInPassword.value="";
}

const checkInputPassword = () =>{
    if(signInPassword.value.length < 6){
        alert("password is requiered minimum 6 symbols");
    }
}

const isUserSignIn = () =>{
    const email = document.getElementById("sign-in-email").value;
    const password = document.getElementById("sign-in-password").value;
    const user = USERS.find((user) => user.email === email && user.password === password);

    if(user){
        localStorage.setItem("user", JSON.stringify(user));
        elementBody.style.overflow = "";
        signIn.classList.add("hidden");
        backgroundBlur.classList.add("hidden-background-blur");
        resetInputsField();
        changeHeader();
    }else{
        alert("invalid email or password");
        checkInputPassword();
    }
}

const handleSignInFormBtn = () =>{
    isUserSignIn();
    checkEmptyGames();
}

signInFormBtn.addEventListener("click", handleSignInFormBtn);

const handleLogOut = () =>{
    userMenu.classList.add("hidden");
    localStorage.setItem("user", null);
    changeHeader();
    checkEmptyGames();
}

logOutBtn.addEventListener("click", handleLogOut);

const handleHeaderNavBtnMobileLogOut = () =>{
    localStorage.setItem("user", null);
    headerNavBtnMobileLogOut.classList.add("hidden");
    headerNavBtnMobile.style.display = "flex"; 
}

headerNavBtnMobileLogOut.addEventListener("click", handleHeaderNavBtnMobileLogOut);

window.addEventListener("DOMContentLoaded", () =>{
    changeHeader();
    checkEmptyGames();
});
