const role = document.querySelector(".role");
const usersBtnDots = document.querySelectorAll(".users__btn-dots");

export const handleBtnDotsClick = () =>{
        if (role.style.display === "none"){
                role.style.display = "flex";
        }else{             
                role.style.display = "none";
        }  
}

usersBtnDots.forEach((btn) => {
        btn.addEventListener("click", handleBtnDotsClick)
})