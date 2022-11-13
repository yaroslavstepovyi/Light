const addingFormBtn = document.querySelector(".adding__form-btn");
const filterSearchBtn = document.querySelector(".filter__search-btn");


addingFormBtn.addEventListener("click", () =>{
    var date = new Date().toJSON();
    var addingName = document.getElementById("adding-name").value;
    var addingNameId = document.getElementById("adding-name").id;
    var addingDescription = document.getElementById("adding-description").value;
    var addingDescriptionId = document.getElementById("adding-description").id;
    var addingReview = document.getElementById("adding-review").value;
    var addingReviewId = document.getElementById("adding-review").id;
    var addingImage = document.getElementById("adding-image").value;
    var addingImageId = document.getElementById("adding-image").id;
    
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

filterSearchBtn.addEventListener("click", () =>{
    console.log("addNewCardBtn")
});