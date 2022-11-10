const adding = document.querySelector(".adding");
const filterSearchBtn = document.querySelector(".filter__search-btn");
const backgroundBlur = document.querySelector(".background-blur");

//Background blur show/hide:

filterSearchBtn.addEventListener  ("click", function () {
    adding.classList.remove("hidden");
    backgroundBlur.classList.remove("hidden-background-blur");
});

backgroundBlur.addEventListener ("click", function () {
    adding.classList.add("hidden");
    backgroundBlur.classList.add("hidden-background-blur");
});