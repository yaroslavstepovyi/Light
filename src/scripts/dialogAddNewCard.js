const addingFormBtn = document.querySelector(".adding__form-btn");
var addingName = "";
var addingNameId = "";
var addingDescription = "";
var addingDescriptionId = "";
var addingReview = "";
var addingReviewId = "";
var addingImage = "";
var addingImageId = "";

addingFormBtn.addEventListener("click", () =>{
    var date = new Date().toJSON();
    addingName = document.getElementById("adding-name").value;
    addingNameId = document.getElementById("adding-name").id;
    addingDescription = document.getElementById("adding-description").value;
    addingDescriptionId = document.getElementById("adding-description").id;
    addingReview = document.getElementById("adding-review").value;
    addingReviewId = document.getElementById("adding-review").id;
    addingImage = document.getElementById("adding-image").value;
    addingImageId = document.getElementById("adding-image").id;
    
    let newCard = {
        id: {
            addingName: addingNameId,
            addingDescription: addingDescriptionId,
            addingReview: addingReviewId,
            addingImage: addingImageId,
        },
        name: addingName,
        description: addingDescription,
        review: addingReview,
        image: addingImage,
        date: date,
    }

    console.log(newCard);
})