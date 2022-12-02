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
    heroLeftBtnMail.setAttribute("href", "mailto:yaroslavstepovyi@gmail.com?&subject= VR Games &body=Good afternoon, with this letter we are pleased to inform you about our new product, where you can add an exciting game of your choice. We have all the new products you're sure to love");
    
}

heroLeftBtn.addEventListener("click", handleHeroLeftBtnClick);



