const experienceContentBtn = document.querySelector(".experience__content-btn");
const heroLeftBtn = document.querySelector(".hero__left-btn");
const heroLeftBtnMail = document.querySelector(".hero__left-btn-mail")

const handlegetItNowClicked = () =>{
    let newWindow = window.open('https://store.steampowered.com/', "_blank");
    newWindow.opener = null;
    console.log("getItNowClicked");
}

experienceContentBtn.addEventListener("click", handlegetItNowClicked);

const handleHeroLeftBtnClick = () =>{
    heroLeftBtnMail.setAttribute("href", "mailto:yaroslavstepovyi@gmail.com?Hello, my name is = Subject = new country day");
}

heroLeftBtn.addEventListener("click", handleHeroLeftBtnClick);



