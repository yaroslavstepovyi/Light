const signInFormBtn = document.querySelector(".sign-in__form-btn");
var email = "";
var password = "";

signInFormBtn.addEventListener("click", () =>{
    email = document.getElementById("sign-in-email").value;
    password = document.getElementById("sign-in-password").value;
    let signInLogInfo = {
        email: email,
        password: password, 
    };
    console.log("signInClicked",signInLogInfo);
})
