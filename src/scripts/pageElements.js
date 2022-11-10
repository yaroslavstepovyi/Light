const logo = document.querySelector(".header__logo");
const heroLeftText = document.querySelector(".hero__left-text");
const videoContentImg = document.querySelector(".video__content-img");

//TODO doesn't work with .class <attribute> <attribute>:
// const commentStarsItemName = document.querySelector("comments__stars-item-name");

//logo element:
logo.addEventListener("click", (elem) => {
    elem.preventDefault();
    console.log("logo was clicked:=", elem)
})

//video content img:
videoContentImg.addEventListener("click", () => {
    console.log("video img", videoContentImg)
})

//comments items names:
// commentStarsItemName.addEventListener("click", () => {
//     console.log("comments stars items");
// })


