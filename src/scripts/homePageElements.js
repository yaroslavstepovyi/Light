const logo = document.querySelector(".header__logo");
const heroLeftText = document.querySelector(".hero__left-text");
const videoContentImg = document.querySelector(".video__content-img");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const experience = document.querySelector(".experience");
const video = document.querySelector(".video");
const comments = document.querySelector(".comments");
const values = document.querySelector(".values");
const footer = document.querySelector(".footer");

//logo element:
logo.addEventListener("click", () => {
    preventDefault();
    console.log("logo:", logo);
})

//video content img:
videoContentImg.addEventListener("click", () => {
    console.log("video img", videoContentImg);
    return videoContentImg;
})

//header:

header.addEventListener("click", () =>{
    console.log("clicked header:", header);
    return header;
})

//hero:

hero.addEventListener("click", () =>{
    console.log("clicked hero:", hero);
})

//experience:

experience.addEventListener("click", () =>{
    console.log("clicked experience:", experience);
})

//video:

video.addEventListener("click", () =>{
    console.log("clicked video:", video);
})

//comments:

comments.addEventListener("click", () =>{
    console.log("clicked comments:", comments);
})

//values:

values.addEventListener("click", () =>{
    console.log("clicked values:", values);
})

//footer:

footer.addEventListener("click", () =>{
    console.log("clicked footer:", footer);
})


