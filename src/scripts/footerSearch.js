const footerSearchEnter = document.querySelector(".footer__search__enter-box");
const footerSearchBtn = document.querySelector(".footer__search__btn");

const handleSearchSaved = (e) =>{    
    console.log("Letter was sent on your Email:", footerSearchEnter.value)
}

footerSearchBtn.addEventListener("click", handleSearchSaved);
