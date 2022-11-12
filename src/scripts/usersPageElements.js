const header = document.querySelector(".header");
const usersFilter = document.querySelector(".users__filter");
const usersDatasTable = document.querySelector(".users__datas-table");
const pagination = document.querySelector(".pagination");
const paginationBtn = document.querySelector(".pagination__list-btn");
const footer = document.querySelector(".footer");


header.addEventListener("click", () =>{
    console.log("you clicked on header section:", header);
})

usersFilter.addEventListener("click", () =>{
    console.log("you clicked on users filter:", usersFilter);
})

usersDatasTable.addEventListener("click", () =>{
    console.log("you clicked on users datas table:", usersDatasTable);
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