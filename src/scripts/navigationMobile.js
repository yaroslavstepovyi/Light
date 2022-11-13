const headerNavMobile = document.querySelector(".header__nav-mobile");
const elementBody = document.querySelector("body");

const toggleNavigBtn = () => {
    if (headerNavMobile.style.display === "none")
    {
        headerNavMobile.style.display = "flex";
        elementBody.style.overflow = "hidden";
    }else {
        headerNavMobile.style.display = "none";
        elementBody.style.overflow = "";
    }

    console.log("NavigationBtnClicked");
};

headerNavMobile.addEventListener("click", toggleNavigBtn)










