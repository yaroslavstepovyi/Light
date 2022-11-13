const paginationListBtn = document.querySelectorAll(".pagination__list-btn");

const handleListBtnClick = (btn) =>{
    console.log("btn", btn.dataset.page);
}

paginationListBtn.forEach( (btn) => {
    btn.addEventListener("click", () => handleListBtnClick(btn));
})