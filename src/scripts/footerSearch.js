const footerSearchEnter = document.querySelector(".footer__search__enter-box");
const footerSearchBtn = document.querySelector(".footer__search__btn");

const handleEnterBoxChange = (email) =>{
    email.preventDefault();
    const emailSaved = email.target.value;
    console.log("email:=", emailSaved);
}

footerSearchEnter.addEventListener("change", handleEnterBoxChange);


const handleSearchSaved = () =>{
    console.log("startClicked");
}

footerSearchBtn.addEventListener("click", handleSearchSaved);
