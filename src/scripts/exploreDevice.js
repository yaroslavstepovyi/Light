const heroLeftText = document.querySelector(".hero__left-text");

const handleEexploreDeviceClick = (e) =>{
    e.preventDefault();
    console.log("EexploreDeviceClick");
}

heroLeftText.addEventListener("click", handleEexploreDeviceClick);