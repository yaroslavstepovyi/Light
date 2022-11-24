const header = document.querySelector(".header");
const headerRadius = document.querySelector(".header__radius");

const handleScrollHeader = () =>{
    const scrollPos = window.scrollY;
    console.log(scrollPos);

    if ( scrollPos > 0) {
        header.style.background = "rgba(14, 14, 14, 1)";
        headerRadius.style.display = "none";
    }else{
        headerRadius.style.display = "";
        header.style.background = "";
    }
}

window.addEventListener("scroll", handleScrollHeader);