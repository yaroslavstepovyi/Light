const paginationListBtn = document.querySelectorAll(".pagination__list-btn");

const handleListBtnClick = (btn) =>{
    console.log("btn", btn);
}

paginationListBtn.forEach( (btn) => {
    btn.addEventListener("click", () => handleListBtnClick(btn));
})