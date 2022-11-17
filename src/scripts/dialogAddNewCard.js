const addingFormBtn = document.querySelector(".adding__form-btn");
const filterSearchBtn = document.querySelector(".filter__search-btn");


addingFormBtn.addEventListener("click", () =>{
    const date = new Date().toJSON();
    const addingName = document.getElementById("adding-name").value;
    const addingDescription = document.getElementById("adding-description").value;
    const addingReview = document.getElementById("adding-review").value;
    const addingImage = document.getElementById("adding-image").value;
    
    let newCard = {
        id: `${addingName}${date}`,
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