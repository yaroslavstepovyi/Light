const addingFormBtn = document.querySelector(".adding__form-btn");
var addingName = "";
var addingDescription = "";
var addingReview = "";
var addingImage = "";

addingFormBtn.addEventListener("click", () =>{
    var date = new Date();
    addingName = document.getElementById("adding-name").value;
    addingDescription = document.getElementById("adding-description").value;
    addingReview = document.getElementById("adding-review").value;
    addingImage = document.getElementById("adding-image").value;
    
    let newCard = {
        name: addingName,
        description: addingDescription,
        review: addingReview,
        image: addingImage,
        date: date,
    }

    console.log(newCard);
})