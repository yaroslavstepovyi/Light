export const role = document.querySelector(".role");
export const usersBtnDots = document.querySelectorAll(".users__btn-dots");

export const handleBtnDotsClick = (btn) =>{
        if (role.style.display === "none"){
                role.style.display = "flex";
        }else{
                role.style.display = "none";
        }  

        console.log("handleBtnDotsClick", btn.id);

}

usersBtnDots.forEach((btn) => {
        btn.addEventListener("click", () => handleBtnDotsClick(btn))
})