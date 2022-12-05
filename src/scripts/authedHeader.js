const authedHeaderNavBtn = document.querySelector(".authed__header__nav-btn");
const authedHeaderNavMenuWrap = document.querySelector(".authed__header__nav-menu-wrap");
const backgroundTransparent = document.querySelector(".background-transparent");

const dialogAuthedHeader = () =>{
    authedHeaderNavMenuWrap.style.boxShadow = "0px 0px 10px #bc3cd8";    
    authedHeaderNavMenuWrap.style.right = "10px";    
    authedHeaderNavMenuWrap.style.zIndex = "100";    
}

dialogAuthedHeader();

//show and hide authorized user menu:
const handleAuthedHeaderNavBtnClick = () =>{
    authedHeaderNavMenuWrap.classList.toggle("hidden");
    backgroundTransparent.classList.remove("hidden");

    backgroundTransparent.addEventListener("click", () =>{
        authedHeaderNavMenuWrap.classList.add("hidden");
        backgroundTransparent.classList.add("hidden");
    });

}

authedHeaderNavBtn.addEventListener("click", handleAuthedHeaderNavBtnClick);