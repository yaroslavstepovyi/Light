const authedHeaderNavBtn = document.querySelector(".authed__header__nav-btn");
const authedHeaderNavMenuWrap = document.querySelector(".authed__header__nav-menu-wrap")

//show and hide authorized user menu:

const handleAuthedHeaderNavBtnClick = () =>{
    console.log("show expand menu:");
    authedHeaderNavMenuWrap.classList.toggle("hidden");
}

authedHeaderNavBtn.addEventListener("click", handleAuthedHeaderNavBtnClick);