const experienceContentBtn = document.querySelector(".experience__content-btn");

const handlegetItNowClicked = () =>{
    window.location = 'https://store.steampowered.com/';
    console.log("getItNowClicked");
}

experienceContentBtn.addEventListener("click", handlegetItNowClicked)
