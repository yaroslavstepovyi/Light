const headerNavMobile = document.querySelector(".header__nav-mobile");
const container = document.querySelector(".container");

const toggleNavigBtn = () => {
    if (headerNavMobile.style.display === "none")
    {
        headerNavMobile.style.display = "flex";
    }else {
        headerNavMobile.style.display = "none";
    }
}