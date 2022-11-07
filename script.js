const headerNavMobile = document.querySelector(".header__nav-mobile");
const headerLinks = document.querySelector(".header__links");

const toggleNavigBtn = () => {
    if (headerNavMobile.style.display === "none")
    {
        headerNavMobile.style.display = "flex";
    }else {
        headerNavMobile.style.display = "none";
    }
}