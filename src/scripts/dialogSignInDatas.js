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
const contentEmptyGames = document.querySelector(".content__empty-games");

const changeHeader = () =>{
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
        authedHeader.style.display = "flex";
        headerNavBtn.style.display = "none";  
    }
    else{
        authedHeader.style.display = "none";
        headerNavBtn.style.display = "flex"; 
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

const handleSignInFormBtn = (e) =>{
        e.preventDefault();
        isUserSignIn();
}

signInFormBtn.addEventListener("click", handleSignInFormBtn);

const handleLogOut = () =>{
    userMenu.classList.add("hidden");
    // contentEmptyGames.style.display = "flex";
    localStorage.setItem("user", null);
    changeHeader();
}

logOutBtn.addEventListener("click", handleLogOut);


window.addEventListener("DOMContentLoaded", () =>{
    changeHeader();
});