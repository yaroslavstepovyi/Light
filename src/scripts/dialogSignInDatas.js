const signInFormBtn = document.querySelector(".sign-in__form-btn");
var email = "";
var password = "";

signInFormBtn.addEventListener("click", () =>{
    var email = document.getElementById("sign-in-email").value;
    var password = document.getElementById("sign-in-password").value;
    console.log("email:",email, "\n","password:", password);
})

// const login = () =>{

// }