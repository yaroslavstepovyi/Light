const headerLogo = document.querySelector(".header__logo");

const handleLogoClick = (logo) =>{
    // logo.preventDefault();
    console.log("logoClick:", logo.target);
}

headerLogo.addEventListener("click", handleLogoClick);