const contentGridItem = document.querySelector(".content__grid-item");
const content = document.querySelector(".content");
const filter = document.querySelector(".filter");
const header = document.querySelector(".header");
const pagination = document.querySelector(".pagination");
const paginationBtn = document.querySelector(".pagination__list-btn");
const footer = document.querySelector(".footer");

contentGridItem.addEventListener("click", () =>{
    console.log("you clicked on car game:", contentGridItem);
})

content.addEventListener("click", () =>{
    console.log("you clicked on content section:", content);
})

filter.addEventListener("click", () =>{
    console.log("you clicked on filter section:", filter);
})

header.addEventListener("click", () =>{
    console.log("you clicked on header section:", header);
})

pagination.addEventListener("click", () =>{
    console.log("you clicked on pagination section:", pagination);
})

paginationBtn.addEventListener("click", () =>{
    console.log("you clicked on pagination button:", paginationBtn);
})

footer.addEventListener("click", () =>{
    console.log("clicked footer:",footer);
})