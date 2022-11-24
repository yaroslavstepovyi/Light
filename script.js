const experienceContentBtn = document.querySelector(".experience__content-btn");

const handlegetItNowClicked = () =>{
    let newWindow = window.open('https://store.steampowered.com/', "_blank");
    newWindow.opener = null;
    console.log("getItNowClicked");
}

experienceContentBtn.addEventListener("click", handlegetItNowClicked);
