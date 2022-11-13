const role = document.querySelector(".role");
const usersBtnDots = document.querySelectorAll(".users__btn-dots");

const showHide = () => {
        if (role.style.display === "none"){
                role.style.display = "flex";
        }else{
                role.style.display = "none";
        }       
}

const handleBtnDotsClick = (btn) =>{
        console.log("handleBtnDotsClick", btn)
}

usersBtnDots.forEach((btn) => {
        btn.addEventListener("click", () => handleBtnDotsClick(btn))
})