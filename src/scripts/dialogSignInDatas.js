const signInFormBtn = document.querySelector(".sign-in__form-btn");
var email = "";
var password = "";

signInFormBtn.addEventListener("click", () =>{
    var email = document.getElementById("sign-in-email").value;
    var password = document.getElementById("sign-in-password").value;
    let signInLogInfo = {
        email: email,
        password: password, 
    };
    console.log(signInLogInfo);
})
