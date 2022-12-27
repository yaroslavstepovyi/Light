const header = document.querySelector(".header");
const headerRadius = document.querySelector(".header__radius");

const handleScrollHeader = () =>{
    const scrollPos = window.scrollY;

    if ( scrollPos > 22) {
        header.style.background = "rgba(14, 14, 14, 1)";
        header.style.borderRadius = "35px";
        header.style.border = "1px solid #bc3cd8";
        headerRadius.style.display = "none";
    }else{
        header.style.background = "";
        header.style.borderRadius = "";
        header.style.border = "";
        headerRadius.style.display = "";
    }
}

window.addEventListener("scroll", handleScrollHeader);