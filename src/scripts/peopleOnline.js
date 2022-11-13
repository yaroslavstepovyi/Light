const heroLeftIcon = document.querySelectorAll(".hero__left-icon");

const handleClickedPerson = (person) =>{
    console.log(person);
}

heroLeftIcon.forEach((person) =>{
    person.addEventListener("click", () => handleClickedPerson(person))
})