const usersBtnDots = document.querySelectorAll(".users__btn-dots");
const role = document.querySelector(".role");

const showHide = () => {
        if (role.style.display === "none"){
                role.style.display = "flex";
        }else{
                role.style.display = "none";
        }       
}
