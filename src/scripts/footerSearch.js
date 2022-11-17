const footerSearchEnter = document.querySelector(".footer__search__enter-box");
const footerSearchBtn = document.querySelector(".footer__search__btn");
let emailSaved = "example@mail.com";

const handleEnterBoxChange = (email) =>{
    email.preventDefault();
    emailSaved = email.target.value;
    console.log("email:=", emailSaved);
}

footerSearchEnter.addEventListener("change", handleEnterBoxChange);


const handleSearchSaved = () =>{
    console.log("startClicked");
}

footerSearchBtn.addEventListener("click", handleSearchSaved);
