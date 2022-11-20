const signIn = document.querySelector(".sign-in");
const signInFormBtn = document.querySelector(".sign-in__form-btn");
const authedHeader = document.querySelector(".authed__header");
const headerNavBtn = document.querySelector(".header__nav-btn");
const backgroundBlur = document.querySelector(".background-blur");

signInFormBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const email = document.getElementById("sign-in-email").value;
    const password = document.getElementById("sign-in-password").value;
    let userData= {
        email: email,
        password: password, 
        id: `${email}${new Date().toJSON()}`,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    userData = JSON.parse(localStorage.getItem("userData"));


});

signInFormBtn.addEventListener("click", () => {
    signIn.classList.add("hidden");
    backgroundBlur.classList.add("hidden-background-blur");
});

//toggle sign in button and user icon:

const handleSignInFormDisplayStorage = () =>{
    authedHeader.style.display = "flex";
    headerNavBtn.style.display = "none";    
}

signInFormBtn.addEventListener("click", handleSignInFormDisplayStorage)

