const filterSearchBoxView = document.querySelector(".filter__search-box-view");
let sortType = "SortByDate";

const handleDateSelect = (e) =>{
    sortType = e.target.value;
    console.log("select:", sortType);
}

filterSearchBoxView.addEventListener("change", handleDateSelect);

