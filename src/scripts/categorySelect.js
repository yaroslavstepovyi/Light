const filterSearchSelect = document.querySelectorAll(".filter__search select");
const filterSearchOption = document.querySelector(".filter__search-option");
const usersFilterSearchSelect = document.querySelectorAll(".users__filter__search select");

//Page Games, saves select - options:

const handleFilterSearchChange = (option) =>{
    console.log("option :=", option.target.value);
}

filterSearchSelect.forEach((option) => {
    option.addEventListener("click", handleFilterSearchChange);
});

//Page Users: saves select - options:

usersFilterSearchSelect.forEach((option) => {
    option.addEventListener("click", handleFilterSearchChange);
});